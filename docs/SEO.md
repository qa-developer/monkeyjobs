# Estrategia SEO — MonkeyJobs

Documento vivo de la estrategia SEO del sitio. Cubre lo ya implementado (on-page) y el plan de acción para autoridad y reconocimiento (off-page).

---

## 1. Estado actual — On-page (implementado)

Todo esto ya está en el código y se verifica en cada `npm run build`:

- **Metadata único por página** — title keyword-rich + meta description propia en index, services, about, pricing, contact. 404 con `noindex, follow`.
- **Datos estructurados JSON-LD** (`src/components/common/SiteJsonLd.astro` + por página):
  - `Organization` + `SoftwareCompany` con `knowsAbout` (~50 competencias), `foundingDate`, `numberOfEmployees`, `priceRange`, `currenciesAccepted`, `paymentAccepted`, `contactPoint`, `sameAs`, `geo`.
  - `LocalBusiness` + `ProfessionalService` con dirección Bogotá, `geo`, `openingHoursSpecification`, `areaServed`.
  - `WebSite`, `WebPage` (por página, atado al grafo), `Service` + `OfferCatalog`, `FAQPage` (home + pricing), `BreadcrumbList`, `ContactPage`, `AboutPage`.
- **Open Graph + Twitter** — imagen de marca 1200×630 (`og-monkeyjobs.png`), locale `es_CO`, card `summary_large_image`.
- **Favicons de marca** — `.ico` multi-tamaño (16/32/48), `favicon.svg` (mono), PNG 16/32/96, apple-touch, android-chrome 192/512, manifest PWA.
- **Crawlabilidad** — `sitemap-index.xml` único con priority/changefreq/lastmod por URL; `robots.txt` con allow de assets, throttle a scrapers, opt-out de bots de entrenamiento LLM; 404 excluido.
- **SEO local** — meta `geo.region` (CO-DC), `geo.position`, `ICBM`; coordenadas Bogotá en el schema.
- **Seguridad / confianza** — `_headers` con HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy; `.well-known/security.txt`.
- **Rendimiento (Core Web Vitals)** — salida estática, imágenes WebP vía Sharp, compresión HTML/CSS/JS, hero con `loading=eager` + `fetchpriority=high`, fuente Inter variable con `font-display: swap`.
- **Dominio canónico** — `https://www.monkeyjobs.co` consistente en canonical, sitemap y todo el grafo JSON-LD.

---

## 2. Activación pendiente — requiere credenciales (1 línea cada una)

El código ya está listo; solo falta pegar cada ID en `src/config.yaml`:

| Herramienta | Dónde se obtiene | Dónde se pega |
| --- | --- | --- |
| Google Search Console | https://search.google.com/search-console | `site.googleSiteVerificationId` |
| Bing Webmaster Tools | https://www.bing.com/webmasters | `site.bingSiteVerificationId` |
| Yandex Webmaster | https://webmaster.yandex.com | `site.yandexSiteVerificationId` |
| Google Analytics 4 | https://analytics.google.com (ID `G-XXXXXXX`) | `analytics.vendors.googleAnalytics.id` |

Tras pegar los IDs: `npm run build` y desplegar. Luego, en cada consola, **enviar el sitemap** `https://www.monkeyjobs.co/sitemap-index.xml`.

---

## 3. Identidad de marca — acción crítica

> ⚠️ Los `sameAs` del schema y los enlaces sociales del footer (`src/navigation.ts`) apuntan a perfiles de **noyecode**. Para que Google reconozca a MonkeyJobs como entidad propia (y no la confunda con Noyecode), hay que reemplazarlos por los perfiles reales de MonkeyJobs.

Editar en `src/navigation.ts` (`footerData.socialLinks`) y en `src/components/common/SiteJsonLd.astro` (`organization.sameAs`):

- LinkedIn de MonkeyJobs
- Instagram de MonkeyJobs
- GitHub / YouTube de MonkeyJobs (si existen)
- WhatsApp / teléfono de contacto (verificar que sean los de MonkeyJobs)

---

## 4. Off-page — roadmap de autoridad y reconocimiento

Esto es lo que mueve el "reconocimiento en todo internet" y ocurre fuera del repositorio:

### Inmediato
- [ ] **Google Business Profile** — crear ficha de empresa (Bogotá). Clave para aparecer en Maps y en "desarrollo de software Bogotá". https://business.google.com
- [ ] **Verificar dominio** en Search Console + Bing + Yandex y enviar sitemap.
- [ ] **Perfiles sociales** de marca consistentes (mismo nombre, logo, descripción, enlace al sitio) → refuerzan `sameAs`.

### Autoridad (semanas)
- [ ] **Directorios B2B / reseñas**: Clutch, GoodFirms, DesignRush, directorios de software Colombia. Generan backlinks de alta autoridad + reseñas verificables (habilitarían `AggregateRating` real en el futuro).
- [ ] **LinkedIn**: publicar casos, artículos técnicos; enlazar al sitio.
- [ ] **Menciones / PR**: notas en medios tech locales, podcasts, comunidades (Angular, IA).

### Contenido (continuo)
- [ ] **Blog técnico** — el sistema de blog se removió pero es recuperable. Contenido fresco y útil es el motor de tráfico orgánico de largo plazo. Cada artículo = nueva URL indexable apuntando a long-tail keywords.
- [ ] **Páginas por servicio** — considerar `/services/desarrollo-web`, `/services/apps-moviles`, etc. para capturar búsquedas específicas en lugar de anclas dentro de `/services`.

---

## 5. KPIs a monitorear (tras activar GSC + GA4)

- Impresiones y clics por consulta (Search Console).
- Posición media de keywords objetivo: "desarrollo de software Bogotá", "casa de software Colombia", "desarrollo de apps a la medida", etc.
- Páginas indexadas vs. enviadas (cobertura).
- Core Web Vitals (LCP, INP, CLS) en datos de campo.
- Tráfico orgánico y conversiones del formulario de contacto (GA4).

---

## 6. Validación rápida del on-page

- Rich Results: https://search.google.com/test/rich-results
- Schema: https://validator.schema.org
- Open Graph: https://opengraph.dev
- Twitter Card: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/
