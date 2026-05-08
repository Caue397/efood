import { Footer } from "../components/Footer";
import { RestauranteCard } from "../components/RestauranteCard";
import api from "../network/axios";
import type { Restaurante } from "../types/api";
import {
  Hero,
  HeroLogo,
  HeroTitulo,
  MainSection,
  RestaurantesGrid,
} from "./home.styles";
import type { Route } from "./+types/home";

export async function clientLoader() {
  const { data } = await api.get<Restaurante[]>("/restaurantes");
  return data;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "efood — Delivery & Gastronomia" },
    {
      name: "description",
      content: "Viva experiências gastronômicas no conforto da sua casa.",
    },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const restaurantes = loaderData;

  return (
    <>
      <main>
        <Hero>
          <HeroLogo src="/logo.png" alt="efood" />
          <HeroTitulo>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </HeroTitulo>
        </Hero>
        <MainSection>
          <RestaurantesGrid>
            {restaurantes.map((r) => (
              <RestauranteCard key={r.id} restaurante={r} />
            ))}
          </RestaurantesGrid>
        </MainSection>
      </main>
      <Footer />
    </>
  );
}
