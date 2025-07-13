"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const perguntas = [
  {
    pergunta: "Qual a idade mínima para fazer uma tatuagem ou piercing?",
    resposta:
      "A idade mínima legal é 18 anos. Com autorização dos responsáveis e documentação, atendemos menores a partir de 16.",
  },
  {
    pergunta: "Fazer piercing dói?",
    resposta:
      "Depende da região, mas a maioria das pessoas relata um desconforto leve e rápido. O processo é rápido, seguro e com material esterilizado.",
  },
  {
    pergunta: "Quais os cuidados após fazer uma tattoo?",
    resposta:
      "Higienizar com sabonete neutro, evitar exposição ao sol, piscina e manter a pele hidratada com pomada cicatrizante por pelo menos 15 dias.",
  },
  {
    pergunta: "Posso agendar diretamente pelo WhatsApp?",
    resposta:
      "Sim! Cada profissional tem um link direto para agendamento via WhatsApp aqui na página.",
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
          Dúvidas Frequentes
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
                <span className="font-medium">{item.pergunta}</span>
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
