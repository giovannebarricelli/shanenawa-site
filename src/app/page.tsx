'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      
      {/* 🌑 SEÇÃO DE HOMENAGEM: CANTO DO TXÁNA (O CÉU ESTRELADO) */}
      <section className="h-screen w-full flex items-center justify-center p-10 text-center relative overflow-hidden vazio-container">
        
        {/* 1. O CÉU ESTRELADO PISCANTE NO FUNDO */}
        <div className="sky-stars-blink"></div>

        {/* 2. A MOLDURA DE CÂMERA DIGITAL / FOCO (GLASS) */}
        <div className="camera-focus-frame">
          {/* Ponto de REC piscante */}
          <div className="rec-ponto"></div>
          
          {/* Símbolos de Câmera nos cantos (SVG Minimalista) */}
          <div className="absolute top-8 left-8 text-white/10 font-mono text-[9px] tracking-widest">
            {`[REC]`}
          </div>
          <div className="absolute top-8 right-8 text-white/10 font-mono text-[9px] tracking-widest mr-8">
            {`30_MAR_2026`}
          </div>
          <div className="absolute bottom-8 left-8 text-white/10 font-mono text-[9px] tracking-widest">
            {`00:30 // ORIGIN_STORY`}
          </div>
          <div className="absolute bottom-8 right-8 text-white/10 font-mono text-[9px] tracking-widest">
            {`4K // S_OS`}
          </div>
        </div>

        {/* 3. O TEXTO PRINCIPAL (Homenagem Massiva) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="z-10"
        >
          {/* O DESIGNER DA LETRA ELITE (Canto do Txána) */}
          {/* text-6xl no mobile, text-[140px] no desktop para o 'chic visual' */}
          <h1 className="txana-brand-elite text-6xl md:text-9xl lg:text-[140px] leading-[1.618]">
            Canto do Txána
          </h1>
          
          {/* A MARCA QUE CONTA HISTÓRIA (SUBTÍTULO MONO) */}
          <p className="sub-homenagem text-white/40 font-mono text-[10px] tracking-[1.2em] mt-10 uppercase">
            uma marca que conta história
          </p>

          <div className="mt-20 opacity-10 animate-bounce">
            <span className="text-white text-xs tracking-[1em]">↓</span>
          </div>
        </motion.div>

        {/* Efeito de luz ambiente de nebuloza no centro (sutil para 4GB) */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.02),transparent_70%)]" />
      </section>

      {/* FOOTER TERM */}
      <footer className="py-12 border-t border-white/5 text-center text-[8px] font-mono opacity-20 tracking-[1em] text-white bg-black relative z-10">
        CANTO_DO_TXANA_X_SHANENAWA_2026
      </footer>
    </main>
  );
}