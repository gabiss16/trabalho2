export default function HeroSection(){
    return (
      <section className="flex flex-col items-center justify-center text-center px-4 py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-pulse">
          Dominando o <span className="text-blue-400">Tailwind CSS</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          Esta seção utiliza <code className="bg-slate-700 px-2 py-1 rounded text-sm font-mono">flex flex-col items-center justify-center</code> para centralização absoluta. O fundo é um <code className="bg-slate-700 px-2 py-1 rounded text-sm font-mono">bg-gradient-to-br</code> e a tipografia principal usa <code className="bg-slate-700 px-2 py-1 rounded text-sm font-mono">text-4xl md:text-6xl</code>.
        </p>
        
        {/* Contêiner de Botões */}
        <div className="flex gap-4 flex-col sm:flex-row">
          {/* Botão Primário */}
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300">
            Botão Primário (bg-blue-600)
          </button>
          {/* Botão Secundário */}
          <button className="px-8 py-3 rounded-full bg-transparent border-2 border-slate-400 text-slate-200 font-semibold hover:border-white hover:text-white transition-all duration-300">
            Botão Secundário (border-2)
          </button>
        </div>
      </section>
    )
}