"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Smile, Star } from "lucide-react";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-black text-white px-6 py-20 flex flex-col items-center text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Arte, cuidado e expressão
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-300 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        No coração de Mogi Guaçu, a Tríade Ink oferece um espaço seguro,
        acolhedor e criativo para quem busca mais do que uma tattoo ou piercing
        — uma verdadeira experiência de identidade.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <Feature
          icon={
            <ShieldCheck size={40} className="text-[#D4AF37] mx-auto mb-4" />
          }
          title="Higiene Profissional"
          text="Ambiente esterilizado, materiais descartáveis e máxima segurança."
        />
        <Feature
          icon={<Smile size={40} className="text-[#D4AF37] mx-auto mb-4" />}
          title="Atendimento Humano"
          text="Escutamos sua ideia e cuidamos de cada detalhe com empatia."
        />
        <Feature
          icon={<Star size={40} className="text-[#D4AF37] mx-auto mb-4" />}
          title="Anos de Experiência"
          text="Equipe com especialização em arte corporal e técnicas seguras."
        />
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </motion.div>
  );
}
