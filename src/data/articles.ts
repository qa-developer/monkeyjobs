// Índice de artículos / insights de MonkeyJobs.
// Sistema ligero (sin Content Collections) — cada artículo tiene su página
// en src/pages/blog/[slug].astro con el cuerpo completo, y aquí vive solo
// la metadata para el listado, el sitemap y el schema BlogPosting.

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string; // ISO YYYY-MM-DD
  dateModified?: string;
  readingMinutes: number;
  tags: string[];
  image: { src: string; alt: string };
}

export const articles: Article[] = [
  {
    slug: 'software-a-la-medida-vs-enlatado',
    title: '¿Software a la medida o solución enlatada? Cómo decidir para tu empresa',
    description:
      'Guía práctica para decidir entre desarrollo de software a la medida y soluciones enlatadas (SaaS/off-the-shelf): costos, tiempos, escalabilidad y cuándo conviene cada uno.',
    excerpt:
      'Comprar una solución lista o construir software a la medida no es una cuestión de moda, sino de encaje con tu operación. Esta guía te da los criterios para decidir sin arrepentirte.',
    datePublished: '2026-06-04',
    readingMinutes: 6,
    tags: ['Desarrollo a la medida', 'Estrategia', 'Software empresarial'],
    image: {
      src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Equipo evaluando software a la medida frente a soluciones enlatadas',
    },
  },
  {
    slug: 'desarrollo-nativo-vs-cross-platform',
    title: 'Desarrollo nativo vs. cross-platform: cómo elegir para tu app móvil',
    description:
      'iOS/Android nativo, Flutter o React Native: diferencias reales en rendimiento, costo, time-to-market y mantenimiento. Guía para elegir el enfoque correcto para tu app.',
    excerpt:
      'Nativo, Flutter o React Native: la decisión define el costo, la velocidad y la experiencia de tu app por años. Te damos los criterios prácticos para no equivocarte.',
    datePublished: '2026-06-04',
    readingMinutes: 7,
    tags: ['Apps móviles', 'Flutter', 'Estrategia'],
    image: {
      src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Desarrollo de aplicaciones móviles nativas y cross-platform',
    },
  },
  {
    slug: 'que-es-un-agente-de-ia-empresa',
    title: 'Qué es un agente de IA y cómo puede ayudar a tu empresa',
    description:
      'Explicación clara de qué es un agente de inteligencia artificial, en qué se diferencia de un chatbot, casos de uso reales en empresas y cómo empezar sin riesgos.',
    excerpt:
      'Un agente de IA no es un chatbot con esteroides: ejecuta tareas reales sobre tus sistemas. Te explicamos qué son, para qué sirven y cómo empezar con cabeza.',
    datePublished: '2026-06-04',
    readingMinutes: 7,
    tags: ['Inteligencia Artificial', 'Agentes', 'Automatización'],
    image: {
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Agente de inteligencia artificial automatizando procesos empresariales',
    },
  },
];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
