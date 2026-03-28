'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
      
      {/* Aura de fundo (O rastro da Cobra) */}
      <div className="bg-glow blur-[100px] -top-20 -left-20" />
      <div className="bg-glow blur-[100px] -bottom-20 -right-20" />

      {/* PAINEL CENTRAL (O TOTEM) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="glass-panel relative z-10 p-12 md:p-24 flex flex-col items-center"
      >
        
        {/* A PENA (Simulada para teste de sombra) */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="feather-layer mb-10 text-[#00f2ff] opacity-80"
        >
          {/* Ícone representando a Pena Cinematográfica */}
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
        </motion.div>

        {/* NOME METÁLICO */}
        <h1 className="shane-title text-7xl md:text-[120px] uppercase italic">
          Shanenawa
        </h1>

        <div className="mt-4 flex flex-col items-center gap-2">
          <span className="text-white/80 text-3xl tracking-[0.4em] font-light uppercase italic">
            Siri Siri Siri
          </span>
          <span className="text-[#00f2ff] font-mono text-[9px] tracking-[0.8em] opacity-40">
            {`// PROTOCOLO DE SIMBIOSE ATIVO //`}
          </span>
        </div>

        <p className="mt-12 text-[10px] tracking-[0.5em] text-white/30 font-bold max-w-xs text-center leading-loose">
          O RASTRO QUE MUDA <br/> O SEU DNA.
        </p>

      </motion.div>

    </main>
  );
}