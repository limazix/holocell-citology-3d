import React from 'react';
import { motion } from 'motion/react';
import { Organelle } from '../types';
import { Info, X } from 'lucide-react';

interface OrganelleInfoProps {
  organelle: Organelle;
  isOpen: boolean;
  onToggle: () => void;
}

export const OrganelleInfo: React.FC<OrganelleInfoProps> = ({ organelle, isOpen, onToggle }) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={onToggle}
        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        {isOpen ? <X size={20} /> : <Info size={20} />}
      </button>

      <motion.div
        initial={false}
        animate={{
          x: isOpen ? 0 : 400,
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute top-14 right-0 w-80 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-white shadow-2xl"
      >
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-serif italic text-white/90 leading-tight">
              {organelle.name}
            </h2>
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">
              {organelle.scientificName}
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <section className="space-y-1">
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-white/30">Descrição</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {organelle.description}
            </p>
          </section>

          <section className="space-y-1">
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-white/30">Função</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {organelle.function}
            </p>
          </section>

          <section className="space-y-1">
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-white/30">Estrutura</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {organelle.structure}
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
