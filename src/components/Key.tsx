"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Key() {
  return (
    <section
      id="key"
      className="bg-[#1C1C1C] text-white px-6 py-32 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem do Key */}
        <motion.div
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/key.jpg"
            alt="Key - Tattoo Artist"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Texto + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-4">
            Key – Tattoo Art
          </h2>
          <p className="text-gray-300 mb-6">
            Key é especializado em{" "}
            <strong className="text-[#D4AF37]">realismo em black & gray</strong>
            ,<strong className="text-[#D4AF37]"> lettering artístico</strong> e{" "}
            <strong className="text-[#D4AF37]">tatuagens simbólicas</strong>.
            Seu trabalho combina técnica, sensibilidade e estética refinada —
            explorando luz, sombra e detalhes que tornam cada arte única e cheia
            de significado.
          </p>
          <h3 className="text-xl font-medium text-white mb-3">Galeria</h3>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {["tattoo-key1.jpg", "tattoo-key2.jpg", "tattoo-key3.jpg"].map(
              (img, i) => (
                <Image
                  key={i}
                  src={`/${img}`}
                  alt={`Tattoo Key ${i + 1}`}
                  width={300}
                  height={300}
                  className="rounded-md object-cover w-full h-auto"
                />
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/?text=Olá,%20quero%20fazer%20uma%20tattoo%20com%20o%20Key%20da%20Triade%20Ink!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-full hover:opacity-90 transition"
            >
              Falar com Key no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/keyarttatoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-medium rounded-full hover:bg-[#D4AF37]/10 transition"
            >
              Ver portfólio no Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
