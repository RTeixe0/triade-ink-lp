"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [abrirAgendamento, setAbrirAgendamento] = useState(false);

  const links = [
    {
      nome: "Piercing com a Jú",
      url: "https://wa.me/?text=Olá,%20quero%20agendar%20um%20piercing%20com%20a%20Júlia%20da%20Triade%20Ink!",
    },
    {
      nome: "Tattoo com o Jean",
      url: "https://wa.me/?text=Olá,%20quero%20fazer%20uma%20tattoo%20com%20o%20Jean%20da%20Triade%20Ink!",
    },
    {
      nome: "Tattoo com o Key",
      url: "https://wa.me/?text=Olá,%20quero%20fazer%20uma%20tattoo%20com%20o%20Key%20da%20Triade%20Ink!",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <motion.img
        src="/logo.png"
        alt="Tríade Ink"
        className="w-80 md:w-[440px] lg:w-[500px] mb-6 drop-shadow-[0_0_20px_#D4AF37]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-3xl md:text-5xl font-serif text-[#D4AF37]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Autenticidade na pele. Tattoo & Piercing com alma, estilo e atitude.
      </motion.h1>

      <motion.p
        className="mt-4 max-w-2xl text-lg md:text-xl text-[#f0e7c0]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Estúdio de Tattoo & Piercing em Mogi Guaçu com arte personalizada e
        cuidado em cada detalhe.
      </motion.p>

      <motion.div
        className="relative mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <button
          onClick={() => setAbrirAgendamento(!abrirAgendamento)}
          className="px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-full hover:opacity-90 transition"
        >
          Chamar alguém da Triade
        </button>

        <AnimatePresence>
          {abrirAgendamento && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 w-full"
            >
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-[#D4AF37]/40 bg-black/30 backdrop-blur-md text-[#f0e7c0] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_12px_#D4AF37] transition-all duration-300 text-sm md:text-base"
                >
                  {link.nome}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
