"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export default function Avaliacao() {
  return (
    <section className="bg-[#0D0D0D] text-white px-6 py-24 flex items-center justify-center">
      <div className="text-center max-w-xl">
        <div className="mb-4 flex justify-center">
          <Star className="text-[#D4AF37] w-10 h-10" fill="#D4AF37" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-4">
          Já passou pela Tríade?
        </h2>
        <p className="text-gray-300 mb-6">
          Se curtiu o atendimento, o ambiente ou o trampo, deixa sua avaliação
          no Google. Ajuda muito a fortalecer nosso corre!
        </p>
        <a
          href="https://g.page/r/Cd25p8m33jpLEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-yellow-400 transition"
        >
          <Star className="w-5 h-5" fill="black" />
          Avaliar no Google
        </a>

        <Image
          src="/images/avaliacao-banner.png"
          alt="Avalie a Tríade Ink"
          width={800}
          height={400}
          className="mt-10 w-full rounded-xl shadow-xl hidden md:block"
          priority
        />
      </div>
    </section>
  );
}
