'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      
      {/* 🛡️ HEADER TERM (SEM GRADE, SÓ O NOME) */}
      <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 py-4 px-8 vazio-section">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-[#00f2ff] font-black italic text-xl">
            Shanenawa_Txai
          </h1>
          <nav className="flex gap-8 opacity-60">
            <span className="hover:text-[#00f2ff] cursor-pointer">/Rituals</span>
            <span className="hover:text-[#00f2ff] cursor-pointer">/FlowZap</span>
          </nav>
        </div>
      </header>

      {/* 🌑 SEÇÃO DE HOMENAGEM: CANTO DO TXÁNA (O CÉU SAGRADO) */}
      <section className="h-screen w-full flex items-center justify-center p-10 text-center relative overflow-hidden vazio-container">
        
        {/* 1. O CÉU PROFUNDO DE POEIRA CÓSMICA (SHOW DE CÉU) */}
        <div className="cosmic-dust-full">
          <div className="dust-point"></div>
          {/* Camada dupla para mais poeira sem pesar */}
          <div className="dust-point opacity-50" style={{ animationDelay: '2s' }}></div>
          
          {/* ÚNICA ESTRELA CADENTE HORIZONTAL (SUTIL) */}
          <div className="single-horizontal-shooting-star"></div>
        </div>

        {/* 2. A MOLDURA DE CÂMERA DE CINEMA / FOCUS (GLASS) */}
        <div className="camera-focus-frame">
          {/* Texto minimalista da câmera nos cantos */}
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

        {/* 3. CONTEÚDO PRINCIPAL (Homenagem Massiva + Título GIGANTE) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="z-10"
        >
          {/* O DESIGNER DA LETRA ELITE (Canto do Txána - Triplicado) */}
          {/* text-6xl no mobile, text-[320px] no desktop para o 'chic visual' massivo */}
          <h1 className="txana-brand-gigante text-6xl md:text-9xl lg:text-[320px] leading-[1.618]">
            Canto do Txána
          </h1>
          
          {/* A MARCA QUE CONTA HISTÓRIA (SUBTÍTULO MONO - Tamanho mantido) */}
          <p className="sub-homenagem text-white/40 font-mono text-[10px] tracking-[1.2em] mt-10 uppercase">
            uma marca que conta história
          </p>

          <div className="mt-20 opacity-10 animate-bounce">
            <span className="text-white text-xs tracking-[1em]">↓</span>
          </div>
        </motion.div>

        {/* Efeito de luz ambiente muito sutil para não pesar nos 4GB de RAM */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" />
      </section>

      {/* FOOTER TERM */}
      <footer className="py-12 border-t border-white/5 text-center text-[8px] font-mono opacity-20 tracking-[1em] text-white bg-black relative z-10">
        CANTO_DO_TXANA_X_SHANENAWA_2026
      </footer>
    </main>
  );
}