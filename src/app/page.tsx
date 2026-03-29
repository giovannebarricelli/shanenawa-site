'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      
      {/* 🛡️ SEÇÃO 1: O CÉU (MUNDO CLARO) */}
      <section className="theme-light h-screen relative flex flex-col items-center justify-center overflow-hidden">
        {/* IMAGEM DA AMAZÔNIA AO FUNDO */}
        <img 
          src="https://images.unsplash.com/photo-1596716075928-a3af825f3c1d?q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Céu Amazônia"
        />
        
        <div className="z-10 text-center p-10">
          <h1 className="text-6xl md:text-[120px] font-black italic uppercase tracking-tighter text-slate-900 leading-none">
            Shanenawa
          </h1>
          <p className="text-slate-600 font-mono text-xs tracking-[0.8em] mt-4 uppercase animate-bounce">
            Rolar para o Fluxo ↓
          </p>
        </div>
      </section>

      {/* 🐍 SEÇÃO 2: O CÓDIGO (MUNDO ESCURO / BIOHACKING) */}
      <section className="theme-dark min-h-screen bg-grid-dark relative flex flex-col items-center justify-center py-24 px-10 border-y border-white/5">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl text-center"
        >
          <h2 className="shane-title-metal text-5xl md:text-8xl mb-8">
            Symbio_OS
          </h2>
          <p className="text-white/60 text-xl md:text-3xl font-light italic leading-relaxed">
            "Deixamos a claridade do céu para mergulhar no rastro da cobra. 
            Onde a ancestralidade encontra o terminal de comando."
          </p>
          <div className="mt-12 p-6 border border-[#00f2ff]/20 bg-[#00f2ff]/5 font-mono text-[10px] text-[#00f2ff] tracking-widest uppercase">
            {`// STATUS: SISTEMA CONECTADO AO DNA DA FLORESTA //`}
          </div>
        </motion.div>
      </section>

      {/* 💻 SEÇÃO 3: A LOJA / FLOWZAP (MUNDO CLARO / FOCO EM VENDAS) */}
      <section className="theme-light py-24 px-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase italic">
            FlowZap_Store
          </h3>
          <p className="text-slate-600 text-lg md:text-xl mb-12">
            O hardware que você precisa para escalar sua operação. 
            Capitalizando o futuro da simbiose.
          </p>
          
          {/* BOTÃO DE IMPACTO */}
          <button className="px-12 py-6 bg-slate-900 text-white font-bold uppercase tracking-[0.3em] hover:bg-[#00f2ff] hover:text-black transition-all duration-500 rounded-full shadow-2xl">
            Acessar Oferta de Lançamento
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="theme-dark py-10 text-center text-[9px] font-mono opacity-30 tracking-[1em]">
        SHANENAWA_CORE_2026
      </footer>

    </main>
  );
}