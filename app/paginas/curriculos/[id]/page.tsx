"use client";

import { useParams, useRouter } from "next/navigation";

const resumes = [
  {
    id: 1,
    nome: "João Silva",
    cargo: "Desenvolvedor Front-end",
    experiencia:
      "3 anos de experiência com React, Next.js e TypeScript.",
    habilidades: ["React", "Next.js", "Tailwind", "TypeScript"],
    status: "Disponível",
    email: "joao@email.com",
    telefone: "(11) 99999-1111",
    resumo:
      "Profissional focado em desenvolvimento moderno de interfaces, performance e experiência do usuário.",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    cargo: "UX/UI Designer",
    experiencia:
      "Especialista em interfaces modernas e experiência do usuário.",
    habilidades: ["Figma", "UI Design", "UX Research", "Adobe XD"],
    status: "Em entrevista",
    email: "maria@email.com",
    telefone: "(11) 99999-2222",
    resumo:
      "Designer apaixonada por criar experiências intuitivas e acessíveis.",
  },
  {
    id: 3,
    nome: "Carlos Santos",
    cargo: "Back-end Developer",
    experiencia:
      "Experiência com APIs REST, Node.js e bancos de dados.",
    habilidades: ["Node.js", "PostgreSQL", "Docker", "Express"],
    status: "Disponível",
    email: "carlos@email.com",
    telefone: "(11) 99999-3333",
    resumo:
      "Especialista em arquitetura backend e integração de sistemas.",
  },
];

export default function CurriculoDetalhesPage() {
  const params = useParams();
  const router = useRouter();

  const resume = resumes.find(
    (item) => item.id === Number(params.id)
  );

  if (!resume) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500">
          Currículo não encontrado
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">
        {/* TOPO */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
            {resume.nome.charAt(0)}
          </div>

          <h1 className="mt-5 text-4xl font-extrabold text-gray-900">
            {resume.nome}
          </h1>

          <p className="mt-2 text-xl text-gray-500">
            {resume.cargo}
          </p>

          <span
            className={`mt-4 rounded-full px-5 py-2 text-sm font-semibold ${
              resume.status === "Disponível"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {resume.status}
          </span>
        </div>

        {/* INFORMAÇÕES */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Contato
            </h2>

            <div className="mt-4 space-y-3 text-gray-600">
              <p>
                <strong>Email:</strong> {resume.email}
              </p>

              <p>
                <strong>Telefone:</strong> {resume.telefone}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Experiência
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              {resume.experiencia}
            </p>
          </div>
        </div>

        {/* RESUMO */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">
            Sobre o candidato
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            {resume.resumo}
          </p>
        </div>

        {/* HABILIDADES */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">
            Habilidades
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {resume.habilidades.map((skill) => (
              <span
                key={skill}
                className="rounded-xl bg-blue-100 px-4 py-2 font-medium text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* BOTÃO */}
        <div className="mt-12">
          <button
            type="button"
            onClick={() => router.push("/paginas/curriculos")}
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Voltar
          </button>
        </div>
      </div>
    </main>
  );
}