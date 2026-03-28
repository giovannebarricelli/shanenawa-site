import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Faixa de Grafismo Superior */}
      <div className="h-4 bg-[#8b4513] w-full border-b border-[#2d4f1e] opacity-80"></div>

      {/* Cabeçalho */}
      <header className="py-12 px-6 text-center bg-[#1a2e12] text-[#fdfcf0]">
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-widest uppercase mb-2">
          Povo Shanenawa
        </h1>
        <p className="text-sm md:text-base tracking-[0.3em] uppercase opacity-80">
          Cura e Ancestralidade do Pássaro Azul
        </p>
      </header>

      {/* Sessão de Apresentação */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-serif text-[#8b4513] mb-6">
          Medicinas da Floresta
        </h2>
        <p className="text-lg leading-relaxed italic text-gray-800">
          "Levando a força da nossa aldeia para o mundo através do Rapé, da Sananga e da nossa arte sagrada."
        </p>
        
        {/* Vitrine Simbolica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 border-2 border-[#d2b48c] rounded-lg bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Rapé Sagrado</h3>
            <p className="text-sm text-gray-600 uppercase">Limpeza e Foco</p>
          </div>
          <div className="p-8 border-2 border-[#d2b48c] rounded-lg bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Sananga Ancestral</h3>
            <p className="text-sm text-gray-600 uppercase">Visão e Clareza</p>
          </div>
        </div>
      </section>

      {/* Rodapé Cultural */}
      <footer className="mt-20 py-10 bg-[#1a2e12] text-[#fdfcf0] text-center border-t-4 border-[#8b4513]">
        <p className="text-xs tracking-widest uppercase opacity-60">
          Fortalecendo a autonomia da Aldeia Shanenawa • 2026
        </p>
      </footer>
    </main>
  );
}