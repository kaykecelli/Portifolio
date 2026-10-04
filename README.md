# Kayke Celli — Portfolio

Site de portfólio / CV bilingue (PT/EN) com tema claro. Feito com Vite + React + TypeScript.

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Onde editar conteúdo

| Arquivo | O que muda |
|---------|------------|
| [`src/data/content.pt.ts`](src/data/content.pt.ts) | Textos em português (hero, about, currículo, contato) |
| [`src/data/content.en.ts`](src/data/content.en.ts) | Textos em inglês |
| [`src/data/projects.ts`](src/data/projects.ts) | Projetos (placeholders → seus jogos) |
| [`src/data/links.ts`](src/data/links.ts) | Email, telefone, LinkedIn, GitHub, PDF do CV |

### Adicionar um projeto

1. Coloque imagens/vídeos em `public/projects/` (opcional).
2. Em `src/data/projects.ts`, adicione um item no array `projects` com `en` e `pt`.
3. Use `category: "academic"` ou `"professional"` para os filtros.
4. Preencha `image`, `video` e `links` quando tiver mídia/URLs.

### CV em PDF

Coloque o arquivo em `public/` (ex.: `public/cv-kayke-celli.pdf`) e atualize `links.cv` em `src/data/links.ts`.

## Idioma

- Na primeira visita: se o navegador estiver em `pt` / `pt-BR` → português; qualquer outro → inglês.
- O toggle **PT | EN** na navbar salva a escolha em `localStorage` (`portfolio-lang`).

## Estrutura

```
src/
  components/   # Navbar, Hero, About, Resume, Portfolio, Contact, Footer
  data/         # Conteúdo editável
  i18n/         # LanguageContext
  styles/       # Tokens CSS globais
```
