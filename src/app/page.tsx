'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center relative">
      
      {/* 🌌 CÉU NÍTIDO E FOCADO */}
      <div className="cosmic-dust-full">
        <div className="dust-point"></div>
        <div className="dust-point opacity-60" style={{ animationDelay: '1s', transform: 'rotate(45deg)' }}></div>
      </div>

      {/* 🛡️ CONTEÚDO QUE TOMA CONTA DA TELA */}
      <div className="z-10 flex flex-col items-center w-full px-4">
        
        {/* TÍTULO NO TOPO (CANTO DO TXÁNA) */}
        <h3 className="text-white/20 font-serif text-[10px] tracking-[2em] mb-48 uppercase">
          Canto do Txána
        </h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center w-full"
        >
          {/* FRASE DE LUTA (LEITURA CLARA) */}
          <span className="luta-frase text-xs md:text-2xl mb-6">
            A história de luta do povo
          </span>

          {/* SHANENAWA GIGANTE (VISUAL GRÁFICO TOTAL) */}
          <h1 className="shanenawa-3d-gigante text-7xl md:text-[150px] lg:text-[240px] leading-none select-none">
            SHANENAWA
          </h1>

          {/* SUBTÍTULO DA MARCA (SIMBIOSE) */}
          <p className="mt-16 text-white/40 font-mono text-[10px] md:text-sm tracking-[2.5em] uppercase">
            uma marca que conta história
          </p>
        </motion.div>

      </div>

      {/* FOOTER DISCRETO */}
      <footer className="absolute bottom-8 w-full text-center opacity-10 font-mono text-[8px] tracking-[1.5em] text-white">
        SHANENAWA_CORE_2026
      </footer>
    </main>
  );
}