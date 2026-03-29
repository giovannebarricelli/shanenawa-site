'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
      
      {/* 🌌 O CÉU DO UNIVERSO */}
      <div className="cosmic-dust-full">
        <div className="dust-point"></div>
        <div className="dust-point opacity-40" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* 🛡️ CONTEÚDO CENTRAL */}
      <div className="z-10 text-center flex flex-col items-center">
        
        {/* TÍTULO ORIGINAL (CANTO DO TXÁNA) MAIS DISCRETO ACIMA */}
        <h2 className="text-white/20 font-serif text-xs tracking-[1.5em] mb-32 uppercase">
          Canto do Txána
        </h2>

        {/* ✊ O MANIFESTO DE LUTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center cursor-pointer group"
        >
          {/* FRASE SUPERIOR */}
          <span className="luta-frase text-sm md:text-xl mb-4">
            A história de luta do povo
          </span>

          {/* SHANENAWA GIGANTE EM AZUL 3D */}
          <h1 className="shanenawa-3d-blue text-7xl md:text-9xl lg:text-[180px] leading-none">
            SHANENAWA
          </h1>

          {/* SUBTÍTULO DA MARCA ABAIXO DO NOME GIGANTE */}
          <p className="mt-10 text-white/30 font-mono text-[9px] tracking-[2em] uppercase">
            uma marca que conta história
          </p>
        </motion.div>

      </div>

      {/* FOOTER */}
      <footer className="absolute bottom-10 w-full text-center opacity-10 font-mono text-[7px] tracking-[1em] text-white">
        SIMBIOSE_PROJECT_2026
      </footer>
    </main>
  );
}