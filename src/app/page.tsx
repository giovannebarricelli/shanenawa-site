'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Home() {
  const maskRef = useRef<HTMLDivElement>(null);

  // Hook para capturar as coordenadas do mouse e atualizar o CSS
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      // Atualiza as variáveis CSS diretamente no body para performance
      document.body.style.setProperty('--mouse-x', `${x}px`);
      document.body.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] relative cursor-none">
      
      {/* 🌌 UNIVERSO EM MOVIMENTO (CÉU DO UNIVERSO) */}
      <div className="cosmic-void">
        <div className="dust-point" />
        <div className="dust-point opacity-40 translate-x-10 translate-y-20" />
        <div className="lone-cadente" />
      </div>

      {/* 🛡️ A MÁSCARA MÁGICA: AFASTANDO AS TREVAS (跟随鼠标) */}
      <div ref={maskRef} className="darkness-mask"></div>

      {/* 📹 INTERFACE CINEMATOGRÁFICA (MOLDURA) */}
      <div className="absolute inset-0 z-10 pointer-events-none p-12 border-[1px] border-white/5 m-8">
        <div className="absolute top-4 left-6 text-[8px] font-mono opacity-20 tracking-widest uppercase">
          Sys_Operational: Shanenawa_Core
        </div>
      </div>

      {/* 💎 CONTEÚDO CENTRAL */}
      <section className="relative z-20 h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="glass-morph p-20"
        >
          {/* TÍTULO MASSIVO: CANTO DO TXÁNA */}
          <h1 className="txana-emerald-metal text-5xl md:text-8xl lg:text-[110px] leading-[1.618]">
            Canto do Txána
          </h1>
          
          {/* UMA MARCA QUE CONTA HISTÓRIA (SUBTÍTULO - Tamanho Original Mandado) */}
          <p className="mt-12 text-white/30 font-mono text-[9px] tracking-[1.5em] uppercase">
            uma marca que conta história
          </p>
          
          <button className="mt-24 px-10 py-3 border border-white/10 hover:border-emerald-500/50 transition-all text-white/40 text-[10px] tracking-[0.8em] uppercase backdrop-blur-sm">
             Acessar Simbiose
          </button>
        </motion.div>
      </section>

      {/* GEOMETRIA SAGRADA (Kene Jiboia Escondido na Máscara) */}
      <div className="absolute top-[10%] right-[10%] opacity-10 rotate-12 z-0 scale-150">
         <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
            <path d="M0 50 L25 25 L50 50 L75 75 L100 50 L75 25 L50 50 L25 75 Z" />
            <circle cx="50" cy="50" r="1" fill="white" />
         </svg>
      </div>

      <footer className="absolute bottom-10 w-full text-center opacity-10 font-mono text-[7px] tracking-[1em] text-white z-10">
        CANTO_DO_TXANA_X_SHANENAWA_2026
      </footer>
    </main>
  );
}