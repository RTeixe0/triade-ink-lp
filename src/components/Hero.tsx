// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
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
        Tattoo & Piercing com personalidade em Mogi Guaçu
      </motion.h1>
      <motion.button
        className="mt-8 px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-full hover:opacity-90 transition"
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          const el = document.getElementById("sobre");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Conheça nossos artistas
      </motion.button>
    </section>
  );
}
