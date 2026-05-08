export interface Prato {
  id: number;
  nome: string;
  categoria: string;
  avaliacao: number;
  destaqueSemana: boolean;
  descricao: string;
  imagem: string;
}

export const pratos: Prato[] = [
  {
    id: 1,
    nome: "Picanha Grelhada",
    categoria: "Brasileira",
    avaliacao: 4.9,
    destaqueSemana: true,
    descricao:
      "Picanha premium grelhada na brasa, acompanhada de farofa crocante, vinagrete fresco e arroz branco. Um clássico brasileiro que derrete na boca.",
    imagem: "https://picsum.photos/seed/picanha/600/300",
  },
  {
    id: 2,
    nome: "Salmão ao Molho Limão",
    categoria: "Frutos do Mar",
    avaliacao: 4.7,
    destaqueSemana: false,
    descricao:
      "Filé de salmão fresco ao forno com crosta de ervas, molho de limão-siciliano e alcaparras. Servido com purê de batata-doce.",
    imagem: "https://picsum.photos/seed/salmon/600/300",
  },
  {
    id: 3,
    nome: "Frango Parmegiana",
    categoria: "Italiana",
    avaliacao: 4.6,
    destaqueSemana: false,
    descricao:
      "Frango empanado com molho de tomate artesanal e queijo mussarela gratinado. Acompanha espaguete ao alho e óleo.",
    imagem: "https://picsum.photos/seed/parmegiana/600/300",
  },
  {
    id: 4,
    nome: "Tacos de Carne Seca",
    categoria: "Mexicana",
    avaliacao: 4.5,
    destaqueSemana: false,
    descricao:
      "Tortilhas de milho recheadas com carne seca desfiada, guacamole, pico de gallo e creme azedo. Porção com 3 unidades.",
    imagem: "https://picsum.photos/seed/tacos/600/300",
  },
  {
    id: 5,
    nome: "Risoto de Camarão",
    categoria: "Italiana",
    avaliacao: 4.8,
    destaqueSemana: false,
    descricao:
      "Risoto cremoso com camarões rosa salteados na manteiga, vinho branco, parmesão e toque de limão. Feito ao momento.",
    imagem: "https://picsum.photos/seed/risotto/600/300",
  },
  {
    id: 6,
    nome: "Burger Smash efood",
    categoria: "Americana",
    avaliacao: 4.7,
    destaqueSemana: true,
    descricao:
      "Dois smash burgers de 90g, queijo cheddar americano, bacon crocante, alface americana, tomate e molho especial da casa. No pão brioche.",
    imagem: "https://picsum.photos/seed/burger/600/300",
  },
];
