'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden">
      
      {/* BACKGROUND ESTELAR */}
      <div className="cosmic-dust-full">
        <div className="dust-point"></div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="h-screen w-full flex flex-col items-center justify-center p-6 text-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          {/* TÍTULO: CANTO DO TXÁNA (GROSSO E GIGANTE) */}
          <h1 className="txana-brand-solid-emerald text-5xl md:text-8xl lg:text-[160px] leading-tight">
            Canto do Txána
          </h1>
          
          {/* SUBTÍTULO: UMA MARCA QUE CONTA HISTÓRIA */}
          <p className="sub-homenagem-bold text-[10px] md:text-sm mt-8 uppercase">
            uma marca que conta história
          </p>

          {/* BOTÃO DE MANIFESTO (TEXTO QUE VOCÊ ESCOLHEU) */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            className="mt-20 px-10 py-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/50 transition-all text-white/50 text-[11px] tracking-[0.5em] uppercase backdrop-blur-md"
          >
             A história de luta do povo shanenawa
          </motion.button>
        </motion.div>

      </section>

      {/* RODAPÉ MINIMALISTA */}
      <footer className="absolute bottom-8 w-full text-center opacity-10 font-mono text-[7px] tracking-[1em] text-white">
        CANTO_DO_TXANA_2026
      </footer>
    </main>
  );
}