import React from 'react';

export default function Story() {
  return (
    <section id="storia" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-rose-900">I Tre Angeli</h2>
          <p className="mt-1 max-w-2xl text-rose-700/80">
            Nasciamo ad Acquaro, nel cuore della Calabria, con l'idea di portare in tavola
            l'anima della nostra terra. Dalla scelta delle farine alla lunga maturazione
            dell'impasto, fino alla cottura nel nostro forno a legna: ogni gesto racconta
            una storia di famiglia, di passione e di rispetto per le materie prime locali.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="font-semibold text-rose-900">Qualità</h3>
            <p className="mt-1 text-sm text-rose-700/80">
              Ingredienti DOP e IGP selezionati dal territorio calabrese e fornitori di fiducia.
            </p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="font-semibold text-rose-900">Passione</h3>
            <p className="mt-1 text-sm text-rose-700/80">
              Tecniche artigianali tramandate e continua ricerca dell'equilibrio perfetto.
            </p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="font-semibold text-rose-900">Tradizione</h3>
            <p className="mt-1 text-sm text-rose-700/80">
              Ricette di famiglia, reinterpretate con rispetto e un tocco contemporaneo.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-rose-100 bg-rose-50 p-6 text-rose-900">
          <h3 className="mb-2 font-semibold">Eventi & News</h3>
          <p className="text-sm text-rose-800/80">
            Serate a tema, degustazioni e piatti stagionali: seguici sui social per non perderti le prossime novità.
            Per proposte di eventi privati, scrivici a
            <a className="ml-1 underline hover:no-underline" href="mailto:ristorantepizzeriatreangeli@gmail.com">ristorantepizzeriatreangeli@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
