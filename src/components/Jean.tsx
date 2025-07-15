"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Instagram, MessageCircleMore } from "lucide-react";

export default function Jean() {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobileUrl =
      "whatsapp://send?phone=5519996565458&text=E%20a%C3%AD%2C%20Jean!%20Curti%20teu%20trampo%20e%20queria%20marcar%20uma%20tattoo%20contigo.";
    const desktopUrl =
      "https://wa.me/5519996565458?text=E%20a%C3%AD%2C%20Jean!%20Curti%20teu%20trampo%20e%20queria%20marcar%20uma%20tattoo%20contigo.";
    setWhatsappUrl(isMobile ? mobileUrl : desktopUrl);
  }, []);

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
            Jean – Tattoo
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Traço firme. Estilo único. Tattoo com alma. O Jean cria tatuagens
            personalizadas em{" "}
            <strong className="text-[#D4AF37]">fineline</strong> e{" "}
            <strong className="text-[#D4AF37]">blackwork</strong> que
            representam quem você é — com estética, ancestralidade e propósito.
            Sem clichê, sem pressa: aqui o desenho nasce de uma conversa real.
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
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-full hover:opacity-90 transition"
            >
              <MessageCircleMore className="w-5 h-5" />
              Quero minha tattoo com o Jean
            </a>

            <a
              href="https://www.instagram.com/jeanvinitattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-medium rounded-full hover:bg-[#D4AF37]/10 transition"
            >
              <Instagram className="w-5 h-5" />
              Ver as artes
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
