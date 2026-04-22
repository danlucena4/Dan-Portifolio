"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-bg px-6 py-20">
      <Reveal>
        <div className="mx-auto max-w-[500px] text-center">
          <h3 className="mb-2 text-2xl font-bold text-fg">
            Receba minha <strong className="text-accent">newsletter</strong>
          </h3>
          <p className="mb-6 text-sm text-fg/50">
            Dicas de frontend, novos projetos e conteúdo técnico.
          </p>
          {sent ? (
            <p className="font-semibold text-accent">✓ Inscrito com sucesso!</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="seu@email.com"
                className="min-w-0 flex-1 rounded-full border border-fg/10 bg-fg/[0.05] px-5 py-3.5 text-[15px] text-fg outline-none placeholder:text-fg/40 focus:border-accent"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Inscrever
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
