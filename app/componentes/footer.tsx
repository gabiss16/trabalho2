import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      {/* grid-cols-1apara mobile, md:grid-cols-4 distribui o layout em 4 frações iguais */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Coluna 1: Branding e Descrição. 'col-span-1 md:col-span-2' faz esta coluna ocupar o dobro de espaço */}
        <div className="md:col-span-2 space-y-4">
          <span className="text-2xl font-bold text-white tracking-tight">Tailwind<span className="text-blue-500">Edu</span></span>
          <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
            Utilitários como <code className="text-emerald-400 bg-slate-800 px-1 rounded">leading-relaxed</code> aumentam a altura da linha (line-height), melhorando a legibilidade de blocos de texto longos.
          </p>
        </div>

        {/* Coluna 2: Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">Navegação</h4>
          {/* w-fit evita que o hover expanda para toda a largura da grid */}
          <Link href="/sobre" className="hover:text-white hover:translate-x-1 transition-transform w-fit">Sobre Nós</Link>
          <Link href="/contato" className="hover:text-white hover:translate-x-1 transition-transform w-fit">Contato</Link>
        </div>

        {/* Coluna 3: Redes/Contato */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">Conectar</h4>
          <a href="#" className="hover:text-blue-400 transition-colors w-fit">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition-colors w-fit">GitHub</a>
        </div>
      </div>
      
      {/* Sub-footer com alinhamento flexível e contraste reduzido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Arquitetura Tailwind. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido com rigor acadêmico e Next.js.</p>
      </div>
    </footer>
  );
} 