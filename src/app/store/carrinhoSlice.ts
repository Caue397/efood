import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardapioItem } from "../types/api";

interface CarrinhoItem {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  quantidade: number;
}

interface CarrinhoState {
  items: CarrinhoItem[];
  drawerAberto: boolean;
}

const initialState: CarrinhoState = {
  items: [],
  drawerAberto: false,
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
  },
});

export type { CarrinhoItem };
export const { adicionarItem, removerItem, abrirDrawer, fecharDrawer } =
  carrinhoSlice.actions;
export default carrinhoSlice.reducer;
