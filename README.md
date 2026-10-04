# Aghá Studio — GitHub Pages

Landing page estática em Next.js para a artista Fernanda Aghá. O site apresenta uma seleção de 18 obras e links para as respectivas páginas de produto, além dos canais de contato e redes sociais.

## Como editar o conteúdo

Edite `data/profile.ts`:

- `bio` e `avatarUrl`: apresentação e marca da artista
- `links`: site, loja, WhatsApp, email e Instagram
- `artworks`: obras da galeria, com título, categoria, preço opcional, imagem e link de produto. Até os preços serem definidos, os itens sem preço mostram “Price coming soon”.

A galeria revela mais obras automaticamente conforme a pessoa rola a página; as imagens também carregam sob demanda.

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

As imagens da galeria são carregadas do CDN público da loja. Para substituir uma obra ou adicionar o link Revolut/QR code, atualize os dados em `data/profile.ts`.
