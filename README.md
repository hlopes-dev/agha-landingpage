# Aghá Studio — GitHub Pages

Landing page estática em Next.js para a artista Fernanda Aghá. O site apresenta quatro obras em uma galeria com links para compra, além dos canais de contato e redes sociais.

## Como editar o conteúdo

Edite `data/profile.ts`:

- `bio` e `avatarUrl`: apresentação e marca da artista
- `links`: site, loja, WhatsApp, email e Instagram
- `artworks`: as quatro obras da galeria, com título, categoria, preço opcional e imagem
- `artworkPaymentUrl`: destino compartilhado pelos botões “Pay here” (atualmente a coleção da loja; substitua pelo link Revolut quando disponível)

As imagens de “1-12”, “Textile Big” e “DaVinci” são temporárias e devem ser substituídas pelas imagens corretas quando estiverem disponíveis.

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

As imagens da galeria são carregadas do CDN público da loja. Para alterar as obras ou adicionar o link Revolut/QR code, atualize os dados em `data/profile.ts`.
