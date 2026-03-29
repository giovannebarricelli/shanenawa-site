'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505] text-[#fff] font-sans selection:bg-[#00f2ff] selection:text-black">
      
      {/* 🛡️ 1. O HEADER / MENU (ESTILO TERMINAL LUMINOSO) */}
      <header className="w-full bg-[#0d0d0d] border-b border-white/5 py-3 px-6 fixed top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-black italic tracking-tighter uppercase text-[#00f2ff]">
            Shanenawa_Txa<span className="animate-pulse">i</span>
          </h1>
          <nav className="flex gap-6 font-mono text-[10px] tracking-[0.4em] uppercase text-white/50">
            <span className="hover:text-[#00f2ff] cursor-pointer">/01_Rituals</span>
            <span className="hover:text-[#00f2ff] cursor-pointer">/02_Vision</span>
            <span className="hover:text-[#00f2ff] cursor-pointer">/03_Zap</span>
          </nav>
        </div>
      </header>

      {/* 🐍 2. A HERO SECTION (A "JANELA" DA FOTO) */}
      {/* Adicionei 'mt-[50px]' para compensar o header fixo */}
      <section className="w-full mt-[50px] relative overflow-hidden h-[40vh] md:h-[60vh] border-b border-white/5">
        
        {/* ESPAÇO PARA FOTO/FUNDO LUMINOSO */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* ⚠️ AQUI ENTRA A FOTO: Substitua a 'div' abaixo por uma tag 'img' */}
          {/* Exemplo: <img src="/caminho/para/sua/foto.webp" className="w-full h-full object-cover" alt="..." /> */}
          <div className="w-full h-full bg-[#050505] relative flex items-center justify-center">
            {/* Um gradiente leve para não travar o PC */}
            <div className="absolute inset-0 bg-gradient-radial from-[#00f2ff0a] to-transparent blur-[120px]" />
            {/* Texto de placeholder até você ter a foto */}
            <p className="text-[#00f2ff] font-mono text-[10px] tracking-[1em] opacity-30 animate-pulse">
              {`// [ WAITING FOR MEDITATION_FRAME ] //`}
            </p>
          </div>
        </div>

        {/* MÁSCARA SHANENAWA (ESTÁTICA, SEM PESAR NA RAM) */}
        <div className="absolute inset-0 z-10 p-12 md:p-24 flex flex-col items-center justify-center text-center bg-black/60 backdrop-blur-sm">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <h2 className="shane-title text-6xl md:text-9xl uppercase italic tracking-tighter mb-4">
              Shanenawa
            </h2>
          </motion.div>
          
          <div className="space-y-1 mb-8">
            <p className="text-white text-2xl md:text-4xl font-light tracking-[0.4em] uppercase italic opacity-80">
              Siri Siri Siri
            </p>
            <p className="text-[#00f2ff] font-mono text-[9px] tracking-[0.7em] uppercase opacity-40">
              {`// [ RASTRO DE CURA CONECTADO ] //`}
            </p>
          </div>
        </div>

      </section>

      {/* 💻 3. A CONTEÚDO (O CHÃO DO TOTEM) */}
      <section className="w-full flex-grow bg-[#050505] p-12 md:p-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-shane-metal text-3xl font-black mb-6 shane-title italic">01_How to connect</h3>
          <p className="text-white/60 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            NÃO É O SITE... É O RASTRO QUE MUDA O SEU DNA. ACESSE A SIMBIOSE.
          </p>
        </div>
      </section>

    </main>
  );
}