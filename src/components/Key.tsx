"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Instagram, MessageCircleMore } from "lucide-react";

export default function Key() {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobileUrl =
      "whatsapp://send?phone=5519999999999&text=E%20a%C3%AD%2C%20Key!%20Curti%20teu%20trampo%20e%20queria%20agendar%20uma%20tattoo%20contigo.";
    const desktopUrl =
      "https://wa.me/5519999999999?text=E%20a%C3%AD%2C%20Key!%20Curti%20teu%20trampo%20e%20queria%20agendar%20uma%20tattoo%20contigo.";
    setWhatsappUrl(isMobile ? mobileUrl : desktopUrl);
  }, []);

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
            Key – Tattoo
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Com traços que impressionam nos detalhes e um domínio impecável de
            luz e sombra, Key transforma pele em tela. Especialista em{" "}
            <strong className="text-[#D4AF37]">realismo black & gray</strong>,{" "}
            <strong className="text-[#D4AF37]">lettering artístico</strong> e{" "}
            <strong className="text-[#D4AF37]">
              símbolos que falam por si
            </strong>
            , seu trabalho mistura técnica afiada e estilo pessoal — direto,
            forte e cheio de presença.
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
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-full hover:opacity-90 transition"
            >
              <MessageCircleMore className="w-5 h-5" />
              Quero minha tattoo com o Key
            </a>

            <a
              href="https://www.instagram.com/keyarttatoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-medium rounded-full hover:bg-[#D4AF37]/10 transition"
            >
              <Instagram className="w-5 h-5" />
              Explorar o traço
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
