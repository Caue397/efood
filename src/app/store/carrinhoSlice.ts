import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardapioItem } from "../types/api";

interface CarrinhoItem {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  quantidade: number;
}

interface EntregaForm {
  receiver: string;
  description: string;
  city: string;
  zipCode: string;
  number: string;
  complement: string;
}

interface PagamentoForm {
  cardName: string;
  cardNumber: string;
  cvv: string;
  expiresMonth: string;
  expiresYear: string;
}

type CheckoutEtapa = "carrinho" | "entrega" | "pagamento" | "confirmacao";

interface CarrinhoState {
  items: CarrinhoItem[];
  drawerAberto: boolean;
  etapa: CheckoutEtapa;
  entrega: EntregaForm;
  pagamento: PagamentoForm;
  orderId: string;
}

const entregaVazia: EntregaForm = {
  receiver: "",
  description: "",
  city: "",
  zipCode: "",
  number: "",
  complement: "",
};

const pagamentoVazio: PagamentoForm = {
  cardName: "",
  cardNumber: "",
  cvv: "",
  expiresMonth: "",
  expiresYear: "",
};

const initialState: CarrinhoState = {
  items: [],
  drawerAberto: false,
  etapa: "carrinho",
  entrega: entregaVazia,
  pagamento: pagamentoVazio,
  orderId: "",
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionarItem(state, action: PayloadAction<CardapioItem>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantidade += 1;
      } else {
        const { id, nome, foto, preco } = action.payload;
        state.items.push({ id, nome, foto, preco, quantidade: 1 });
      }
    },
    removerItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    abrirDrawer(state) {
      state.drawerAberto = true;
    },
    fecharDrawer(state) {
      state.drawerAberto = false;
    },
    setEtapa(state, action: PayloadAction<CheckoutEtapa>) {
      state.etapa = action.payload;
    },
    atualizarEntrega(state, action: PayloadAction<Partial<EntregaForm>>) {
      state.entrega = { ...state.entrega, ...action.payload };
    },
    atualizarPagamento(state, action: PayloadAction<Partial<PagamentoForm>>) {
      state.pagamento = { ...state.pagamento, ...action.payload };
    },
    setOrderId(state, action: PayloadAction<string>) {
      state.orderId = action.payload;
    },
    concluirPedido(state) {
      state.items = [];
      state.drawerAberto = false;
      state.etapa = "carrinho";
      state.orderId = "";
      state.entrega = entregaVazia;
      state.pagamento = pagamentoVazio;
    },
  },
});

export type { CarrinhoItem, EntregaForm, PagamentoForm, CheckoutEtapa };
export const {
  adicionarItem,
  removerItem,
  abrirDrawer,
  fecharDrawer,
  setEtapa,
  atualizarEntrega,
  atualizarPagamento,
  setOrderId,
  concluirPedido,
} = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
