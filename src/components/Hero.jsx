import React from 'react';
import { Phone, Calendar, Facebook, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-800 via-rose-700 to-rose-600 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">
          Ristorante Pizzeria Tre Angeli · Acquaro (VV)
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Tradizione calabrese, forno a legna, accoglienza di casa
        </h1>
        <p className="mt-4 max-w-2xl text-white/90">
          Qualità, Passione, Tradizione: i nostri tre angeli guidano ogni piatto.
          Ingredienti locali selezionati, pizza al forno a legna e un ambiente
          rustico-moderno pronto ad accoglierti.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="tel:3894486514"
            className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 font-semibold text-rose-900 shadow-sm transition hover:bg-amber-300"
          >
            <Phone className="h-5 w-5" /> Chiama per Asporto
          </a>
          <a
            href="#prenota"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
          >
            <Calendar className="h-5 w-5" /> Prenota Subito
          </a>
          <div className="ml-auto flex items-center gap-2 text-white/90">
            <span className="text-sm">Seguici</span>
            <a
              href="https://www.facebook.com/share/17TaADiagn/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 hover:bg-white/10"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/ristorante_pizzeria_3_angeli_?igsh=MWtsM2c3M2QzcXY4OA=="
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-2 hover:bg-white/10"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-white/90 sm:grid-cols-3">
          <div className="rounded-lg border border-white/15 bg-white/5 p-4">
            Qualità: materie prime DOP/IGP scelte con cura.
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-4">
            Passione: impasto a lunga maturazione, cottura perfetta.
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-4">
            Tradizione: ricette di famiglia e sapori calabresi autentici.
          </div>
        </div>

        <p className="mt-8 text-xs text-white/70">
          Nota dominio: prima di pubblicare, è necessario acquistare e registrare il nome a dominio desiderato.
          Il sito verrà configurato sul dominio scelto (es. ristorantetreangeli.it).
        </p>
      </div>
    </section>
  );
}
