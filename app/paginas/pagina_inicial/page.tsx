// ./paginas/pagina_inicial/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]"></div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row lg:px-12">
          {/* TEXTO */}
          <div className="max-w-2xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Sistema inteligente de gestão de currículos
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
              Organize, analise e encontre os melhores talentos
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-blue-100">
              Centralize currículos, acompanhe candidatos e otimize o processo
              seletivo da sua empresa com uma plataforma moderna, rápida e
              eficiente.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-800 shadow-xl transition hover:scale-105 hover:bg-gray-100">
                Começar agora
              </button>

              <button className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
                Solicitar demonstração
              </button>
            </div>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold">+10k</h3>
                <p className="text-blue-100">Currículos gerenciados</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">+500</h3>
                <p className="text-blue-100">Empresas utilizando</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="text-blue-100">Satisfação dos usuários</p>
              </div>
            </div>
          </div>

          {/* MOCKUP */}
          <div className="w-full max-w-xl">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              {/* TOPBAR */}
              <div className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4">
                <div>
                  <h3 className="font-semibold">Painel de Recrutamento</h3>
                  <p className="text-sm text-blue-100">
                    Gestão inteligente de candidatos
                  </p>
                </div>

                <div className="rounded-xl bg-green-500 px-3 py-1 text-sm font-medium">
                  Online
                </div>
              </div>

              {/* CARDS */}
              <div className="mt-6 space-y-4">
                {[
                  {
                    nome: "Mariana Costa",
                    cargo: "UX/UI Designer",
                    status: "Em análise",
                    cor: "bg-yellow-500",
                  },
                  {
                    nome: "Lucas Ferreira",
                    cargo: "Desenvolvedor Full Stack",
                    status: "Aprovado",
                    cor: "bg-green-500",
                  },
                  {
                    nome: "Ana Souza",
                    cargo: "Analista de Dados",
                    status: "Entrevista",
                    cor: "bg-blue-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-2xl bg-white p-5 text-gray-900 shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                        {item.nome.charAt(0)}
                      </div>

                      <div>
                        <h4 className="font-bold">{item.nome}</h4>
                        <p className="text-sm text-gray-500">
                          {item.cargo}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`rounded-full ${item.cor} px-4 py-2 text-sm font-semibold text-white`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* FOOTER CARD */}
              <div className="mt-6 rounded-2xl bg-blue-600 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-100">
                      Currículos recebidos
                    </p>

                    <h3 className="mt-1 text-3xl font-bold">2.548</h3>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-blue-100">
                      Crescimento mensal
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">+18%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Recursos da plataforma
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
              Tudo o que você precisa para recrutamento moderno
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Automatize tarefas, acompanhe candidatos e mantenha seu processo
              seletivo organizado em um único sistema.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: "📄",
                title: "Gestão de currículos",
                desc: "Organize e visualize currículos de forma centralizada.",
              },
              {
                icon: "🔍",
                title: "Busca inteligente",
                desc: "Encontre candidatos por habilidades e experiências.",
              },
              {
                icon: "📊",
                title: "Relatórios completos",
                desc: "Acompanhe métricas e desempenho dos processos.",
              },
              {
                icon: "⚡",
                title: "Fluxo automatizado",
                desc: "Automatize etapas do recrutamento e entrevistas.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="text-5xl">{feature.icon}</div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
            Transforme seu RH
          </span>

          <h2 className="mt-6 text-5xl font-extrabold">
            Simplifique o recrutamento da sua empresa
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Utilize uma plataforma completa para gerenciar currículos,
            entrevistas e processos seletivos com eficiência.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-blue-600 px-10 py-5 text-lg font-semibold transition hover:scale-105 hover:bg-blue-500">
              Criar conta grátis
            </button>

            <button className="rounded-2xl border border-white/20 px-10 py-5 text-lg font-semibold transition hover:bg-white/10">
              Falar com especialista
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 TalentFlow. Todos os direitos reservados.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-blue-600">
              Termos
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Privacidade
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Suporte
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}