"use client";

import { AnimatedCounter } from "../AnimatedCounter";
import { Reveal, StaggerReveal } from "../Reveal";
import { useTheme } from "../ThemeProvider";

const stats = [
  { value: 3, suffix: "+", label: "anos de experiência" },
  { value: 50, suffix: "+", label: "projetos entregues" },
  { value: 30, suffix: "+", label: "clientes satisfeitos" },
  { value: 99, suffix: "%", label: "de aprovação" },
];

export function StatsSection() {
  const { dark, accentHex } = useTheme();
  const baseBg = dark ? "#0a0a0f" : "#ffffff";

  return (
    <section
      id="sobre"
      className="px-4 py-20 sm:px-6 sm:py-24"
      style={{ background: `linear-gradient(135deg, ${accentHex}${dark ? "08" : "06"}, ${baseBg})` }}
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2
            className="mb-14 max-w-[700px] text-pretty font-bold leading-[1.3] text-fg"
            style={{ fontSize: "clamp(24px, 4vw, 44px)" }}
          >
            Preparado para transformar suas ideias em{" "}
            <strong className="text-accent">código de qualidade.</strong>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4">
          <StaggerReveal stagger={0.12}>
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-extrabold leading-none text-accent"
                  style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                >
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-[15px] text-fg/50">{s.label}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
