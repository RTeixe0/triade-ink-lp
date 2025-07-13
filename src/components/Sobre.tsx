"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Smile, Star } from "lucide-react";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative bg-black text-white px-6 py-24 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff0a] via-[#00000000] to-[#ffffff08] pointer-events-none" />

      <motion.h2
        className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Expressão que marca
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-300 mb-16 text-base md:text-lg z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Tatuagem e piercing com propósito, segurança e personalidade — pra quem
        quer viver sua identidade na pele.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl z-10">
        <Feature
          icon={
            <ShieldCheck
              size={40}
              className="text-[#D4AF37] mx-auto mb-4 drop-shadow-[0_0_8px_#D4AF37]"
            />
          }
          title="Segurança sem concessões"
          text="Ambiente esterilizado, materiais 100% descartáveis e um compromisso sério com sua saúde."
          delay={0}
        />
        <Feature
          icon={
            <Smile
              size={40}
              className="text-[#D4AF37] mx-auto mb-4 drop-shadow-[0_0_8px_#D4AF37]"
            />
          }
          title="Empatia em cada detalhe"
          text="A gente escuta sua ideia, entende sua história e transforma em arte com respeito e cuidado."
          delay={0.1}
        />
        <Feature
          icon={
            <Star
              size={40}
              className="text-[#D4AF37] mx-auto mb-4 drop-shadow-[0_0_8px_#D4AF37]"
            />
          }
          title="Técnica + Visão artística"
          text="Nosso time une experiência, estilo e domínio técnico pra criar algo verdadeiramente seu."
          delay={0.2}
        />
      </div>

      {/* Divider luminosa */}
      <div className="mt-20 h-[1px] w-48 bg-[#D4AF37]/30 blur-sm" />
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      {icon}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </motion.div>
  );
}
