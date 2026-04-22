"use client";

import { Reveal, StaggerReveal } from "../Reveal";

const steps = [
  {
    num: "01",
    title: "Conversa inicial",
    desc: "Entendo o seu objetivo, público e o problema que o projeto precisa resolver. Sem jargão técnico desnecessário.",
  },
  {
    num: "02",
    title: "Planejamento",
    desc: "Defino escopo, prazo e stack. Você sabe exatamente o que será entregue antes de uma linha de código ser escrita.",
  },
  {
    num: "03",
    title: "Desenvolvimento",
    desc: "Código limpo em React, Next.js e Tailwind. Revisões frequentes para você acompanhar o progresso em tempo real.",
  },
  {
    num: "04",
    title: "Entrega & suporte",
    desc: "Deploy, testes em dispositivos reais e ajustes finais. Continuo por perto depois da entrega para o que precisar.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-bgAlt px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-accent">
            Como trabalho
          </p>
          <h2
            className="mb-14 max-w-[700px] text-balance font-bold text-fg"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Um processo <strong className="text-accent">transparente</strong>, do briefing ao deploy
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[44px] hidden h-px lg:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, rgb(var(--accent-rgb) / 0.4), transparent)",
            }}
          />

          <StaggerReveal stagger={0.1} className="h-full">
            {steps.map((s) => (
              <div
                key={s.num}
                className="relative flex h-full flex-col rounded-2xl border border-fg/[0.06] bg-fg/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_16px_40px_rgb(var(--accent-rgb)/0.12)]"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-[15px] font-bold"
                  style={{
                    background: "rgb(var(--accent-rgb) / 0.12)",
                    color: "rgb(var(--accent-rgb))",
                  }}
                >
                  {s.num}
                </div>
                <h3 className="mb-2 text-[19px] font-bold text-fg">{s.title}</h3>
                <p className="m-0 text-[14px] leading-[1.7] text-fg/50">{s.desc}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
