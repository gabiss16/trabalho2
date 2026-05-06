export default function FeaturesSection(){
    return(
           <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Sistema de Grid e Cards</h2>
          <p className="text-gray-600">Construído com <code className="bg-gray-200 text-blue-600 px-1 rounded text-sm font-mono">grid grid-cols-1 md:grid-cols-3 gap-8</code></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Foco em Espaçamento e Bordas */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Espaçamento e Margem</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Este card usa <code className="bg-gray-100 px-1 rounded text-blue-600 font-mono">p-8</code> para padding interno (32px) e <code className="bg-gray-100 px-1 rounded text-blue-600 font-mono">mb-3</code> (12px) de margem inferior no título. A borda aplica <code className="bg-gray-100 px-1 rounded text-blue-600 font-mono">rounded-2xl</code>.
            </p>
          </div>

          {/* Card 2: Foco em Cores */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Cores e Contraste</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Utilizamos a paleta padrão: <code className="bg-gray-100 px-1 rounded text-blue-600 font-mono">bg-white</code> para o fundo, <code className="bg-gray-100 px-1 rounded text-red-600 font-mono">text-gray-800</code> para títulos e <code className="bg-gray-100 px-1 rounded text-blue-600 font-mono">text-gray-600</code> para parágrafos, garantindo boa acessibilidade.
            </p>
          </div>

          {/* Card 3: Foco em Animações */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Animações (Group Hover)</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Ao adicionar <code className="bg-gray-100 px-1 rounded text-blue-600 font-mono">group</code> ao card, o ícone reage com <code className="bg-gray-100 px-1 rounded text-blue-600 font-mono">group-hover:-translate-y-2</code> (move no eixo Y) apenas quando o mouse passa sobre o card inteiro.
            </p>
          </div>
        </div>
      </section>
    )
}