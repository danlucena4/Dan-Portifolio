"use client";

import type { MouseEvent } from "react";
import { Reveal } from "../Reveal";

export function HeroSection() {
  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="inicio"
      onMouseMove={handleMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-4 pb-20 pt-[110px] text-center sm:px-6 sm:pt-[120px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgb(var(--accent-rgb) / 0.13), transparent)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), rgb(var(--accent-rgb) / 0.18), transparent 45%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--fg-rgb)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--fg-rgb)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Reveal delay={0.15}>
        <p className="relative mb-6 text-sm font-semibold uppercase tracking-[4px] text-accent">
          Desenvolvedor Frontend
        </p>
      </Reveal>

      <Reveal delay={0.25}>
        <h1
          className="relative mx-auto mb-6 max-w-[900px] text-balance font-extrabold leading-[1.05] text-fg"
          style={{ fontSize: "clamp(36px, 7vw, 80px)" }}
        >
          Transformo ideias em{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(var(--accent-rgb)), rgb(var(--accent-rgb) / 0.8))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            experiências digitais
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.4}>
        <p
          className="relative mx-auto mb-12 max-w-[560px] leading-[1.7] text-fg/50"
          style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
        >
          Especialista em React, Next.js e TailwindCSS. Criando interfaces modernas,
          performáticas e com atenção a cada detalhe.
        </p>
      </Reveal>

      <Reveal delay={0.55}>
        <div className="relative flex flex-wrap justify-center gap-4">
          <a
            href="#servicos"
            className="rounded-full bg-accent px-8 py-4 sm:px-10 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(var(--accent-rgb)/0.45)]"
          >
            Ver Projetos
          </a>
          <a
            href="#sobre"
            className="rounded-full border border-fg/15 px-8 py-4 sm:px-10 text-[15px] font-semibold text-fg transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Sobre Mim
          </a>
        </div>
      </Reveal>

      <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-fg/50">
        <div className="flex h-10 w-6 shrink-0 items-start justify-center rounded-xl border-2 border-current pt-1.5">
          <span className="block h-2 w-[3px] shrink-0 rounded-full bg-accent animate-scrollDot" />
        </div>
      </div>
    </section>
  );
}
