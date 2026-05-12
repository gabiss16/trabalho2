export default function Page() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Cadastro de Currículo
        </h1>

        <form className="space-y-6">

          {/* Nome */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nome Completo
            </label>

            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Cargo */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cargo Desejado
            </label>

            <input
              type="text"
              placeholder="Digite o cargo desejado"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email e Telefone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>

              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Telefone
              </label>

              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          {/* CPF */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              CPF
            </label>

            <input
              type="text"
              placeholder="000.000.000-00"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Resumo */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Resumo Profissional
            </label>

            <textarea
              rows={4}
              placeholder="Fale um pouco sobre você..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Experiências */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Experiências Profissionais
            </label>

            <textarea
              rows={4}
              placeholder="Descreva suas experiências..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Formações */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Formações Acadêmicas
            </label>

            <textarea
              rows={4}
              placeholder="Informe suas formações acadêmicas..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Habilidades */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Habilidades
            </label>

            <textarea
              rows={4}
              placeholder="Liste suas habilidades..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-3 rounded-lg"
          >
            Cadastrar Currículo
          </button>

        </form>
      </div>
    </main>
  );
}