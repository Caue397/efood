# eFood

Aplicação de cardápio online para um restaurante de culinária variada. Permite visualizar os pratos em destaque na página inicial e navegar pelo cardápio completo com filtro por categoria.

## Funcionalidades

- Página inicial com hero e destaques da semana
- Cardápio completo com filtro por categoria (Brasileira, Italiana, Mexicana, Americana, Frutos do Mar)
- Cards de prato com foto, badge de categoria, avaliação e badge "Destaque da semana"
- Header fixo com navegação entre páginas
- Footer com ícones de redes sociais

## Stack

| Tecnologia | Versão |
|---|---|
| React | ^19.2.4 |
| React Router | 7.14.0 |
| styled-components | ^6.1.x |
| TypeScript | ^5.9.3 |
| Vite | ^8.0.3 |

## Estrutura de pastas

```
src/app/
├── root.tsx                   # Layout raiz e GlobalStyle
├── routes.ts                  # Configuração de rotas
├── data/
│   └── pratos.ts              # Dados mockados do cardápio
├── components/
│   ├── Header.tsx
│   ├── Header.styles.ts
│   ├── Footer.tsx
│   ├── Footer.styles.ts
│   ├── PratoCard.tsx
│   └── PratoCard.styles.ts
└── routes/
    ├── home.tsx               # Página inicial
    ├── home.styles.ts
    ├── cardapio.tsx           # Cardápio completo com filtros
    └── cardapio.styles.ts
```

## Como rodar

```bash
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run start
```
