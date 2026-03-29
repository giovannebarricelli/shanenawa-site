'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505] bg-grid-root relative">
      
      {/* 🛡️ HEADER (BARRA DE NAVEGAÇÃO SUPERIOR) */}
      <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-[#00f2ff] font-black italic tracking-tighter text-xl">
              SHANENAWA_TXAI
            </h1>
            <span className="text-[7px] tracking-[0.6em] text-white/30 font-mono">
              VER_2.0_SYMBIO_OS
            </span>
          </div>
          <nav className="flex gap-8 font-mono text-[9px] tracking-[0.3em] uppercase opacity-60">
            <span className="hover:text-[#00f2ff] transition-colors cursor-pointer">/RITUAL</span>
            <span className="hover:text-[#00f2ff] transition-colors cursor-pointer">/BIOHACKING</span>
            <span className="hover:text-[#00f2ff] transition-colors cursor-pointer">/FLOWZAP</span>
          </nav>
        </div>
      </header>

      {/* 🐍 HERO SECTION (ESPAÇO PARA A FOTO) */}
      <section className="relative mt-[70px] h-[55vh] md:h-[65vh] w-full overflow-hidden border-b border-white/5">
        
        {/* Espaço reservado para sua Imagem (Hero) */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Se quiser testar com uma imagem real, descomente a linha abaixo: */}
          {/* <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23" className="w-full h-full object-cover opacity-50" /> */}
          <div className="w-full h-full flex items-center justify-center opacity-20">
             <p className="text-[#00f2ff] font-mono text-[10px] tracking-[1.2em] animate-pulse italic">
               [ INSERIR_TEXTURA_VISUAL_AQUI ]
             </p>
          </div>
        </div>

        {/* MÁSCARA DE TEXTO CENTRAL */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 bg-black/40">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="glass-panel p-10 md:p-16 border border-[#00f2ff]/10"
          >
             <h2 className="shane-title text-6xl md:text-[140px] leading-tight">
               Shanenawa
             </h2>
             <div className="mt-4 flex flex-col gap-2">
                <p className="text-white text-3xl md:text-5xl tracking-[0.4em] font-light uppercase italic">
                  Siri Siri Siri
                </p>
                <p className="text-[#00f2ff] font-mono text-[8px] tracking-[0.7em] uppercase opacity-40">
                  {`// PROTOCOLO DE SIMBIOSE ATIVO //`}
                </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 💻 CONTEÚDO INFERIOR */}
      <section className="py-24 px-10 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-[#00f2ff] font-mono text-xs tracking-[0.5em] uppercase mb-10 opacity-40">
            01_Conexão de Dados
          </h3>
          <p className="text-white/70 text-xl md:text-3xl font-light leading-relaxed italic">
            "A Cobra Grande não é apenas um mito, é o fluxo de bits que percorre o hardware da realidade."
          </p>
          
          {/* Botão de Bote */}
          <button className="mt-16 px-12 py-5 bg-transparent border border-[#00f2ff]/30 text-[#00f2ff] font-bold uppercase tracking-[0.4em] hover:bg-[#00f2ff] hover:text-black transition-all duration-500 text-xs">
            Acessar Simbiose
          </button>
        </div>
      </section>

      {/* FOOTER TERM */}
      <footer className="py-10 border-t border-white/5 text-center text-[8px] font-mono opacity-20 tracking-[1em]">
        SYS_OPERATIONAL: SHANENAWA_CORE_2026
      </footer>

    </main>
  );
}