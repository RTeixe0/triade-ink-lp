"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export default function Avaliacao() {
  return (
    <section className="bg-[#0D0D0D] text-white px-6 py-24 flex items-center justify-center">
      <div className="text-center max-w-xl">
        {/* Ícone do Google */}
        <div className="mb-6 flex justify-center">
          <Image src="/google-icon.png" alt="Google" width={50} height={50} />
        </div>

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-4">
          Viveu a experiência Triade Ink?
        </h2>

        {/* Texto */}
        <p className="text-gray-300 mb-6">
          Se saiu com aquele sorriso de quem se curtiu mais no espelho, já sabe:
          deixa sua avaliação no Google. Ajuda a gente a continuar furando,
          tatuando e representando com alma. 💛
        </p>

        {/* Botão de Avaliação */}
        <a
          href="https://g.page/r/Cd25p8m33jpLEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-yellow-400 transition"
        >
          <Star className="w-5 h-5" fill="black" />
          Avaliar no Google
        </a>

        {/* 5 Estrelas Douradas */}
        <div className="flex justify-center mt-6 gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-[#D4AF37]" fill="#D4AF37" />
          ))}
        </div>
      </div>
    </section>
  );
}
