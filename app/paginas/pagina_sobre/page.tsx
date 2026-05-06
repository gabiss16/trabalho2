import React from 'react';

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* flex-grow empurra o footer para o final se o conteúdo for curto */}
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Nossa Metodologia</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A aplicação estrita do paradigma Utility-First para escalabilidade de interfaces.
          </p>
        </div>

        {/* Layout de Imagem e Texto: Flexbox com inversão condicional no mobile */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Container da Imagem: aspect-video força a proporção 16:9, object-cover evita distorção */}
          <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
             {/* Simulação de imagem - Na prática, use <Image /> do Next.js */}
            <div className="w-full h-full bg-slate-300 flex items-center justify-center bg-gradient-to-tr from-blue-900 to-indigo-700">
              <span className="text-white font-mono opacity-50 group-hover:scale-110 transition-transform duration-500">
                [ object-cover aspect-video ]
              </span>
            </div>
            {/* Overlay com gradiente (inset-0 cobre todo o pai relativo) */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>

          {/* Texto / Tipografia baseada em blocos */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Por que utilitários?</h2>
            {/* O uso de text-gray-600 e leading-relaxed padroniza blocos de leitura */}
            <p className="text-gray-600 leading-relaxed">
              Diferente das abordagens semânticas tradicionais, onde você nomeia um <code className="bg-gray-200 px-1 rounded text-sm text-red-600">.perfil-card</code> e escreve regras em um arquivo CSS separado, o Tailwind acopla o estilo ao markup.
            </p>
            <ul className="space-y-3">
               {/* Marcadores customizados usando flex e ícones vetoriais embutidos */}
              {['Ausência de colisão de escopo', 'Performance aprimorada (PurgeCSS)', 'Contexto visual explícito no JSX'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

    </div>
  );
}