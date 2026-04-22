"use client";

import type { MouseEvent } from "react";
import { Reveal, StaggerReveal } from "../Reveal";

const services = [
  {
    num: "01",
    title: "Landing Pages",
    desc: "Páginas de alta conversão com animações fluidas, SEO otimizado e performance excepcional.",
  },
  {
    num: "02",
    title: "Aplicações Web",
    desc: "SPAs e PWAs complexas com React/Next.js, gerenciamento de estado e integrações de API.",
  },
  {
    num: "03",
    title: "Design Systems",
    desc: "Componentes reutilizáveis com TailwindCSS, documentação completa e tokens de design.",
  },
  {
    num: "04",
    title: "E-commerce",
    desc: "Lojas virtuais modernas com checkout otimizado, pagamentos integrados e dashboards.",
  },
  {
    num: "05",
    title: "Dashboards",
    desc: "Painéis interativos com gráficos dinâmicos, filtros em tempo real e data visualization.",
  },
  {
    num: "06",
    title: "Mobile-First",
    desc: "Interfaces responsivas que funcionam perfeitamente em qualquer dispositivo e resolução.",
  },
];

export function ServicesSection() {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const x = px / rect.width - 0.5;
    const y = py / rect.height - 0.5;
    card.style.setProperty("--mx", `${px}px`);
    card.style.setProperty("--my", `${py}px`);
    card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${
      -y * 6
    }deg) translateY(-4px)`;
  };
  const handleLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section id="servicos" className="bg-bgAlt px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-accent">
            Soluções
          </p>
          <h2
            className="mb-14 text-balance font-bold text-fg"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Seu projeto tem um <strong className="text-accent">desafio?</strong>
          </h2>
        </Reveal>

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1200px" }}
        >
          <StaggerReveal stagger={0.08}>
            {services.map((s) => (
              <div
                key={s.num}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-fg/[0.06] bg-fg/[0.03] p-6 transition-all duration-[400ms] will-change-transform hover:border-accent hover:shadow-[0_24px_60px_rgb(var(--accent-rgb)/0.18)] sm:p-9"
                style={{
                  transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                  transformStyle: "preserve-3d",
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent-rgb) / 0.18), transparent 50%)",
                  }}
                />

                <div className="relative">
                  <span className="font-mono text-[13px] font-bold text-accent">{s.num}</span>
                  <h3 className="mb-2.5 mt-3 text-[22px] font-bold text-fg">{s.title}</h3>
                  <p className="m-0 text-sm leading-[1.7] text-fg/50">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Saiba mais{" "}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
