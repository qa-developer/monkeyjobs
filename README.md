# MonkeyJobs — Sitio web corporativo

Sitio web oficial de **MonkeyJobs S.A.S.**, casa de desarrollo de software con sede en Bogotá. Construido con Astro v6, Tailwind CSS v4 y TypeScript.

## Stack

- **Framework:** [Astro v6](https://astro.build) (output estático)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com)
- **Tipos:** TypeScript 5.9
- **Iconos:** Tabler + Flat Color Icons (via `astro-icon`)
- **Formulario de contacto:** EmailJS
- **Imágenes:** Sharp + Unpic CDN

## Requisitos

- Node.js >= 22.12.0
- npm

## Comandos

| Comando           | Descripción                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Levanta el dev server en `localhost:4321`  |
| `npm run build`   | Genera el build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build de producción local  |
| `npm run check`   | astro check + ESLint + Prettier            |
| `npm run fix`     | Auto-fix de ESLint + Prettier              |

## Estructura

```
src/
  assets/         imágenes, estilos, favicons
  components/
    common/       Image, Metadata, Analytics, ToggleTheme, SpiralDecoration
    ui/           primitivos (Button, Headline, WidgetWrapper)
    widgets/      secciones (Hero, Features, Pricing, Header, Footer, WelcomeLoader)
  layouts/        Layout.astro, PageLayout.astro
  pages/          rutas (index, about, services, pricing, contact, 404)
  utils/          permalinks, images, frontmatter
  config.yaml     configuración del sitio (módulo virtual `astrowind:config`)
  navigation.ts   estructura de menú (header + footer)
vendor/integration/  integración custom para cargar `config.yaml`
```

### Path alias

`~/` apunta a `src/`:

```ts
import Image from '~/components/common/Image.astro';
import { SITE } from 'astrowind:config';
```

### Configuración del sitio

`src/config.yaml` se expone como módulo virtual `astrowind:config` (ver `vendor/integration/`). Exporta `SITE`, `I18N`, `METADATA`, `UI`, `ANALYTICS`.

## Despliegue

Build estático en `./dist/`. Compatible con cualquier hosting estático (Cloudflare Pages, GitHub Pages, S3, etc.).

## Licencia

Código propietario de MonkeyJobs S.A.S. Ver [LICENSE.md](./LICENSE.md).
