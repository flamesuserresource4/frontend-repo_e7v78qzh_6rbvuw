import React from 'react';
import { Download } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold tracking-tight text-rose-900">{title}</h2>
    {subtitle && <p className="mt-1 text-rose-700/80">{subtitle}</p>}
  </div>
);

const Item = ({ name, desc, price }) => (
  <div className="flex items-start justify-between gap-6 py-3">
    <div>
      <h4 className="font-semibold text-rose-900">{name}</h4>
      {desc && <p className="text-sm text-rose-700/80">{desc}</p>}
    </div>
    {price && <span className="whitespace-nowrap font-medium text-rose-800">€ {price}</span>}
  </div>
);

export default function Menu() {
  return (
    <section id="menu" className="bg-stone-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Menu Digitale"
          subtitle="Piatti che celebrano il territorio calabrese e la nostra pizza a forno a legna"
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold text-rose-900">Pizze Classiche</h3>
            <Item name="Marinara" desc="Pomodoro San Marzano DOP, aglio di Vessalico, origano" price="5,50" />
            <Item name="Margherita" desc="Fior di latte, basilico, olio evo calabrese" price="6,50" />
            <Item name="Diavola Calabrese" desc="Nduja di Spilinga IGP, fior di latte, basilico" price="8,00" />
            <Item name="Tre Angeli" desc="Selezione della casa con prodotti stagionali del territorio" price="9,50" />
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold text-rose-900">Sapori di Calabria</h3>
            <Item name="Tagliere Tipico" desc="Salumi e formaggi locali DOP/IGP" price="12,00" />
            <Item name="Fileja alla Silana" desc="Pasta tipica con funghi, salsiccia e provola" price="11,00" />
            <Item name="Polpette al Sugo della Nonna" desc="Ricetta tradizionale di famiglia" price="10,00" />
            <Item name="Verdure Grigliate" desc="Selezione di ortaggi di stagione" price="7,00" />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:ristorantepizzeriatreangeli@gmail.com?subject=Richiesta%20Menu%20PDF"
            className="inline-flex items-center gap-2 rounded-md bg-rose-700 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-rose-600"
          >
            <Download className="h-5 w-5" /> Richiedi Menu PDF via Email
          </a>
          <p className="text-sm text-rose-700/80">
            Aggiornabile facilmente dal backend per mantenere prezzi e proposte sempre aggiornati.
          </p>
        </div>
      </div>
    </section>
  );
}
