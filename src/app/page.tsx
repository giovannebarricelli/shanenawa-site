'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  
  // Captura o progresso do scroll na página
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Efeitos de animação baseados no scroll (Padrão Godly)
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const keneRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <main ref={containerRef} className="bg-[#050a05] text-[#fdfcf0] selection:bg-[#4ade80] selection:text-black font-sans min-h-screen">
      
      {/* SEÇÃO 1: O MANIFESTO (Abertura Impactante) */}
      <section className="h-screen flex flex-col items-center justify-center sticky top-0 overflow-hidden px-6">
        <motion.div 
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="z-10 text-center"
        >
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.8em] mb-6 text-[#4ade80] font-bold tracking-widest">Tecnologia Ancestral</h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
            Não é a roupa.<br/>
            <span className="text-white">É o Kene.</span>
          </h1>
          <p className="mt-8 opacity-40 text-sm tracking-widest uppercase">Desça para decodificar</p>
        </motion.div>

        {/* Kene de fundo que gira suavemente no scroll */}
        <motion.div 
          style={{ rotate: keneRotate }}
          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        >
          <div className="w-[150%] h-[150%] border-[1px] border-[#4ade80] border-dashed rounded-full" />
        </motion.div>
      </section>

      {/* SEÇÃO 2: A VITRINE DOS SEGREDOS (Cards que contam a história) */}
      <section className="relative z-20 bg-[#050a05] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Card 1: A BOLSA (Proteção) */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative border border-[#4ade80]/10 p-10 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md"
          >
            <div className="absolute -top-4 left-10 bg-[#4ade80] text-black px-4 py-1 text-[10px] font-black rounded-full uppercase">
              Criptografia de Proteção
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white">A Bolsa que Guarda</h3>
            <p className="text-lg text-[#fdfcf0]/70 leading-relaxed mb-8">
              O Kene não é enfeite. É o selo de integridade. Uma bolsa gravada protege a essência do que você carrega, bloqueando frequências externas.
            </p>
            <div className="aspect-square bg-black/40 rounded-2xl border border-[#4ade80]/20 flex items-center justify-center group-hover:border-[#4ade80]/50 transition-all overflow-hidden">
               <span className="text-[#4ade80]/10 text-9xl font-black">K</span>
            </div>
          </motion.div>

          {/* Card 2: CONHECIMENTO (Espiritual) */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group relative border border-[#4ade80]/10 p-10 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md md:mt-40"
          >
            <div className="absolute -top-4 left-10 bg-[#4ade80] text-black px-4 py-1 text-[10px] font-black rounded-full uppercase">
              Acesso à Raiz
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white">Conexão Espiritual</h3>
            <p className="text-lg text-[#fdfcf0]/70 leading-relaxed mb-8">
              Ao vestir o grafismo sagrado, você altera seu código interno. O Kene de visão sintoniza sua mente com a frequência do Pássaro Azul.
            </p>
            <div className="aspect-square bg-black/40 rounded-2xl border border-[#4ade80]/20 flex items-center justify-center group-hover:border-[#4ade80]/50 transition-all overflow-hidden">
               <span className="text-[#4ade80]/10 text-9xl font-black">N</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* RODAPÉ CULTURAL */}
      <footer className="mt-40 py-20 border-t border-[#4ade80]/10 text-center">
        <p className="text-[10px] tracking-[1em] uppercase opacity-40 px-4">
          Fortalecendo a autonomia da Aldeia Shanenawa • 2026
        </p>
      </footer>

      {/* BOTÃO WHATSAPP (Ação Root) */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/55SEUNUMERO" 
        className="fixed bottom-10 right-10 z-50 bg-[#25d366] p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.3)]"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>

    </main>
  );
}