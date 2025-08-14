# Pousada Três Palmeiras - Landing Page

Landing page moderna e otimizada para a Pousada Três Palmeiras, desenvolvida com Next.js 15 e focada em conversão e SEO.

## 🚀 Tecnologias

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** + **shadcn/ui**
- **React Hook Form** + **Zod**
- **Bun** (runtime e package manager)
- **ESLint** + **Prettier**

## 📋 Funcionalidades

- ✅ **Performance otimizada** (Core Web Vitals)
- ✅ **SEO técnico** (sitemap, robots.txt, meta tags)
- ✅ **Acessibilidade** (WCAG 2.1 AA)
- ✅ **Google Analytics 4** + **Tag Manager**
- ✅ **Formulário de contato** com validação
- ✅ **Design responsivo** e moderno
- ✅ **Rastreamento de eventos** (WhatsApp, telefone, etc.)

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
bun install

# Servidor de desenvolvimento
bun run dev

# Build de produção
bun run build

# Verificações de qualidade
bun run lint
bunx tsc --noEmit
```

## 🌐 Deploy

**Produção:** https://tres-palmeiras-53a1brwlz-letteriellos-projects.vercel.app

O projeto está configurado para deploy automático na Vercel.

## 📊 Analytics

Para ativar o Google Analytics e Tag Manager em produção:

1. Substitua os IDs placeholder no `layout.tsx`:
   - `GTM-XXXXXXX` → seu ID do Google Tag Manager
   - `G-XXXXXXXXXX` → seu ID do Google Analytics 4

2. Descomente os scripts de analytics

## 🎯 Próximos Passos

- [ ] Configurar domínio personalizado
- [ ] Ativar IDs reais do GA4/GTM
- [ ] Implementar Schema Markup
- [ ] Configurar Google Search Console
- [ ] Testes A/B para otimização de conversão

## 📝 Licença

Projeto desenvolvido para a Pousada Três Palmeiras.
