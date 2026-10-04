# Linktree com Next.js no GitHub Pages

Projeto simples em Next.js, com export estatico, pronto para publicar no GitHub Pages.

## Como editar o conteudo

Edite apenas o arquivo `data/profile.ts`:

- `bio`: descricao curta
- `avatarUrl`: link para imagem de perfil
- `links`: lista de botoes com `title` e `url`

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Publicar no GitHub Pages

1. Suba este projeto para um repositorio no GitHub.
2. Garanta que a branch principal seja `main`.
3. Em `Settings > Pages`, selecione **GitHub Actions** como source.
4. Ao fazer push para `main`, o workflow `.github/workflows/deploy.yml` faz o deploy automaticamente.
