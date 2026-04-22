"use client";

import { Reveal } from "../Reveal";
import { useTheme } from "../ThemeProvider";

export function CTASection() {
  const { dark, accentHex } = useTheme();
  const baseBg = dark ? "#0a0a0f" : "#ffffff";

  return (
    <section
      id="contato"
      className="px-4 py-20 text-center sm:px-6 sm:py-24"
      style={{
        background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${accentHex}${dark ? "15" : "0a"}, ${baseBg})`,
      }}
    >
      <div className="mx-auto max-w-[700px]">
        <Reveal>
          <h2
            className="mb-5 font-extrabold leading-[1.2] text-fg"
            style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
          >
            Vamos construir algo <span style={{ color: accentHex }}>incrível</span> juntos?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-10 text-lg leading-[1.7] text-fg/50">
            Entre em contato e vamos conversar sobre o seu próximo projeto.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:dan@email.com"
              className="rounded-full px-8 py-4 sm:px-12 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: accentHex }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 40px ${accentHex}44`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Fale Comigo
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-fg/15 px-8 py-4 sm:px-12 text-base font-semibold text-fg transition-all duration-300 hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
