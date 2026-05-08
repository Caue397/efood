import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PratoCard } from "../components/PratoCard";
import { pratos } from "../data/pratos";
import {
  Main,
  PageTitle,
  FilterRow,
  FilterButton,
  PratosGrid,
  EmptyState,
} from "./cardapio.styles";

export function meta() {
  return [
    { title: "Cardápio — efood" },
    { name: "description", content: "Conheça todos os pratos do efood." },
  ];
}

const categorias = [
  "Todos",
  ...Array.from(new Set(pratos.map((p) => p.categoria))),
];

export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const pratosFiltrados =
    categoriaAtiva === "Todos"
      ? pratos
      : pratos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <>
      <Header />
      <Main>
        <PageTitle>Nosso Cardápio</PageTitle>
        <FilterRow>
          {categorias.map((cat) => (
            <FilterButton
              key={cat}
              $active={categoriaAtiva === cat}
              onClick={() => setCategoriaAtiva(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </FilterRow>
        <PratosGrid>
          {pratosFiltrados.length > 0 ? (
            pratosFiltrados.map((prato) => (
              <PratoCard key={prato.id} prato={prato} />
            ))
          ) : (
            <EmptyState>Nenhum prato encontrado nessa categoria.</EmptyState>
          )}
        </PratosGrid>
      </Main>
      <Footer />
    </>
  );
}
