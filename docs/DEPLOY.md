# Despliegue — MonkeyJobs

El sitio es **estático** (`output: 'static'` en `astro.config.ts`) y está configurado para servirse en la raíz de **https://www.monkeyjobs.co**. Cualquier hosting estático sirve; abajo, los tres caminos más simples. Todos son gratuitos para este caso y conectan directo al repo `qa-developer/monkeyjobs`, así que **cada `git push` redepliega solo**.

Parámetros comunes de build (iguales en todos):

| Campo | Valor |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 |

---

## Opción A — Cloudflare Pages (recomendada)

Ya usas Cloudflare (cloudflared), así que el dominio probablemente esté ahí.

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Elige el repo `qa-developer/monkeyjobs`, rama `main`.
3. Build command `npm run build`, output `dist`. Deploy.
4. **Custom domain:** pestaña *Custom domains* → agrega `www.monkeyjobs.co`. Si el DNS está en Cloudflare, crea el registro solo.
5. Redirige el ápex `monkeyjobs.co` → `www` (regla de redirect 301) para no fragmentar señales.

## Opción B — Vercel

1. vercel.com → **Add New → Project** → importa `qa-developer/monkeyjobs`.
2. Preset Astro (autodetecta). Deploy.
3. **Settings → Domains** → agrega `www.monkeyjobs.co` y sigue las instrucciones DNS (CNAME a `cname.vercel-dns.com`).

## Opción C — Netlify

1. netlify.com → **Add new site → Import an existing project** → `qa-developer/monkeyjobs`.
2. Build `npm run build`, publish `dist`. Deploy.
3. **Domain settings** → add custom domain `www.monkeyjobs.co` → configura el CNAME que indique.

---

## Después de desplegar (en orden)

1. Verifica que `https://www.monkeyjobs.co` carga y que `https://www.monkeyjobs.co/sitemap-index.xml` responde.
2. `npm run indexnow` (local, tras el deploy) → notifica a Bing/Yandex las 14 URLs.
3. Pega los IDs de verificación en `src/config.yaml` (`googleSiteVerificationId`, `bingSiteVerificationId`, `yandexSiteVerificationId`) y el `analytics.vendors.googleAnalytics.id`; vuelve a desplegar.
4. En Google Search Console y Bing Webmaster Tools: **enviar** `https://www.monkeyjobs.co/sitemap-index.xml`.
5. Resto del plan off-page en [SEO.md](./SEO.md).

> Nota DNS: el SEO (canonical, sitemap, schema) apunta a **www**. Sirve siempre desde `www.monkeyjobs.co` y redirige el ápex a www con 301.
