"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const ACCENTS: { label: string; hex: string }[] = [
  { label: "Indigo", hex: "#6366f1" },
  { label: "Cyan", hex: "#06b6d4" },
  { label: "Rose", hex: "#f43f5e" },
  { label: "Emerald", hex: "#10b981" },
  { label: "Amber", hex: "#f59e0b" },
];

const DEFAULT_ACCENT = "#6366f1";

function hexToRgbString(hex: string): string {
  const normalized = hex.replace("#", "").trim();
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) return "99 102 241";
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

type ThemeContextValue = {
  dark: boolean;
  setDark: (v: boolean) => void;
  accentHex: string;
  setAccentHex: (hex: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDarkState] = useState(true);
  const [accentHex, setAccentHexState] = useState<string>(DEFAULT_ACCENT);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent-rgb", hexToRgbString(accentHex));
    if (dark) {
      root.classList.remove("light");
    } else {
      root.classList.add("light");
    }
  }, [dark, accentHex]);

  const setDark = useCallback((v: boolean) => setDarkState(v), []);
  const setAccentHex = useCallback((hex: string) => setAccentHexState(hex), []);

  const value = useMemo(
    () => ({ dark, setDark, accentHex, setAccentHex }),
    [dark, setDark, accentHex, setAccentHex]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
