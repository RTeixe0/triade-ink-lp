"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Jean() {
  return (
    <section
      id="jean"
      className="bg-black text-white px-6 py-32 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem do Jean */}
        <motion.div
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/jean.jpg"
            alt="Jean - Tattoo Artist"
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
            Jean – Tattoo Art
          </h2>
          <p className="text-gray-300 mb-6">
            Jean é especializado em{" "}
            <strong className="text-[#D4AF37]">blackwork</strong>,{" "}
            <strong className="text-[#D4AF37]">fineline</strong> e{" "}
            <strong className="text-[#D4AF37]">ornamentais florais</strong>. Com
            traços precisos e técnicas de pontilhismo, ele transforma ideias em
            tatuagens com identidade e estilo marcante — da delicadeza das
            mandalas ao impacto do tribal moderno.
          </p>

          <h3 className="text-xl font-medium text-white mb-3">Galeria</h3>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {["tattoo-jean1.jpg", "tattoo-jean2.jpg", "tattoo-jean3.jpg"].map(
              (img, i) => (
                <Image
                  key={i}
                  src={`/${img}`}
                  alt={`Tattoo Jean ${i + 1}`}
                  width={300}
                  height={300}
                  className="rounded-md object-cover w-full h-auto"
                />
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/?text=Olá,%20quero%20fazer%20uma%20tattoo%20com%20o%20Jean%20da%20Triade%20Ink!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-full hover:opacity-90 transition"
            >
              Falar com Jean no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/jeanvinitattoo/"
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
