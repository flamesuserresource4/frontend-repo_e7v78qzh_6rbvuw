import React from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="prenota" className="bg-stone-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-rose-900">Prenotazioni, Contatti & Dove Siamo</h2>
          <p className="mt-1 text-rose-700/80">
            Siamo ad Acquaro (VV), pronti ad accoglierti con il sorriso.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-rose-900">
                <Calendar className="h-5 w-5" /> Prenota Subito
              </h3>
              <p className="text-sm text-rose-700/80">
                Chiama o scrivici per riservare il tuo tavolo. Se utilizzi un software di prenotazione,
                lo integreremo qui per permettere la prenotazione online.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="tel:3894486514" className="inline-flex items-center gap-2 rounded-md bg-rose-700 px-4 py-2 font-semibold text-white hover:bg-rose-600">
                  <Phone className="h-5 w-5" /> 389 448 6514
                </a>
                <a href="mailto:ristorantepizzeriatreangeli@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-4 py-2 font-semibold text-white hover:bg-stone-800">
                  <Mail className="h-5 w-5" /> Scrivici
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-rose-900">
                <MapPin className="h-5 w-5" /> Indirizzo & Orari
              </h3>
              <p className="text-sm text-rose-700/80">
                Via Domenico Calcaterra, 26, 89832 Acquaro (VV), Calabria
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-rose-700/80">
                <p>Lunedì – Venerdì: 12:30–14:30, 19:30–23:00</p>
                <p>Sabato – Domenica: 12:30–15:00, 19:00–23:30</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-stone-200 shadow-sm">
            <iframe
              title="Mappa"
              src="https://www.google.com/maps?q=Via%20Domenico%20Calcaterra%2C%2026%2C%2089832%20Acquaro%20VV&output=embed"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-rose-700/70">
          © {new Date().getFullYear()} Ristorante Pizzeria Tre Angeli • Partita IVA — • Acquaro (VV)
        </div>
      </div>
    </section>
  );
}
