'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      
      {/* SEÇÃO 1: O VAZIO (DESCANSO VISUAL) */}
      <section className="h-screen flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 3 }}
        >
          <h1 className="text-white/20 font-mono tracking-[1em] uppercase text-[10px]">
            [ Início do Fluxo ]
          </h1>
        </motion.div>
      </section>

      {/* SEÇÃO 2: O CÉU ESTRELADO DA AMAZÔNIA */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* O FUNDO DE ESTRELAS */}
        <div className="sky-container">
          <div className="stars"></div>
          {/* Estrelas Cadentes em posições diferentes */}
          <div className="shooting-star" style={{ top: '10%', left: '20%', animationDelay: '0s' }}></div>
          <div className="shooting-star" style={{ top: '30%', left: '60%', animationDelay: '5s' }}></div>
          <div className="shooting-star" style={{ top: '50%', left: '10%', animationDelay: '2s' }}></div>
        </div>

        {/* CONTEÚDO DO PORTAL */}
        <div className="z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="bg-black/20 backdrop-blur-md p-16 rounded-[40px] border border-white/5"
          >
            <h2 className="shane-title-metal text-6xl md:text-[120px] leading-tight italic">
              Shanenawa
            </h2>
            <p className="text-white/40 font-mono tracking-[0.5em] text-xs mt-4 uppercase italic">
              Siri Siri Siri // Conexão Estelar
            </p>
            
            <button className="mt-12 px-10 py-4 border border-[#00f2ff]/30 text-[#00f2ff] font-bold uppercase tracking-widest hover:bg-[#00f2ff] hover:text-black transition-all duration-500">
              Acessar Simbiose
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-[8px] font-mono opacity-20 tracking-[1em] text-white">
        SHANENAWA_CORE_2026
      </footer>
    </main>
  );
}