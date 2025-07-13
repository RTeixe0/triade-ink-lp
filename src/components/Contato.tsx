"use client";

import { MapPin, Clock, Instagram } from "lucide-react";

export default function Contato() {
  return (
    <section className="bg-[#0D0D0D] text-white px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Mapa */}
        <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.7995397643332!2d-46.9397307210617!3d-22.34447969241119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c857002ea1ba65%3A0x4b3adeb7c9a7b9dd!2sTRIADE%20INK%20-%20Tattoo%20%26%20Piercing!5e1!3m2!1spt-BR!2sbr!4v1752371284193!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>

        {/* Infos */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6">
            Visite o Estúdio
          </h2>

          <div className="space-y-4 text-gray-300 mb-6">
            <p className="flex items-center gap-3">
              <MapPin size={20} className="text-[#D4AF37]" />
              Rua Vereador Luís Mendes, 106b - Vila Leila, Mogi Guaçu - SP,
              13847-234
            </p>
            <p className="flex items-center gap-3">
              <Clock size={20} className="text-[#D4AF37]" />
              Seg a Sáb – 10h às 19h
            </p>
            <p className="flex items-center gap-3">
              <Instagram size={20} className="text-[#D4AF37]" />
              @triade.ink
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              ["Tríade Ink", "https://www.instagram.com/triade.ink/"],
              ["Júlia", "https://www.instagram.com/jubodyart_/"],
              ["Jean", "https://www.instagram.com/jeanvinitattoo/"],
              ["Key", "https://www.instagram.com/keyarttatoo/"],
            ].map(([nome, url], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1C1C1C] text-[#D4AF37] border border-[#D4AF37] rounded-full text-sm hover:bg-[#D4AF37]/10 transition"
              >
                {nome}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-[#333] pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tríade Ink — Arte na Pele com Identidade.
      </div>
    </section>
  );
}
