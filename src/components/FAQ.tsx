"use client";

import { useState } from "react";
import {
  ChevronDown,
  BadgeCheck,
  Syringe,
  HeartPulse,
  MessageCircleMore,
} from "lucide-react";

const perguntas = [
  {
    pergunta: "Qual a idade mínima pra fazer uma tattoo ou piercing?",
    resposta:
      "Se você já tem 18, tá liberado. Menores de 16 só com autorização e presença dos responsáveis, além de documentos. A gente faz tudo com responsabilidade.",
    icon: <BadgeCheck className="text-[#D4AF37] w-5 h-5 mr-2" />,
  },
  {
    pergunta: "Furar dói?",
    resposta:
      "Depende da região, mas a maioria das pessoas fala que é mais tranquilo do que imaginavam. Rápido, seguro e com todo cuidado no processo.",
    icon: <Syringe className="text-[#D4AF37] w-5 h-5 mr-2" />,
  },
  {
    pergunta: "E os cuidados depois da tattoo?",
    resposta:
      "Nada de sol, piscina ou arranhões. Lavar com sabonete neutro, manter hidratado com pomada e deixar a pele respirar. A gente passa tudinho no dia!",
    icon: <HeartPulse className="text-[#D4AF37] w-5 h-5 mr-2" />,
  },
  {
    pergunta: "Consigo agendar direto pelo WhatsApp?",
    resposta:
      "Sim! Cada artista tem um botão com link direto aqui na página. É só clicar, chamar e combinar o rolê.",
    icon: <MessageCircleMore className="text-[#D4AF37] w-5 h-5 mr-2" />,
  },
];

export default function FAQ() {
  const [ativo, setAtivo] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-12 text-center">
          Dúvidas na mente? A gente responde!
        </h2>

        <div className="space-y-4">
          {perguntas.map((item, i) => (
            <div
              key={i}
              className="border border-[#333] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left flex justify-between items-center px-6 py-4 bg-[#1C1C1C] hover:bg-[#2a2a2a] transition"
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="font-medium">{item.pergunta}</span>
                </div>
                <ChevronDown
                  className={`transition-transform ${
                    ativo === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {ativo === i && (
                <div className="px-6 py-4 bg-[#1C1C1C] text-gray-300 border-t border-[#333]">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
