'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] relative">
      
      {/* 🌌 UNIVERSO AFASTADO (SHOW DE CÉU) */}
      <div className="cosmic-dust-full">
        <div className="dust-point" />
        <div className="dust-point opacity-40 translate-x-20 translate-y-40" />
        <div className="single-horizontal-shooting-star" />
        
        {/* KENE SAGRADO (CONSTELAÇÃO DISCRETA) */}
        <div className="absolute top-[20%] right-[15%] opacity-5 rotate-45 scale-[2]">
           <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.3">
              <path d="M0 50 L25 25 L50 50 L75 75 L100 50 L75 25 L50 50 L25 75 Z" />
           </svg>
        </div>
      </div>

      {/* 📹 MOLDURA CINEMATOGRÁFICA (AFASTADA) */}
      <div className="absolute inset-0 z-10 pointer-events-none p-12 md:p-24">
        <div className="h-full w-full border border-white/5 relative">
             <div className="absolute top-6 right-6 flex items-center gap-3">
               <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
               <span className="text-white/20 font-mono text-[10px] tracking-widest uppercase">Recording History</span>
             </div>
             <div className="absolute bottom-6 left-6 text-white/10 font-mono text-[8px] tracking-[1em]">
               ORIGIN_SHANENAWA_CORE_2026
             </div>
        </div>
      </div>

      {/* 💎 CONTEÚDO CENTRAL - ESCALA MONUMENTAL */}
      <section className="relative z-20 h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* TÍTULO GIGANTE (320px no Desktop) */}
          <h1 className="txana-brand-glass-emerald text-6xl md:text-9xl lg:text-[320px] leading-[0.85] mb-16">
            Canto do Txána
          </h1>
          
          {/* SUBTÍTULO COM LEITURA PLENA (32px no Desktop) */}
          <p className="text-white/60 font-mono text-xs md:text-2xl lg:text-[32px] tracking-[1.5em] uppercase">
            uma marca que conta história
          </p>

          <div className="mt-40 opacity-20 animate-bounce scale-150">
            <span className="text-white text-xs tracking-[1em]">↓</span>
          </div>
        </motion.div>
      </section>

      {/* FOOTER TERM */}
      <footer className="absolute bottom-6 w-full text-center opacity-10 font-mono text-[7px] tracking-[1em] text-white z-20">
        CANTO_DO_TXANA_X_SHANENAWA_2026
      </footer>

    </main>
  );
}