"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const { dark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const open = scrolled || menuOpen;
  const navBg = open
    ? dark
      ? "rgba(10,10,15,0.85)"
      : "rgba(255,255,255,0.85)"
    : "transparent";

  const borderColor = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  return (
    <>
    <nav
      className="fixed inset-x-0 top-0 z-[100] flex h-[70px] items-center justify-between px-4 sm:px-6 animate-fadeInNav"
      style={{
        background: navBg,
        backdropFilter: open ? "blur(20px)" : "none",
        WebkitBackdropFilter: open ? "blur(20px)" : "none",
        borderBottom: open ? `1px solid ${borderColor}` : "none",
        transition: "all 0.3s",
      }}
    >
      <a href="#inicio" className="flex items-center" onClick={() => setMenuOpen(false)}>
        <Image
          src="/logo.png"
          alt="Dan"
          width={150}
          height={150}
          priority
          className="h-[72px] w-[72px] object-cover md:h-[150px] md:w-[150px]"
          style={{ filter: dark ? "brightness(2)" : "none" }}
        />
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="group relative text-sm font-medium text-fg/60 transition-colors hover:text-accent"
          >
            {l.label}
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full"
            />
          </a>
        ))}
        <a
          href="#contato"
          className="rounded-full bg-accent px-6 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgb(var(--accent-rgb)/0.4)]"
        >
          Fale Comigo
        </a>
      </div>

      <button
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="relative z-[101] flex h-10 w-10 items-center justify-center rounded-full border border-fg/10 text-fg transition-colors hover:border-accent hover:text-accent md:hidden"
      >
        <span className="relative block h-3 w-5">
          <span
            aria-hidden
            className="absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300"
            style={{
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            aria-hidden
            className="absolute left-0 bottom-0 h-px w-full bg-current transition-transform duration-300"
            style={{
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </span>
      </button>

    </nav>

    <div
      className={`fixed inset-x-0 top-[70px] bottom-0 z-[99] flex flex-col items-center justify-center gap-8 px-6 transition-opacity duration-300 md:hidden ${
        menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{
        background: dark ? "rgba(10,10,15,0.98)" : "rgba(255,255,255,0.98)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-fg transition-colors hover:text-accent"
        >
          {l.label}
        </a>
      ))}
      <a
        href="#contato"
        onClick={() => setMenuOpen(false)}
        className="mt-4 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white"
      >
        Fale Comigo
      </a>
    </div>
    </>
  );
}
