"use client";

import { useRef, useState } from "react";
import { ACCENTS, useTheme } from "./ThemeProvider";

export function TweakPanel() {
  const { accentHex, setAccentHex } = useTheme();
  const [open, setOpen] = useState(false);
  const colorInputRef = useRef<HTMLInputElement>(null);

  const normalizedAccent = accentHex.toLowerCase();
  const isCustom = !ACCENTS.some((a) => a.hex.toLowerCase() === normalizedAccent);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir painel de ajustes"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[9998] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[rgba(15,15,20,0.95)] text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:scale-110"
        style={{ color: accentHex }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      {open && (
        <div className="fixed bottom-20 right-3 left-3 z-[9999] animate-fadeInNav rounded-2xl border border-white/10 bg-[rgba(15,15,20,0.95)] p-5 text-[13px] text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:left-auto sm:right-5 sm:w-[280px]">
          <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[2px] opacity-60">
            Personalização
          </h4>

          <div className="mb-3.5">
            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest opacity-50">
              Escolha sua cor
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {ACCENTS.map((a) => (
                <button
                  key={a.hex}
                  type="button"
                  title={a.label}
                  onClick={() => setAccentHex(a.hex)}
                  className={`h-8 w-8 cursor-pointer rounded-lg border-2 transition-all ${
                    normalizedAccent === a.hex.toLowerCase()
                      ? "scale-110 border-white"
                      : "border-transparent"
                  }`}
                  style={{ background: a.hex }}
                />
              ))}

              <button
                type="button"
                title="Escolher qualquer cor"
                aria-label="Abrir paleta de cores"
                onClick={() => colorInputRef.current?.click()}
                className={`relative h-8 w-8 cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
                  isCustom ? "scale-110 border-white" : "border-transparent"
                }`}
                style={{
                  background:
                    "conic-gradient(from 180deg, #ff4d4d, #ffcf40, #7bd86b, #4ad4e6, #5b7cfa, #d44ce6, #ff4d4d)",
                }}
              >
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <input
                ref={colorInputRef}
                type="color"
                value={accentHex}
                onChange={(e) => setAccentHex(e.target.value)}
                className="sr-only"
                aria-label="Seletor de cor livre"
                tabIndex={-1}
              />
            </div>

            {isCustom && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wider opacity-60">
                {accentHex}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
