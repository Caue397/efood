import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { fecharDrawer, removerItem } from "../store/carrinhoSlice";
import {
  Overlay,
  Panel,
  PanelHeader,
  PanelTitulo,
  FecharButton,
  Lista,
  ItemRow,
  ItemImagem,
  ItemInfo,
  ItemNome,
  ItemPreco,
  RemoverButton,
  Rodape,
  TotalRow,
  FinalizarButton,
  CarrinhoVazio,
} from "./Drawer.styles";

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Drawer() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, drawerAberto } = useSelector((s: RootState) => s.carrinho);

  if (!drawerAberto) return null;

  const total = items.reduce((acc, i) => acc + i.preco * i.quantidade, 0);

  return (
    <>
      <Overlay onClick={() => dispatch(fecharDrawer())} />
      <Panel>
        <PanelHeader>
          <PanelTitulo>Carrinho de compras</PanelTitulo>
          <FecharButton type="button" onClick={() => dispatch(fecharDrawer())}>
            ✕
          </FecharButton>
        </PanelHeader>

        {items.length === 0 ? (
          <CarrinhoVazio>Seu carrinho está vazio.</CarrinhoVazio>
        ) : (
          <>
            <Lista>
              {items.map((item) => (
                <ItemRow key={item.id}>
                  <ItemImagem src={item.foto} alt={item.nome} referrerPolicy="no-referrer" />
                  <ItemInfo>
                    <ItemNome>{item.nome}</ItemNome>
                    <ItemPreco>
                      {item.quantidade} × {formatarPreco(item.preco)}
                    </ItemPreco>
                  </ItemInfo>
                  <RemoverButton
                    type="button"
                    aria-label="Remover item"
                    onClick={() => dispatch(removerItem(item.id))}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5h14" stroke="#E66767" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8 5V3h4v2" stroke="#E66767" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 5l.9 11.1A1 1 0 0 0 6.9 17h6.2a1 1 0 0 0 1-.9L15 5" stroke="#E66767" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8 9v4M12 9v4" stroke="#E66767" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </RemoverButton>
                </ItemRow>
              ))}
            </Lista>
            <Rodape>
              <TotalRow>
                <span>Valor total</span>
                <span>{formatarPreco(total)}</span>
              </TotalRow>
              <FinalizarButton type="button">Finalizar pedido</FinalizarButton>
            </Rodape>
          </>
        )}
      </Panel>
    </>
  );
}
