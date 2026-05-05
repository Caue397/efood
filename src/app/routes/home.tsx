import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PratoCard } from "../components/PratoCard";
import { pratos } from "../data/pratos";
import {
  HeroSection,
  HeroTitle,
  DestaqueSection,
  SectionTitle,
  PratosGrid,
  CtaSection,
  CtaButton,
} from "./home.styles";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MyFood — Delivery & Gastronomia" },
    {
      name: "description",
      content: "Viva experiências gastronômicas no conforto da sua casa.",
    },
  ];
}

const destaques = pratos.filter((p) => p.destaqueSemana);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection>
          <HeroTitle>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </HeroTitle>
        </HeroSection>

        <DestaqueSection>
          <SectionTitle>Destaques da Semana</SectionTitle>
          <PratosGrid>
            {destaques.map((prato) => (
              <PratoCard key={prato.id} prato={prato} />
            ))}
          </PratosGrid>
        </DestaqueSection>

        <CtaSection>
          <CtaButton to="/cardapio">Ver cardápio completo</CtaButton>
        </CtaSection>
      </main>
      <Footer />
    </>
  );
}
