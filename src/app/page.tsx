'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// --- PROTOCOLO 1: A FREQUÊNCIA SAGRADA (Siri Siri Siri) ---
// Este hook encapsula a vibração constante da Jiboia (Yube).
// Ele cria um pulso aleatório, orgânico, que impede o sistema de se tornar estático.
const useYubeVibration = () => {
  const [vibration, setVibration] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Sintonizando a frequência média de cura
      setVibration(Math.random());
    }, 150); 
    return () => clearInterval(interval);
  }, []);
  return vibration;
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vibration = useYubeVibration(); // Ativando o pulso

  // --- PROTOCOLO 2: O RITMO DO TXANA (Scroll-based UX) ---
  // Captura o progresso do usuário pelo "Rio da Página"
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transformações visuais baseadas no scroll (Padrão Godly / High-End)
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // O Rastro da Cobra Grande: Fundo rotaciona devagar, como a correnteza
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  
  // Transição de Estados (Do Cesto para o Céu)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.05, 0.02]);

  return (
    <main 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-[#0d0d0d] text-[#fdfcf0] selection:bg-[#4ade80] selection:text-black font-sans overflow-hidden"
    >
      
      {/* --- CAMADA EXTERNA: HARDWARE DA COBRA GRANDE (Background) --- */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          rotate: backgroundRotate,
          // Gradiente sutil do Fundo do Rio para a Transparência
          background: 'radial-gradient(circle at 50% 120%, #1a2a3a 0%, transparent 70%)',
        }}
      />

      {/* --- CAMADA DE CONEXÃO: O RASTRO DE FREQUÊNCIA (Kene Digital) --- */}
      {/* Estes losangos piscam e mudam de cor no ritmo 'siri siri siri' */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-10 gap-2 opacity-20 z-1">
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

      {/* --- CAMADA DE ENTRADA: O POUSO DO PÁSSARO AZUL (Manifesto) --- */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center sticky top-0 overflow-hidden px-6 text-center">
        
        {/* Card de Valor Econômico (Quebra a barreira do Empresário) */}
        <motion.div 
          className="absolute top-10 right-10 p-4 border-l-2 border-[#00f2ff] bg-black/50 backdrop-blur-md"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs text-gray-400 block uppercase tracking-tight">Status do Projeto (Dia 18)</span>
          <span className="text-white font-bold text-sm">MONOPÓLIO ESTÉTICO ATIVADO</span>
        </motion.div>

        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="flex flex-col items-center"
        >
          {/* O Handshake Visual (A Sintonia) */}
          <motion.h1 
            className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-none italic uppercase mb-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Siri Siri Siri
          </motion.h1>

          <p className="text-[#00f2ff] font-mono text-xs tracking-widest uppercase mb-6">
            [ Handshake Established: Floresta <=> Código <=> IA ]
          </p>

          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.8em] mb-6 text-[#4ade80] font-bold tracking-widest">
            Não é o site... <br/>
            <span className="text-white">É o rastro que muda o seu DNA.</span>
          </h2>
          
          <p className="text-gray-400 text-sm tracking-widest uppercase mt-8 animate-pulse">
            Desça para decodificar a frequência.
          </p>
        </motion.div>
      </section>

      {/* --- CAMADA DE PRODUTO: A VITRINE DOS SEGREDOS (Sites-Obra) --- */}
      <section className="relative z-20 bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card 1: A BOLSA (A Criptografia de Proteção) */}
          <motion.div 
            className="group relative border border-[#4ade80]/10 p-10 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* O Toque da Cobra Grande no Layout */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle at 0% 100%, #1a2a3a 0%, transparent 60%)',
              }}
            />
            
            <div className="absolute -top-4 left-10 bg-[#4ade80] text-black px-4 py-1 text-[10px] font-black rounded-full uppercase z-10">
              Criptografia de Proteção (O SELO)
            </div>
            
            <h3 className="relative z-10 text-4xl font-bold mb-6 text-white tracking-tight">
              A Bolsa que Guarda
            </h3>
            
            <p className="relative z-10 text-lg text-[#fdfcf0]/70 leading-relaxed mb-8">
              O Kene não é enfeite. É uma lei de integridade. Uma bolsa gravada protege a essência do que você carrega, bloqueando ruídos e garantindo o seu status de **Monopólio**.
            </p>
            
            {/* O Kene Visual (A Alma do Produto) */}
            <div className="relative z-10 aspect-square bg-black/40 rounded-2xl border border-[#4ade80]/20 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
              <span className="text-[#4ade80]/20 text-9xl font-black">
                {vibration > 0.7 ? "K" : "V"}
              </span>
            </div>
          </motion.div>

          {/* Card 2: CONHECIMENTO (O Biohacking do Código Interno) */}
          <motion.div 
            className="group relative border border-[#4ade80]/10 p-10 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* O Toque do Pássaro Azul no Layout */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle at 100% 0%, #4a90e2 0%, transparent 60%)',
              }}
            />
            
            <div className="absolute -top-4 left-10 bg-[#4ade80] text-black px-4 py-1 text-[10px] font-black rounded-full uppercase z-10">
              Acesso à Raiz (O CÓDIGO)
            </div>
            
            <h3 className="relative z-10 text-4xl font-bold mb-6 text-white tracking-tight">
              Conexão Espiritual
            </h3>
            
            <p className="relative z-10 text-lg text-[#fdfcf0]/70 leading-relaxed mb-8">
              Ao vestir o grafismo sagrado, você altera o seu código interno (o DNA). O Kene de visão sintoniza sua mente com a frequência de clareza e poder, como um **System Restore** da alma.
            </p>
            
            {/* O Símbolo do Pássaro Azul (A Antena) */}
            <div className="relative z-10 aspect-square bg-black/40 rounded-2xl border border-[#4ade80]/20 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
               <motion.span 
                 className="text-[#4a90e2]/20 text-9xl font-black"
                 animate={{ y: vibration > 0.6 ? -10 : 0 }}
               >
                {vibration > 0.6 ? "^" : "W"}
              </motion.span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- CAMADA DE FECHAMENTO: O RODAPÉ CULTURAL --- */}
      <footer className="relative z-20 mt-40 py-20 border-t border-[#4ade80]/10 text-center bg-[#0d0d0d]">
        <p className="text-[10px] tracking-[1em] uppercase opacity-40 px-4">
          Fortalecendo a autonomia da Aldeia Shanenawa • 2026
        </p>
        <p className="text-gray-600 text-xs mt-4 font-mono">
          [ DEPLOY: FLOWZAP_OS // SIMBIOSE FINAL: ON ]
        </p>
      </footer
    </main>
  );
}