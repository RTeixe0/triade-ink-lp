"use client";

import { motion } from "framer-motion";

const depoimentos = [
  {
    nome: "Mariana",
    texto:
      "Fiz um piercing com a Júlia e foi incrível! Super profissional e atenciosa. Ambiente limpo e acolhedor!",
  },
  {
    nome: "Vinícius",
    texto:
      "Minha tattoo com o Jean ficou perfeita. Ele captou exatamente o que eu queria. Recomendo demais!",
  },
  {
    nome: "Letícia",
    texto:
      "O Key é um artista! A tattoo ficou maravilhosa e o atendimento foi top do começo ao fim.",
  },
];

export default function Depoimentos() {
  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          O que dizem nossos clientes
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={i}
              className="bg-[#1C1C1C] p-6 rounded-xl shadow-md border border-[#333]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <p className="text-gray-300 italic mb-4">
                &quot;{dep.texto}&quot;
              </p>
              <p className="text-[#D4AF37] font-semibold">— {dep.nome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
