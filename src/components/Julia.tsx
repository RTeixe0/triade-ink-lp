"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Instagram, MessageCircleMore } from "lucide-react";

export default function Julia() {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobileUrl =
      "whatsapp://send?phone=5519993320279&text=Oi%2C%20Ju!%20Queria%20agendar%20um%20hor%C3%A1rio%20pra%20colocar%20um%20piercing%20%F0%9F%98%8A";
    const desktopUrl =
      "https://wa.me/5519993320279?text=Oi%2C%20Ju!%20Queria%20agendar%20um%20hor%C3%A1rio%20pra%20colocar%20um%20piercing%20%F0%9F%98%8A";
    setWhatsappUrl(isMobile ? mobileUrl : desktopUrl);
  }, []);

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
            cuidado. Com técnica afiada, toque leve e olhar apurado, a Ju aplica
            cada joia como quem entende do que faz — e respeita cada estilo.
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
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-full hover:opacity-90 transition"
            >
              <MessageCircleMore className="w-5 h-5" />
              Quero meu piercing com a Ju
            </a>

            <a
              href="https://www.instagram.com/jubodyart_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-medium rounded-full hover:bg-[#D4AF37]/10 transition"
            >
              <Instagram className="w-5 h-5" />
              Ver os trabalhos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
