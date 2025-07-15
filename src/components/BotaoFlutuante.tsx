"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    nome: "Falar com Júlia",
    url: "https://wa.me/19993320279?text=Oi%2C%20Ju!%20Queria%20agendar%20um%20horário%20pra%20colocar%20um%20piercing%20😊",
  },
  {
    nome: "Falar com Jean",
    url: "https://wa.me/19996565458?text=E%20aí%2C%20Jean!%20Curti%20teu%20trampo%20e%20queria%20marcar%20uma%20tattoo%20contigo.",
  },
  {
    nome: "Falar com Key",
    url: "https://wa.me/?text=Salve%2C%20Key!%20Quero%20fechar%20uma%20tattoo%20com%20você.",
  },
];

export default function BotaoFlutuante() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {aberto && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-4 bg-black border border-[#333] rounded-xl shadow-lg p-3 space-y-2"
          >
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
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setAberto(!aberto)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition"
        aria-label="Abrir opções de WhatsApp"
        aria-expanded={aberto}
        
      >
        {aberto ? <X size={24} /> : <FaWhatsapp size={24} />}
      </button>
    </div>
  );
}
