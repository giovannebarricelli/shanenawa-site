'use client';

import React, { useState, useEffect, useRef } from 'react';
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

  // Configurações de Scroll (Efeito Godly)
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
      className="relative w-full min-h-screen bg-[#0d0d0d] text-[#fdfcf0] selection:bg-[#00f2ff] selection:text-black font-sans overflow-hidden"
    >
      
      {/* --- BACKGROUND: HARDWARE DA COBRA GRANDE --- */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          rotate: backgroundRotate,
          background: 'radial-gradient(circle at 50% 120%, #1a2a3a 0%, transparent 70%)',
        }}
      />

      {/* --- SEÇÃO 1: O DESPERTAR DO TOTEM (Landing) --- */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center sticky top-0 px-6 text-center">
        
        {/* LOGO SHANENAWA METÁLICO (O Totem Arara) */}
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-8">
            {/* O Nome com Brilho Dinâmico */}
            <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] via-[#00f2ff] to-[#1a2a3a] drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">
                Shanenawa
              </span>
            </h1>
            
            {/* Efeito de Asa / Aura Metálica */}
            <motion.div 
              className="absolute -inset-4 z-0 blur-2xl opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle, #00f2ff 0%, transparent 70%)",
                  "radial-gradient(circle, #4a90e2 0%, transparent 70%)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            />
          </div>

          <motion.div 
            className="mb-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white text-3xl md:text-5xl font-light tracking-[0.3em] uppercase italic">
              Siri Siri Siri
            </span>
          </motion.div>

          <p className="text-[#00f2ff] font-mono text-[10px] md:text-xs tracking-widest uppercase mb-6">
            {`[ Handshake Established: Arara Totem <=> Metal Core ]`}
          </p>

          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/60 font-bold max-w-sm">
            Não é o site... <br/>
            <span className="text-[#00f2ff]">É o rastro que muda o seu DNA.</span>
          </h2>
        </motion.div>
      </section>

      {/* --- SEÇÃO 2: VITRINE DE PRODUTOS (Sites-Obra) --- */}
      <section className="relative z-20 bg-[#0d0d0d] py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card 1: A BOLSA */}
          <motion.div 
            className="group relative border border-white/10 p-10 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#00f2ff] text-black px-4 py-1 text-[10px] font-black rounded-full uppercase mb-6 inline-block">
              Proteção Root
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white tracking-tight italic">A Bolsa que Guarda</h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              O Kene não é enfeite. É uma lei de integridade. Proteja a essência do seu negócio com o Monopólio Estético.
            </p>
            <div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
               <span className="text-[#00f2ff]/20 text-9xl font-black group-hover:scale-110 transition-transform duration-700">K</span>
            </div>
          </motion.div>

          {/* Card 2: CONEXÃO */}
          <motion.div 
            className="group relative border border-white/10 p-10 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#4a90e2] text-white px-4 py-1 text-[10px] font-black rounded-full uppercase mb-6 inline-block">
              Acesso à Raiz
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white tracking-tight italic">Conexão Espiritual</h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              A tecnologia é a nossa nova floresta. Reprograme sua presença digital com o código de visão.
            </p>
            <div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
               <span className="text-[#4a90e2]/20 text-9xl font-black group-hover:scale-110 transition-transform duration-700">W</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- FOOTER: REGISTRO DO RASTRO --- */}
      <footer className="relative z-30 py-20 border-t border-white/10 text-center bg-[#050505]">
        <p className="text-[10px] tracking-[1.2em] uppercase opacity-30 text-white mb-4">
          Autonomia Shanenawa • 2026
        </p>
        <p className="text-[#00f2ff] text-[9px] font-mono opacity-50">
          {`[ SYSTEM STATUS: FLOWZAP_OS // ONLINE ]`}
        </p>
      </footer>

      {/* BOTÃO WHATSAPP (Ação Root) */}
      <motion.a
        href="https://wa.me/5500000000000" // Altere para seu número
        target="_blank"
        className="fixed bottom-10 right-10 z-50 bg-[#00f2ff] text-black p-4 rounded-full shadow-[0_0_20px_rgba(0,242,255,0.4)] flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.894 4.445-9.897 9.896 0 2.158.569 3.857 1.577 5.474l-1.054 3.835 3.974-1.019z"/>
        </svg>
      </motion.a>
    </main>
  );
}