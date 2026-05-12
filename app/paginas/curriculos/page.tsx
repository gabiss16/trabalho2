"use client";

const resumes = [
  {
    id: 1,
    nome: "João Silva",
    cargo: "Desenvolvedor Front-end",
    experiencia: "3 anos de experiência com React, Next.js e TypeScript.",
    habilidades: ["React", "Next.js", "Tailwind", "TypeScript"],
    status: "Disponível",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    cargo: "UX/UI Designer",
    experiencia: "Especialista em interfaces modernas e experiência do usuário.",
    habilidades: ["Figma", "UI Design", "UX Research", "Adobe XD"],
    status: "Em entrevista",
  },
  {
    id: 3,
    nome: "Carlos Santos",
    cargo: "Back-end Developer",
    experiencia: "Experiência com APIs REST, Node.js e bancos de dados.",
    habilidades: ["Node.js", "PostgreSQL", "Docker", "Express"],
    status: "Disponível",
  },
];

export default function ResumeSummaryPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-16 text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Resumo de Currículos
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Visualize rapidamente os candidatos cadastrados e encontre os
            melhores talentos para sua empresa.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Buscar candidato..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 md:max-w-sm"
          />

          <div className="flex gap-3">
            <button className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
              Todos
            </button>

            <button className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              Disponíveis
            </button>

            <button className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              Em entrevista
            </button>
          </div>
        </div>
      </section>

      {/* LISTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* PERFIL */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {resume.nome.charAt(0)}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {resume.nome}
                  </h2>

                  <p className="text-gray-500">{resume.cargo}</p>
                </div>
              </div>

              {/* STATUS */}
              <div className="mt-5">
                <span
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    resume.status === "Disponível"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {resume.status}
                </span>
              </div>

              {/* EXPERIÊNCIA */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Resumo profissional
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  {resume.experiencia}
                </p>
              </div>

              {/* HABILIDADES */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Habilidades
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {resume.habilidades.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AÇÕES */}
              <div className="mt-8 flex gap-3">
                <button className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Ver currículo
                </button>

                <button className="flex-1 rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
                  Contatar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}