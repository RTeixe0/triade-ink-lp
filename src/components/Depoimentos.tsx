"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const depoimentos = [
  {
    nome: "Mariana",
    texto:
      "A Ju foi super calma, explicou tudo e me deixou tranquila na hora do piercing. No final ainda me ajudou a escolher a joia certa. Saí me sentindo linda.",
    avatar: "/avatar-mari.jpg",
  },
  {
    nome: "Vinícius",
    texto:
      "O Jean desenhou exatamente o que eu tinha em mente, mas conseguiu deixar ainda melhor. A vibe do estúdio e o cuidado com os detalhes me ganharam.",
    avatar: "/avatar-vini.jpg",
  },
  {
    nome: "Letícia",
    texto:
      "Tatuei com o Key e fiquei chocada com o nível de detalhe. Ele é super focado, atencioso e tem a mão leve. Já pensando na próxima.",
    avatar: "/avatar-leticia.jpg",
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
          Quem já viveu a experiência Triade Ink
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={i}
              className="bg-[#1C1C1C] p-6 rounded-xl shadow-md border border-[#333] hover:border-[#D4AF37]/40 transition text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={dep.avatar}
                  alt={`Avatar de ${dep.nome}`}
                  width={48}
                  height={48}
                  className="rounded-full border border-[#444]"
                />
                <div>
                  <p className="text-[#D4AF37] font-semibold">{dep.nome}</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">
                &quot;{dep.texto}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
