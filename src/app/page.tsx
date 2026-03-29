'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      
      {/* SEÇÃO DE HOMENAGEM */}
      <section className="homenagem-container vazio-container p-6 relative">
        
        {/* 1. CAMADA DE FUMAÇA GRÁFICA (Z-INDEX 1) */}
        <div className="smoke-layer" />

        {/* 2. CONTEÚDO CENTRAL (Z-INDEX 10) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="relative z-10 flex flex-col items-center justify-center text-center"
        >
          {/* TÍTULO: CANTO DO TXÁNA */}
          <h1 className="txana-emerald-metal text-6xl md:text-9xl lg:text-[140px]">
            Canto do Txána
          </h1>
          
          {/* UMA MARCA QUE CONTA HISTÓRIA (SUBTÍTULO - Tamanho Original Mandado) */}
          <p className="mt-12 text-white/40 font-mono text-[10px] md:text-xs tracking-[1.5em] uppercase">
            uma marca que conta história
          </p>

          <div className="mt-20 opacity-10 animate-bounce">
            <span className="text-white text-xs tracking-[1em]">↓</span>
          </div>
        </motion.div>
      </section>

      {/* FOOTER TERM */}
      <footer className="py-12 border-t border-white/5 text-center text-[8px] font-mono opacity-20 tracking-[1em] text-white bg-black relative z-10">
        CANTO_DO_TXANA_X_SHANENAWA_2026
      </footer>
    </main>
  );
}