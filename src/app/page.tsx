import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Julia from "@/components/Julia";
import Jean from "@/components/Jean";
import Key from "@/components/Key";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import BotaoFlutuante from "@/components/BotaoFlutuante";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Sobre />
        <Julia />
        <Jean />
        <Key />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <BotaoFlutuante />
    </>
  );
}
