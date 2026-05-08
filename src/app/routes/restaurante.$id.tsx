import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { MenuCard } from "../components/MenuCard";
import { Drawer } from "../components/Drawer";
import api from "../network/axios";
import { proxyImg } from "../network/proxyImg";
import type { Restaurante } from "../types/api";
import { adicionarItem, abrirDrawer } from "../store/carrinhoSlice";
import type { RootState, AppDispatch } from "../store";
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
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((s: RootState) => s.carrinho.items);
  const qtdCarrinho = items.reduce((acc, i) => acc + i.quantidade, 0);

  return (
    <>
      <PerfilHeader>
        <PerfilHeaderInner>
          <NavLink to="/">Restaurantes</NavLink>
          <Logo to="/">
            <LogoImage src="/logo.png" alt="efood" />
          </Logo>
          <CartInfo
            as="button"
            type="button"
            onClick={() => dispatch(abrirDrawer())}
          >
            {qtdCarrinho} produto(s) no carrinho
          </CartInfo>
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
                onAdicionar={() => {
                  dispatch(adicionarItem(item));
                  dispatch(abrirDrawer());
                }}
              />
            ))}
          </MenuGrid>
        </MenuSection>
      </main>
      <Footer />
      <Drawer />
    </>
  );
}
