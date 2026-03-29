'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
      
      {/* 🌌 CÉU DO UNIVERSO (DIAMANTES NO PRETO) */}
      <div className="cosmic-dust-full">
        <div className="dust-point"></div>
        <div className="dust-point opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 💎 O TOTEM DA HISTÓRIA */}
      <div className="z-10 flex flex-col items-center w-full max-w-[95vw] text-center">
        
        {/* TITULO DISCRETO ACIMA */}
        <h3 className="text-white/10 font-serif text-[9px] tracking-[2.5em] mb-32 uppercase select-none">
          Canto do Txána
        </h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center w-full"
        >
          {/* FRASE DE LUTA (LEITURA DE IMPACTO) */}
          <span className="luta-frase text-sm md:text-3xl mb-6">
            A história de luta do povo
          </span>

          {/* SHANENAWA GIGANTE (MONUMENTO AZUL) */}
          <h1 className="shanenawa-3d-huge text-6xl md:text-[180px] lg:text-[280px] leading-none select-none">
            SHANENAWA
          </h1>

          {/* SUBTÍTULO DA MARCA */}
          <p className="mt-16 text-white/20 font-mono text-[9px] md:text-xs tracking-[2em] uppercase">
            uma marca que conta história
          </p>
        </motion.div>

      </div>

      {/* FOOTER TERM */}
      <footer className="absolute bottom-10 w-full text-center opacity-10 font-mono text-[7px] tracking-[1.5em] text-white">
        SHANENAWA_CORE_2026
      </footer>
    </main>
  );
}