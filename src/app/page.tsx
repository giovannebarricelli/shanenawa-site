import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- PROTOCOLO 1: A FREQUÊNCIA SAGRADA (Siri Siri Siri) ---
// Controla o 'piscar' orgânico e o brilho do metal
const useAraraVibration = () => {
  const [vibration, setVibration] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVibration(Math.random());
    }, 150); 
    return () => clearInterval(interval);
  }, []);
  return vibration;
};

const AraraTotem = () => {
  const vibration = useAraraVibration();

  // --- PALETA DE CORES METÁLICAS SHANENAWA ---
  const metalBlue = "#00c8ff";  // Brilho Metálico do Pássaro
  const coreCyan = "#00f2ff";   // Código Base
  const darkMetal = "#1a2a3a";  // Hardware Base
  const accentMetal = "#4a90e2"; // Transição de Frequência

  return (
    <div className="relative w-full h-screen bg-[#0d0d0d] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. O CAMPO VIBRACIONAL (O Encante) */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${metalBlue} 0%, transparent 70%)`,
          scale: 1 + vibration * 0.1,
          opacity: 0.1 + vibration * 0.05
        }}
      />

      {/* 2. A SIGLA-TOTEM METAMORFÓSICA (SVG Dinâmico) */}
      <motion.svg
        width="400" height="200" viewBox="0 0 400 200"
        className="z-10"
        animate={{
          scale: 1 + vibration * 0.01 // Pulsa levemente
        }}
      >
        <defs>
          {/* GRADIENTE METÁLICO (A Pele) */}
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={darkMetal} />
            <stop offset="30%" stopColor={metalBlue} />
            <stop offset="50%" stopColor="#ffffff" /> {/* Brilho Central */}
            <stop offset="70%" stopColor={accentMetal} />
            <stop offset="100%" stopColor={darkMetal} />
          </linearGradient>
          
          {/* MÁSCARA DE KENE (O Desenho Interno) */}
          <mask id="keneMask">
            <rect x="0" y="0" width="400" height="200" fill="white" />
            {/* Padrões geométricos em preto (cortam o metal) */}
            <path d="M 50,50 L 100,100 L 150,50 L 200,100 L 250,50 M 50,150 L 100,100 M 200,100 L 150,150" fill="transparent" stroke="black" strokeWidth="2" />
          </mask>
        </defs>

        {/* 3. A LETRA BASE (Uma fusão de W, K, S e Asa) */}
        <motion.path
          d="M 50,50 Q 150,150 250,50 Q 150,-50 50,50 Z M 150,150 L 250,150 Q 350,100 250,50 L 150,150" // Exemplo de forma complexa (letra + asa)
          fill="url(#metalGradient)"
          stroke={coreCyan}
          strokeWidth="1.5"
          opacity={0.9 + vibration * 0.1} // O metal 'pisca'
          filter="url(#glow)" // Adiciona brilho (neon)
          
          // Animação de entrada
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
        
        {/* 4. O DETALHE DE KENE (Embutido no metal) */}
        <motion.path
          d="M 75,75 L 125,125 M 175,75 L 225,125"
          stroke={metalBlue}
          strokeWidth="1"
          opacity={0.3 + vibration * 0.2} // O Kene interno brilha
        />

      </motion.svg>

      {/* 5. A ASSINATURA DE FREQUÊNCIA (O "Canto" do Totem) */}
      <div className="z-20 text-center mt-12 text-[#00f2ff] font-mono text-sm tracking-widest uppercase mb-6">
          <motion.h1 
            className="text-white text-5xl font-black tracking-tighter leading-none italic"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Siri Siri Siri
          </motion.h1>
          {`[ Handshake: Arara Totem => Metal Core => On ]`}
      </div>

    </div>
  );
};

export default AraraTotem;