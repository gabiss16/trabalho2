import React from 'react';

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <main className="flex-grow max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 border-l-4 border-blue-600 pl-4">
          <h1 className="text-3xl font-bold text-gray-900">Estabeleça Conexão</h1>
          <p className="mt-2 text-gray-600">
            Formulário construído utilizando estados de foco ( <code className="font-mono bg-gray-100 text-sm p-1 rounded">focus:ring-2</code> ) e manipulação de bordas condicionais.
          </p>
        </div>

        <form className="space-y-8 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Grid interna do formulário para campos paralelos em telas maiores */}
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            
            {/* Campo: Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Seu nome"
                  /* Classes críticas para inputs: 
                     - w-full garante ocupação total da coluna
                     - focus:outline-none remove o contorno nativo do browser
                     - focus:ring-2 e focus:border transparentes aplicam o anel de foco customizado */
                  className="block w-full rounded-lg border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow bg-white border"
                />
              </div>
            </div>

            {/* Campo: Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Acadêmico / Corporativo</label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="exemplo@instituicao.edu"
                  /* O utilitário invalid: permite estilização caso a validação HTML5 falhe */
                  className="block w-full rounded-lg border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 invalid:border-red-500 invalid:text-red-600 transition-shadow bg-white border"
                />
              </div>
            </div>
          </div>

          {/* Campo: Mensagem */}
          <div>
            <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">Detalhes da Requisição</label>
            <div className="mt-1">
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                placeholder="Descreva sua solicitação com precisão..."
                /* resize-y limita o comportamento de redimensionamento do usuário estritamente ao eixo vertical, prevenindo quebra de layout */
                className="block w-full rounded-lg border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow bg-white border resize-y"
              ></textarea>
            </div>
          </div>

          {/* Botão de Submissão */}
          <div className="pt-4 border-t border-gray-200 mt-8">
            <button
              type="submit"
              /* Análise do Botão:
                 - active:scale-[0.98]: Aplica uma micro-interação de "clique físico" reduzindo a escala do botão em 2% no exato momento do clique.
                 - focus:ring-offset-2: Adiciona uma margem de 2px entre o botão e o anel de foco, crucial para acessibilidade (WCAG). */
              className="w-full sm:w-auto flex justify-center items-center py-4 px-10 border border-transparent rounded-xl shadow-md text-base font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all active:scale-[0.98]"
            >
              Enviar Solicitação
            </button>
          </div>

        </form>
      </main>

    </div>
  );
}