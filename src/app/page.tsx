'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">
      
      {/* 🛡️ HEADER TERM (SEM GRADE, SÓ O NOME) */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/5 py-4 px-8 vazio-section">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-[#00f2ff] font-black italic text-xl">
            Shanenawa_Txai
          </h1>
          <p className="text-[7px] tracking-[0.6em] text-white/20">
            VER_2.1_ORIGIN_OS
          </p>
        </div>
      </header>

      {/* 🐍 MUNDO 1: O VAZIO (DESCANSO VISUAL TOTAL) */}
      <section className="h-screen relative flex flex-col items-center justify-center vazio-section border-b border-white/5 overflow-hidden">
        <div className="text-center p-10">
          {/* Animação suave para o vazio não ser estático */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-screen absolute inset-0 bg-gradient-radial from-[#ffffff05] to-transparent blur-3xl z-0"
          />
          <h2 className="text-white text-3xl font-light tracking-[0.5em] opacity-40 italic z-10 animate-pulse">
            00_O_Vazio
          </h2>
          <p className="text-white/20 font-mono text-[8px] tracking-[1em] mt-2 z-10">
            [ ROLAR_PARA_INICIAR_A_CRIAÇÃO ↓ ]
          </p>
        </div>
      </section>

      {/* 🐍 MUNDO 2: O NASCIMENTO DO COSMOS (TRANSIÇÃO) */}
      {/* Esta seção cria o degradê do Preto para o Azul Profundo */}
      <section className="cosmos-transition h-[50vh] w-full border-b border-white/5 relative flex items-center justify-center">
        <div className="max-w-2xl text-center">
           <h3 className="shane-title-metal text-4xl mb-6">
             {`{_01_O_Universo_}`}
           </h3>
           <p className="text-white/30 text-lg md:text-2xl font-light italic leading-relaxed">
             "Do nada, a cobra se estica e o rastro de luz cria o primeiro gradiente da realidade. 
             A claridade do céu nasce na profundidade do solo."
           </p>
        </div>
      </section>

      {/* 💻 MUNDO 3: O PORTAL SYMBIO (UNIVERSO + GRADE) */}
      {/* Esta seção tem o fundo de estrelas e a grade neon */}
      <section className="universe-background bg-grid-symbio min-h-screen py-24 px-10 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-panel p-10 md:p-16 border border-[#00f2ff]/10 max-w-4xl"
        >
           <h2 className="shane-title-metal text-6xl md:text-[130px] leading-tight">
             Shanenawa
           </h2>
           <div className="mt-4 flex flex-col gap-2">
              <p className="text-white text-3xl md:text-5xl tracking-[0.4em] font-light uppercase italic">
                Siri Siri Siri
              </p>
              <p className="text-[#00f2ff] font-mono text-[8px] tracking-[0.7em] uppercase opacity-40">
                {`// PROTOCOLO DE SIMBIOSE CONECTADO AO DNA ESTELAR //`}
              </p>
           </div>
           
           {/* Botão de Bote */}
           <button className="mt-16 px-12 py-5 bg-transparent border border-[#00f2ff]/30 text-[#00f2ff] font-bold uppercase tracking-[0.4em] hover:bg-[#00f2ff] hover:text-black transition-all duration-500 text-xs">
             Acessar Simbiose
           </button>
        </div>
      </section>

      {/* FOOTER TERM */}
      <footer className="vazio-section py-10 border-t border-white/5 text-center text-[7px] font-mono opacity-20 tracking-[1em]">
        SHANENAWA_CORE_VER_2.1_2026
      </footer>

    </main>
  );
}