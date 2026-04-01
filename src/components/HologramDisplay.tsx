import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface HologramDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
}

export const HologramDisplay: React.FC<HologramDisplayProps> = ({ imageUrl, isLoading }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
      {/* Central Point Guide (Optional, for calibration) */}
      <div className="absolute w-1 h-1 bg-white/10 rounded-full z-0" />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white/30 font-mono text-xs uppercase tracking-widest"
          >
            Gerando Projeção...
          </motion.div>
        ) : imageUrl ? (
          <motion.div
            key="hologram"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-[80vh] h-[80vh] max-w-full max-h-full"
          >
            {/* Holographic Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scanline_8s_linear_infinite]" />
            
            {/* Top Perspective (Upside Down) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1/3 rotate-180">
              <img src={imageUrl} alt="Top" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>

            {/* Bottom Perspective (Normal) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1/3">
              <img src={imageUrl} alt="Bottom" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>

            {/* Left Perspective (Rotated 90deg Clockwise) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1/3 rotate-90">
              <img src={imageUrl} alt="Left" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>

            {/* Right Perspective (Rotated 90deg Counter-Clockwise) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/3 -rotate-90">
              <img src={imageUrl} alt="Right" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Instructions Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase tracking-[0.2em] pointer-events-none">
        Toque para alternar organelas • Posicione a pirâmide no centro
      </div>
    </div>
  );
};
