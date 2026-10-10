# Aghá Studio — GitHub Pages

Landing page estática em Next.js para a artista Fernanda Aghá. O site apresenta quatro obras em uma galeria de uma coluna, com links de pagamento Revolut, além dos canais de contato e redes sociais.

## Como editar o conteúdo

Edite `data/profile.ts`:

- `bio` e `avatarUrl`: apresentação e marca da artista
- `links`: site, loja, WhatsApp, email e Instagram
- `artworks`: as quatro obras da galeria, com título, preço, imagem e link de pagamento

As imagens da galeria estão em `public/artworks/`. O workflow do GitHub Actions exporta o site para a raiz do domínio personalizado.

## Rodar localmente

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`. O build de produção pode ser validado com `npm run build`; os arquivos estáticos são gerados em `out/`.

## Publicar no GitHub Pages

1. Garanta que a branch principal seja `main`.
2. Em `Settings > Pages`, selecione **GitHub Actions** como source.
3. Ao fazer push para `main`, `.github/workflows/static.yml` exporta e publica o site.

Para alterar as obras, preços ou links de pagamento, atualize os dados em `data/profile.ts`.
