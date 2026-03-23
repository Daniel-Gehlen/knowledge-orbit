# Deploy para GitHub Pages

## Configuração Atual

O projeto está configurado para funcionar no GitHub Pages com o seguinte setup:

### vite.config.js
```javascript
base: '/knowledge-orbit/'
```

Isso significa que o site estará disponível em:
`https://daniel-gehlen.github.io/knowledge-orbit/`

## Como Fazer Deploy

1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Verificar se o build foi criado:**
   - A pasta `dist/` deve conter:
     - `index.html`
     - `assets/` (CSS e JS compilados)
     - `favicon.svg`
     - `icons.svg`

3. **Commit e Push:**
   ```bash
   git add dist/
   git commit -m "Add build for GitHub Pages"
   git push origin fix/github-pages-deployment
   ```

4. **Configurar GitHub Pages:**
   - Vá para Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` ou `main`
   - Folder: `/ (root)` ou `/dist`

## Verificação Local

Para testar localmente como se fosse o GitHub Pages:

```bash
npm run build
cd dist
npx serve
```

Isso simulará como o site será servido no GitHub Pages.

## Troubleshooting

### Tela branca no GitHub Pages
- Verifique se o `base` no `vite.config.js` está correto
- Confirme se o build foi feito com sucesso
- Verifique se os caminhos no `dist/index.html` apontam para `/knowledge-orbit/assets/`

### Backend não funciona
- O backend deve ser configurado separadamente
- O GitHub Pages só serve arquivos estáticos
- Para funcionalidades backend, use um serviço separado (Vercel, Railway, etc.)
