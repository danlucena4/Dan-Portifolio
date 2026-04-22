"use client";

import Image from "next/image";
import { useTheme } from "../ThemeProvider";

const navLinks: { label: string; href: string }[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];
const socialLinks: { label: string; href: string; external?: boolean }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-lucena-710313256/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/danlucena4", external: true },
  {
    label: "Instagram",
    href: "https://www.instagram.com/danlucena4?igsh=eGNkdXRzNnB3Y2N2",
    external: true,
  },
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=daniellucena154@gmail.com",
    external: true,
  },
];

export function FooterSection() {
  const { dark } = useTheme();

  return (
    <footer className="border-t border-fg/[0.05] bg-bgDeep px-4 pb-8 pt-16 sm:px-6">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 flex flex-col items-center gap-10 text-center sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/logo.png"
              alt="Dan"
              width={60}
              height={60}
              className="mb-3 h-[60px] w-[60px]"
              style={{ filter: dark ? "brightness(2)" : "none" }}
            />
            <p className="max-w-[280px] text-[13px] leading-[1.7] text-fg/40">
              Desenvolvedor Frontend especializado em criar experiências digitais de alto impacto.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 sm:justify-start sm:gap-12">
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-fg">
                Navegação
              </p>
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="mb-2 block text-sm text-fg/40 transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-fg">
                Social
              </p>
              {socialLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mb-2 block text-sm text-fg/40 transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-fg/[0.05] pt-6 text-center">
          <p className="text-xs text-fg/40">© 2026 Dan Lucena. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
