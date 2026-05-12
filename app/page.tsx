// ./paginas/pagina_inicial/page.tsx

export default function HomePage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur">
              Plataforma inteligente para currículos
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
              Crie currículos profissionais em minutos
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Monte currículos modernos, personalizados e prontos para
              impressionar recrutadores. Tudo de forma rápida, simples e
              profissional.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg transition hover:scale-105 hover:bg-gray-100">
                Criar meu currículo
              </button>

              <button className="rounded-xl border border-white/40 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
                Ver modelos
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-blue-100">
              <span>✔ Fácil de usar</span>
              <span>✔ Modelos ATS</span>
              <span>✔ Download em PDF</span>
            </div>
          </div>

          {/* CARD */}
          <div className="mt-16 lg:mt-0">
            <div className="rounded-3xl bg-white p-6 shadow-2xl">
              <div className="w-[320px] rounded-2xl bg-gray-100 p-5">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-blue-600"></div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      João Silva
                    </h3>
                    <p className="text-gray-500">Desenvolvedor Front-end</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-3 rounded bg-gray-300"></div>
                  <div className="h-3 w-5/6 rounded bg-gray-300"></div>
                  <div className="h-3 w-4/6 rounded bg-gray-300"></div>
                </div>

                <div className="mt-6">
                  <h4 className="mb-3 font-semibold text-gray-800">
                    Experiência
                  </h4>

                  <div className="space-y-3">
                    <div className="rounded-lg bg-white p-3 shadow">
                      <div className="h-3 w-1/2 rounded bg-blue-400"></div>
                      <div className="mt-2 h-2 rounded bg-gray-200"></div>
                    </div>

                    <div className="rounded-lg bg-white p-3 shadow">
                      <div className="h-3 w-1/3 rounded bg-blue-400"></div>
                      <div className="mt-2 h-2 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Baixar PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Tudo que você precisa para conseguir entrevistas
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Ferramentas modernas para criar currículos mais atrativos e
              profissionais.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-4xl">⚡</div>

              <h3 className="text-2xl font-semibold">
                Criação rápida
              </h3>

              <p className="mt-3 text-gray-600">
                Monte seu currículo em poucos minutos com nosso editor
                intuitivo.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-4xl">🎨</div>

              <h3 className="text-2xl font-semibold">
                Modelos modernos
              </h3>

              <p className="mt-3 text-gray-600">
                Templates profissionais criados para destacar seu perfil no
                mercado.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-4xl">📄</div>

              <h3 className="text-2xl font-semibold">
                Exporte em PDF
              </h3>

              <p className="mt-3 text-gray-600">
                Faça download do currículo pronto para enviar às empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Seu próximo emprego começa aqui
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            Crie um currículo profissional agora mesmo e aumente suas chances
            de ser contratado.
          </p>

          <button className="mt-10 rounded-2xl bg-blue-600 px-10 py-5 text-lg font-semibold transition hover:scale-105 hover:bg-blue-500">
            Começar gratuitamente
          </button>
        </div>
      </section>

 
    </main>
  );
}