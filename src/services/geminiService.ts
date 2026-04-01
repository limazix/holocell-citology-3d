import { GoogleGenAI } from "@google/genai";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

/**
 * Generates or retrieves a cached organelle image from Firebase Storage.
 * @param organelleId Unique identifier for the organelle (used as filename)
 * @param prompt The prompt to generate the image if not cached
 * @returns The download URL of the image
 */
export async function getOrganelleImage(organelleId: string, prompt: string): Promise<string> {
  const CACHE_VERSION = 'v9'; // Increment version to force refresh for internal structure prompts
  const storageRef = ref(storage, `organelles/${CACHE_VERSION}/${organelleId}.png`);

  // 1. Try to get existing image from cache (Firebase Storage)
  try {
    const cachedUrl = await getDownloadURL(storageRef);
    console.log(`Using cached image for ${organelleId}`);
    return cachedUrl;
  } catch (error: any) {
    // If error is 404 (not found), proceed to generate
    if (error.code !== 'storage/object-not-found') {
      console.error("Error checking cache:", error);
    }
  }

  // 2. Generate new image if not found in cache
  console.log(`Generating new image for ${organelleId}...`);
  try {
    // Initialize AI inside the function to use the latest API key
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
      throw new Error("No API key found for Gemini");
    }
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `${prompt} The subject must be centered on a pure black background. IMPORTANT: Do not include any pyramids, stands, glass cases, or background structures. Only the biological structure should be visible. High quality 3D scientific visualization.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    let base64Data = "";
    const candidates = response.candidates || [];
    if (candidates.length === 0) {
      console.error("Gemini returned no candidates.");
      throw new Error("No candidates returned by Gemini");
    }

    const parts = candidates[0].content?.parts || [];
    console.log(`Response parts count: ${parts.length}`);
    
    for (const part of parts) {
      if (part.inlineData) {
        base64Data = part.inlineData.data;
        break;
      } else if (part.text) {
        console.log(`Gemini returned text: ${part.text}`);
      }
    }

    if (!base64Data) {
      throw new Error("No image data found in Gemini response. It might have been blocked or returned text only.");
    }

    // 3. Upload to Firebase Storage for future use
    const dataUrl = `data:image/png;base64,${base64Data}`;
    await uploadString(storageRef, dataUrl, 'data_url');
    
    // 4. Return the new download URL
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error("Error generating or uploading image:", error);
    throw error;
  }
}
