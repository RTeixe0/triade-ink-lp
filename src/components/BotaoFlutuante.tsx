"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const links = [
  {
    nome: "Falar com Júlia",
    url: "https://wa.me/?text=Olá,%20quero%20agendar%20um%20piercing%20com%20a%20Júlia%20da%20Triade%20Ink!",
  },
  {
    nome: "Falar com Jean",
    url: "https://wa.me/?text=Olá,%20quero%20fazer%20uma%20tattoo%20com%20o%20Jean%20da%20Triade%20Ink!",
  },
  {
    nome: "Falar com Key",
    url: "https://wa.me/?text=Olá,%20quero%20fazer%20uma%20tattoo%20com%20o%20Key%20da%20Triade%20Ink!",
  },
];

export default function BotaoFlutuante() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {aberto && (
        <div className="mb-4 bg-black border border-[#333] rounded-xl shadow-lg p-3 space-y-2">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded transition"
            >
              {link.nome}
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setAberto(!aberto)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition"
        aria-label="Abrir opções de WhatsApp"
      >
        {aberto ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
