import React from 'react';

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        
        {/* HERO */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
              Nossa Metodologia
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-blue-100 md:text-xl">
              Facilitamos a conexão entre empresas e profissionais
              através de uma plataforma moderna, intuitiva e eficiente
              para análise e gerenciamento de currículos.
            </p>
          </div>
        </section>

        {/* SOBRE */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            
            {/* IMAGEM */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-600">
                <div className="flex h-full items-center justify-center">
                  <span className="text-lg font-medium text-white/70">
                    Plataforma de Currículos
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* TEXTO */}
            <div>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Como trabalhamos
              </span>

              <h2 className="mt-6 text-4xl font-bold text-gray-900">
                Tecnologia aplicada ao recrutamento
              </h2>

              <p className="mt-6 leading-relaxed text-gray-600">
                Nossa plataforma foi desenvolvida para simplificar o
                processo de recrutamento e tornar a análise de
                currículos mais rápida, organizada e eficiente.
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                Utilizamos interfaces modernas e ferramentas inteligentes
                para ajudar empresas a encontrarem os melhores talentos,
                enquanto profissionais podem destacar suas habilidades e
                experiências de forma clara e profissional.
              </p>

              {/* LISTA */}
              <div className="mt-8 space-y-4">
                {[
                  "Busca rápida de candidatos",
                  "Organização inteligente de currículos",
                  "Filtros avançados por perfil",
                  "Interface moderna e responsiva",
                  "Facilidade de contato entre empresa e candidato",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900">
                Como funciona
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Nosso sistema foi pensado para tornar o recrutamento
                mais simples e eficiente para todos.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Cadastro",
                  description:
                    "Os candidatos adicionam suas experiências, habilidades e informações profissionais.",
                },
                {
                  title: "Análise",
                  description:
                    "Empresas podem visualizar currículos, aplicar filtros e identificar os melhores perfis.",
                },
                {
                  title: "Conexão",
                  description:
                    "Facilitamos o contato entre recrutadores e candidatos de maneira rápida e organizada.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white">
                    0{index + 1}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}