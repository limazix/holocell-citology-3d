import React, { useState, useEffect, useCallback } from 'react';
import { ORGANELLES, Organelle } from './types';
import { generateOrganelleImage } from './services/geminiService';
import { HologramDisplay } from './components/HologramDisplay';
import { OrganelleInfo } from './components/OrganelleInfo';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Microscope } from 'lucide-react';
import './firebase'; // Initialize Firebase

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentOrganelle = ORGANELLES[currentIndex];

  const fetchImage = useCallback(async (organelle: Organelle) => {
    if (images[organelle.id]) return;

    setLoading(true);
    setError(null);
    try {
      const url = await generateOrganelleImage(organelle.prompt);
      setImages(prev => ({ ...prev, [organelle.id]: url }));
    } catch (err) {
      setError('Erro ao gerar imagem holográfica. Verifique sua conexão ou chave de API.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [images]);

  useEffect(() => {
    fetchImage(currentOrganelle);
  }, [currentIndex, fetchImage, currentOrganelle]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ORGANELLES.length);
    setInfoOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ORGANELLES.length) % ORGANELLES.length);
    setInfoOpen(false);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000_70%)] opacity-50" />
      </div>

      {/* Main Hologram Area */}
      <div 
        className="relative z-10 w-full h-full cursor-pointer"
        onClick={(e) => {
          // Only trigger next if not clicking on UI buttons
          if ((e.target as HTMLElement).closest('button')) return;
          handleNext();
        }}
      >
        <HologramDisplay 
          imageUrl={images[currentOrganelle.id] || null} 
          isLoading={loading} 
        />
      </div>

      {/* UI Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 px-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 text-white/40 mb-1">
            <Microscope size={14} />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Citologia 3D</span>
          </div>
          <h1 className="text-xl font-serif italic text-white/90">
            {currentOrganelle.name}
          </h1>
          <div className="text-[10px] text-white/30 font-mono mt-1">
            {currentIndex + 1} / {ORGANELLES.length}
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <OrganelleInfo 
        organelle={currentOrganelle} 
        isOpen={infoOpen} 
        onToggle={() => setInfoOpen(!infoOpen)} 
      />

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 px-6 py-3 bg-red-500/20 border border-red-500/30 backdrop-blur-md rounded-full text-red-200 text-xs font-mono"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/5 w-full z-30">
        <motion.div 
          className="h-full bg-white/20"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / ORGANELLES.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
