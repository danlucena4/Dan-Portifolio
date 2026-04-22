"use client";

import { LogoMarquee } from "../LogoMarquee";
import { Reveal } from "../Reveal";

export function TechSection() {
  return (
    <section className="bg-bg px-6 py-16">
      <Reveal>
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[3px] text-accent">
          Tecnologias
        </p>
        <h2
          className="text-center font-bold text-fg"
          style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
        >
          Stack que <strong className="text-accent">domino</strong>
        </h2>
      </Reveal>
      <LogoMarquee />
    </section>
  );
}
