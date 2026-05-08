import { useState } from "react";
import { Footer } from "../components/Footer";
import { MenuCard } from "../components/MenuCard";
import api from "../network/axios";
import { proxyImg } from "../network/proxyImg";
import type { Restaurante } from "../types/api";
import {
  PerfilHeader,
  PerfilHeaderInner,
  NavLink,
  Logo,
  LogoImage,
  CartInfo,
  HeroCapa,
  HeroContent,
  HeroTipo,
  HeroNome,
  MenuSection,
  MenuGrid,
} from "./restaurante.$id.styles";
import type { Route } from "./+types/restaurante.$id";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const { data } = await api.get<Restaurante[]>("/restaurantes");
  const restaurante = data.find((r) => r.id === Number(params.id));
  if (!restaurante) throw new Response("Not Found", { status: 404 });
  return {
    ...restaurante,
    capa: proxyImg(restaurante.capa),
    cardapio: restaurante.cardapio.map((item) => ({
      ...item,
      foto: proxyImg(item.foto),
    })),
  };
}

export function meta({ data }: Route.MetaArgs) {
  return [{ title: `${data?.titulo ?? "Restaurante"} — efood` }];
}

export default function RestaurantePerfil({ loaderData }: Route.ComponentProps) {
  const restaurante = loaderData;
  const [qtdCarrinho, setQtdCarrinho] = useState(0);

  return (
    <>
      <PerfilHeader>
        <PerfilHeaderInner>
          <NavLink to="/">Restaurantes</NavLink>
          <Logo to="/">
            <LogoImage src="/logo.png" alt="efood" />
          </Logo>
          <CartInfo>{qtdCarrinho} produto(s) no carrinho</CartInfo>
        </PerfilHeaderInner>
      </PerfilHeader>
      <main>
        <HeroCapa $src={restaurante.capa}>
          <HeroContent>
            <HeroTipo>{restaurante.tipo}</HeroTipo>
            <HeroNome>{restaurante.titulo}</HeroNome>
          </HeroContent>
        </HeroCapa>
        <MenuSection>
          <MenuGrid>
            {restaurante.cardapio.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAdicionar={() => setQtdCarrinho((q) => q + 1)}
              />
            ))}
          </MenuGrid>
        </MenuSection>
      </main>
      <Footer />
    </>
  );
}
