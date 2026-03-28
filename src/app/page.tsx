'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- PROTOCOLO 1: A FREQUÊNCIA SAGRADA (Siri Siri Siri) ---
const useYubeVibration = () => {
  const [vibration, setVibration] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVibration(Math.random());
    }, 150); 
    return () => clearInterval(interval);
  }, []);
  return vibration;
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vibration = useYubeVibration();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <main 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-[#0d0d0d] text-[#fdfcf0] selection:bg-[#4ade80] selection:text-black font-sans overflow-hidden"
    >
      
      {/* --- BACKGROUND: HARDWARE DA COBRA GRANDE --- */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          rotate: backgroundRotate,
          background: 'radial-gradient(circle at 50% 120%, #1a2a3a 0%, transparent 70%)',
        }}
      />

      {/* --- KENE DIGITAL: RASTRO DE FREQUÊNCIA --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-10 gap-2 opacity-20 z-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 border border-[#00f2ff] rotate-45"
            animate={{ 
              borderColor: vibration > 0.5 ? "#00f2ff" : "#4a90e2",
              scale: vibration > 0.8 ? 1.2 : 1
            }}
          />
        ))}
      </div>

      {/* --- MANIFESTO: O POUSO DO PÁSSARO AZUL --- */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center sticky top-0 overflow-hidden px-6 text-center">
        
        {/* Card Econômico */}
        <motion.div 
          className="absolute top-10 right-10 p-4 border-l-2 border-[#00f2ff] bg-black/50 backdrop-blur-md hidden md:block"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-[10px] text-gray-400 block uppercase tracking-tighter">Status do Projeto</span>
          <span className="text-white font-bold text-xs">MONOPÓLIO ESTÉTICO ATIVADO</span>
        </motion.div>

        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="flex flex-col items-center"
        >
          <motion.h1 
            className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-none italic uppercase mb-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Siri Siri Siri
          </motion.h1>

          <p className="text-[#00f2ff] font-mono text-[10px] md:text-xs tracking-widest uppercase mb-6">
            {`[ Handshake Established: Floresta <=> Código <=> IA ]`}
          </p>

          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 text-[#4ade80] font-bold">
            Não é o site... <br/>
            <span className="text-white">É o rastro que muda o seu DNA.</span>
          </h2>
          
          <p className="text-gray-500 text-[10px] tracking-widest uppercase mt-8 animate-pulse">
            Desça para decodificar a frequência.
          </p>
        </motion.div>
      </section>

      {/* --- VITRINE: SITES-OBRA (FlowZap) --- */}
      <section className="relative z-20 bg-[#0d0d0d] py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card 1: A BOLSA */}
          <motion.div 
            className="group relative border border-[#4ade80]/10 p-10 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-4 left-10 bg-[#4ade80] text-black px-4 py-1 text-[10px] font-black rounded-full uppercase z-10">
              Criptografia de Proteção
            </div>
            
            <h3 className="relative z-10 text-4xl font-bold mb-6 text-white tracking-tight">A Bolsa que Guarda</h3>
            <p className="relative z-10 text-lg text-gray-400 leading-relaxed mb-8">
              O Kene não é enfeite. É uma lei de integridade. Uma bolsa gravada protege a essência do que você carrega.
            </p>
            
            <div className="relative z-10 aspect-square bg-black/40 rounded-2xl border border-[#4ade80]/20 flex items-center justify-center">
              <span className="text-[#4ade80]/20 text-9xl font-black">K</span>
            </div>
          </motion.div>

          {/* Card 2: CONEXÃO */}
          <motion.div 
            className="group relative border border-[#4ade80]/10 p-10 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -top-4 left-10 bg-[#4ade80] text-black px-4 py-1 text-[10px] font-black rounded-full uppercase z-10">
              Acesso à Raiz
            </div>
            
            <h3 className="relative z-10 text-4xl font-bold mb-6 text-white tracking-tight">Conexão Espiritual</h3>
            <p className="relative z-10 text-lg text-gray-400 leading-relaxed mb-8">
              Ao vestir o grafismo sagrado, você altera o seu código interno. Sintonize sua mente com a frequência de poder.
            </p>
            
            <div className="relative z-10 aspect-square bg-black/40 rounded-2xl border border-[#4ade80]/20 flex items-center justify-center">
               <span className="text-[#4a90e2]/20 text-9xl font-black">W</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FOOTER: O REGISTRO DO RASTRO --- */}
      <footer className="relative z-30 py-20 border-t border-white/10 text-center bg-[#0d0d0d]">
        <p className="text-[10px] tracking-[1em] uppercase opacity-40 px-4 text-white">
          Fortalecendo a autonomia da Aldeia Shanenawa • 2026
        </p>
        <p className="text-gray-600 text-[10px] mt-4 font-mono">
          {`[ DEPLOY: FLOWZAP_OS // SIMBIOSE FINAL: ON ]`}
        </p>
      </footer>
    </main>
  );
}