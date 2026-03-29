'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Movimento Sinuoso (Jiboia): A letra se move em X conforme o scroll desce em Y
  // Baseado na Proporção Áurea para os limites de movimento
  const moveX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, -100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-[300vh] bg-[#030303] selection:bg-white/20">
      
      {/* 🌑 SEÇÃO 1: A ORIGEM (CANTO DO TXÁNA) */}
      <section className="h-screen sticky top-0 flex flex-col items-center justify-center p-10 overflow-hidden">
        
        <motion.div 
          style={{ opacity: opacityHero }}
          className="z-10 text-center"
        >
          {/* Proporção Áurea no tamanho da letra (Escala de Luxo) */}
          <h1 className="homenagem-title text-5xl md:text-[10.6vw] leading-[1.618] mb-[1.618rem]">
            Canto do Txána
          </h1>
          
          <p className="sub-homenagem tracking-[1.618em] opacity-30">
            uma marca que conta história
          </p>

          {/* O Traço que pulsa como o coração da floresta */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.618, ease: "easeInOut" }}
            className="w-[16.18vw] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-[2.618rem]"
          />
        </motion.div>

        {/* Aura etérea de fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_61.8%)]" />
      </section>

      {/* 🐍 SEÇÃO 2: O RASTRO (TRANSIÇÃO SINUOSA) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ x: moveX }} // O movimento da jiboia acontece aqui
          className="flex flex-col items-center"
        >
          <p className="text-white/10 font-serif italic text-2xl md:text-5xl tracking-[0.3em] whitespace-nowrap">
             O rastro da cobra grande é a primeira geometria
          </p>
          <div className="h-[61.8vh] w-[1px] bg-gradient-to-b from-white/20 to-transparent mt-10" />
        </motion.div>
      </section>

      {/* 💻 SEÇÃO 3: PORTAL SHANENAWA (O DESTINO) */}
      <section className="min-h-screen flex items-center justify-center universe-stars-only relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.618 }}
          className="glass-panel p-[6.18vw] text-center border border-white/5 mx-6"
        >
           <h2 className="shane-title-metal text-6xl md:text-[8.5vw] italic leading-none">
             Shanenawa
           </h2>
           <p className="text-white/40 font-mono tracking-[1em] text-[8px] mt-[1.618rem] uppercase">
             Siri Siri Siri // Conexão Vital
           </p>
           
           <button className="mt-[4.236rem] px-[2.618rem] py-[1rem] border border-white/20 text-white font-light uppercase tracking-[0.618em] hover:bg-white hover:text-black transition-all duration-700 text-[10px]">
             Entrar na Simbiose
           </button>
        </motion.div>
      </section>

      {/* FOOTER MATEMÁTICO */}
      <footer className="py-[1.618rem] text-center opacity-10 font-mono text-[7px] tracking-[1.618em]">
        PH_RATIO_ALIGNED // 2026
      </footer>

    </main>
  );
}