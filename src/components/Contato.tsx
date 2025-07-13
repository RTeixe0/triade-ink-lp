'use client'

import { MapPin, Clock, Instagram } from 'lucide-react'

export default function Contato() {
  return (
    <section className="bg-[#0D0D0D] text-white px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Mapa */}
        <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!2m12!1m3!1d3679.378125518409!2d-47.00396742474918!3d-22.75155607938748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8908df4c7951f%3A0x4fcb36bc1cb01046!2sTr%C3%ADade%20Ink!5e0!3m2!1spt-BR!2sbr!4v1720478560812!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Infos */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6">
            Visite o Estúdio
          </h2>

          <div className="space-y-4 text-gray-300 mb-6">
            <p className="flex items-center gap-3">
              <MapPin size={20} className="text-[#D4AF37]" />
              Av. [Endereço Exato], Mogi Guaçu – SP
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
              ['Tríade Ink', 'https://www.instagram.com/triade.ink/'],
              ['Júlia', 'https://www.instagram.com/jubodyart_/'],
              ['Jean', 'https://www.instagram.com/jeanvinitattoo/'],
              ['Key', 'https://www.instagram.com/keyarttatoo/'],
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
  )
}
