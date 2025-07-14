"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Julia() {
  return (
    <section
      id="julia"
      className="bg-[#1C1C1C] text-white px-6 py-32 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem da Júlia */}
        <motion.div
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/julia.jpg"
            alt="Júlia - Body Piercing"
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
            Júlia – Body Piercing
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            Piercings que vão além da estética: são expressão, atitude e
            cuidado. Com técnica afiada, toque leve e olhar apurado, a Júlia
            aplica cada joia como quem entende do que faz — e respeita cada
            estilo.
          </p>

          <p className="text-gray-400 italic mb-6">
            &quot;Respira pelo nariz... solta devagar pela boca.&quot; <br />
            Pode confiar: o momento é seu.
          </p>

          <h3 className="text-xl font-medium text-white mb-3">Galeria</h3>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {["piercing1.jpg", "piercing2.jpg", "piercing3.jpg"].map(
              (img, i) => (
                <Image
                  key={i}
                  src={`/${img}`}
                  alt={`Piercing ${i + 1}`}
                  width={300}
                  height={300}
                  className="rounded-md object-cover w-full h-auto"
                />
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/?text=Olá,%20quero%20agendar%20um%20piercing%20com%20a%20Júlia%20da%20Triade%20Ink!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-full hover:opacity-90 transition"
            >
              Agendar meu piercing com a Jú
            </a>

            <a
              href="https://www.instagram.com/jubodyart_/"
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
