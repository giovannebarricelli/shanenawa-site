'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      
      {/* 🛡️ HEADER FIXO (ESTILO TERMINAL) */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-[#00f2ff] font-black italic tracking-tighter uppercase text-xl">
            Shanenawa_Txai
          </h1>
          <nav className="flex gap-6 font-mono text-[9px] tracking-[0.3em] uppercase opacity-60">
            <span className="hover:text-[#00f2ff] cursor-pointer">/Rituals</span>
            <span className="hover:text-[#00f2ff] cursor-pointer">/Biohacking</span>
            <span className="hover:text-[#00f2ff] cursor-pointer">/FlowZap</span>
          </nav>
        </div>
      </header>

      {/* 🐍 HERO SECTION (A JANELA DA FOTO) */}
      <section className="hero-container mt-[60px]">
        {/* Placeholder da Foto - Quando tiver a sua, troque a DIV abaixo por <img src="/suafoto.jpg" className="hero-image" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#00f2ff05] to-[#050505] flex items-center justify-center">
           <p className="text-[#00f2ff] font-mono text-[10px] tracking-[1em] opacity-20 animate-pulse">
             [ WAITING_FOR_IMAGE_INPUT ]
           </p>
        </div>

        {/* TEXTO SOBRE A FOTO */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-10 text-center"
          >
            <h2 className="shane-title text-5xl md:text-8xl uppercase italic">
              Shanenawa
            </h2>
            <p className="text-white text-xl md:text-3xl tracking-[0.5em] uppercase font-light mt-2">
              Siri Siri Siri
            </p>
          </motion.div>
        </div>
      </section>

      {/* 💻 CONTEÚDO (O CHÃO DO TOTEM) */}
      <section className="py-20 px-10 text-center">
        <h3 className="text-[#00f2ff] font-mono text-xs tracking-[0.5em] uppercase mb-6 opacity-40">
          // Protocolo de Simbiose //
        </h3>
        <p className="text-white/60 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed italic">
          "O RASTRO QUE MUDA O SEU DNA. ACESSE A SIMBIOSE ENTRE O CÓDIGO ANCESTRAL E O HARDWARE MODERNO."
        </p>
        
        {/* BOTÃO DE CONVERSÃO (FLOWZAP) */}
        <button className="mt-12 px-10 py-4 border border-[#00f2ff]/30 text-[#00f2ff] font-bold uppercase tracking-widest hover:bg-[#00f2ff] hover:text-black transition-all duration-500">
          Entrar no Fluxo
        </button>
      </section>

    </main>
  );
}