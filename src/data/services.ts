// Catálogo de servicios de MonkeyJobs.
// El contenido deriva de las capacidades y el stack que el sitio ya declara
// (home, /services, /about). Alimenta tanto las páginas individuales de
// servicio (/services/[slug]) como el JSON-LD Service + FAQPage.

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceData {
  slug: string;
  navLabel: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  capabilities: ServiceItem[];
  technologies: string[];
  faqs: ServiceFaq[];
  image: { src: string; alt: string };
}

export const services: ServiceData[] = [
  {
    slug: 'desarrollo-web',
    navLabel: 'Desarrollo web',
    name: 'Desarrollo web a la medida',
    metaTitle: 'Desarrollo web a la medida en Bogotá',
    metaDescription:
      'Sitios y aplicaciones web con Angular, React, Astro y Next. SSR, SEO técnico, performance y diseño responsive. Desarrollo web a la medida con MonkeyJobs.',
    tagline: 'Desarrollo web',
    heroTitle: 'Desarrollo web a la medida',
    heroSubtitle:
      'Construimos sitios y aplicaciones web rápidas, accesibles y listas para escalar. Del landing al producto SaaS, con SSR, SEO técnico y rendimiento como estándar.',
    intro:
      'Diseñamos y desarrollamos plataformas web modernas que cargan rápido, posicionan en buscadores y se ven impecables en cualquier dispositivo. Cada proyecto se construye sobre fundamentos sólidos: arquitectura escalable, código revisado y métricas desde el día uno.',
    capabilities: [
      {
        title: 'Aplicaciones web y SPA',
        description:
          'Single Page Apps y portales complejos con Angular, React y Vue, con estado predecible y componentes accesibles.',
        icon: 'tabler:world-code',
      },
      {
        title: 'SSR y SEO técnico',
        description:
          'Renderizado en servidor con Astro y Next para tiempos de carga bajos, Core Web Vitals sanos y mejor indexación.',
        icon: 'tabler:seo',
      },
      {
        title: 'Diseño responsive y accesible',
        description:
          'Experiencia consistente de móvil a 4K, con buenas prácticas de accesibilidad y diseño alineado a tu marca.',
        icon: 'tabler:devices',
      },
      {
        title: 'Performance medible',
        description:
          'Optimización de assets, imágenes y bundles. Analítica y eventos desde el primer release para iterar con datos.',
        icon: 'tabler:gauge',
      },
    ],
    technologies: ['Angular', 'React', 'Astro', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    faqs: [
      {
        q: '¿Qué tecnologías usan para desarrollo web?',
        a: 'Elegimos la herramienta correcta para cada proyecto: Angular, React, Astro, Next.js o Vue en el frontend, con Node, .NET o Python en el backend. Priorizamos performance, SEO técnico y escalabilidad.',
      },
      {
        q: '¿El sitio quedará optimizado para SEO?',
        a: 'Sí. Trabajamos SEO técnico desde la arquitectura: SSR cuando aplica, metadatos, datos estructurados, sitemap, rendimiento y Core Web Vitals sanos.',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Desarrollo de aplicaciones web a la medida con Angular, React y Astro — MonkeyJobs',
    },
  },
  {
    slug: 'apps-moviles',
    navLabel: 'Apps móviles',
    name: 'Desarrollo de apps móviles',
    metaTitle: 'Desarrollo de apps móviles iOS y Android',
    metaDescription:
      'Apps móviles nativas y cross-platform: iOS, Android, Flutter y React Native. Publicación en stores, push notifications, analytics y deep linking. MonkeyJobs.',
    tagline: 'Apps móviles',
    heroTitle: 'Apps móviles nativas y cross-platform',
    heroSubtitle:
      'Llevamos tu producto al bolsillo de tus usuarios: iOS y Android nativo, Flutter y React Native, store-ready e integrados con tus sistemas.',
    intro:
      'Construimos aplicaciones móviles pulidas y listas para publicar, integradas con tus servicios cloud y tus sistemas de negocio. Desde el prototipo hasta el despliegue en las tiendas, acompañamos todo el ciclo.',
    capabilities: [
      {
        title: 'Nativo iOS y Android',
        description: 'Apps nativas cuando el rendimiento y la experiencia lo exigen, con acceso completo a las APIs del dispositivo.',
        icon: 'tabler:device-mobile',
      },
      {
        title: 'Cross-platform',
        description: 'Flutter y React Native para llegar a iOS y Android desde una base de código, sin sacrificar calidad.',
        icon: 'tabler:devices-2',
      },
      {
        title: 'Publicación en stores',
        description: 'Preparamos y publicamos en App Store y Google Play, con el proceso de revisión y los assets resueltos.',
        icon: 'tabler:brand-google-play',
      },
      {
        title: 'Push, analytics y deep linking',
        description: 'Notificaciones push, analítica de uso y deep linking integrados para activar y retener usuarios.',
        icon: 'tabler:bell',
      },
    ],
    technologies: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Firebase', 'REST APIs'],
    faqs: [
      {
        q: '¿Conviene nativo o cross-platform?',
        a: 'Depende del proyecto. Nativo (iOS/Android) maximiza rendimiento y acceso al hardware; Flutter o React Native aceleran el time-to-market con una base compartida. En el descubrimiento te recomendamos el camino correcto.',
      },
      {
        q: '¿Se encargan de publicar la app en las tiendas?',
        a: 'Sí. Gestionamos el build de producción, los assets y el proceso de revisión en App Store y Google Play hasta dejar la app publicada.',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Desarrollo de aplicaciones móviles iOS, Android y Flutter — MonkeyJobs',
    },
  },
  {
    slug: 'inteligencia-artificial',
    navLabel: 'Inteligencia Artificial',
    name: 'Inteligencia Artificial y agentes',
    metaTitle: 'Inteligencia Artificial y agentes para empresas',
    metaDescription:
      'Integración de LLMs, agentes autónomos, RAG y automatización de procesos con IA. Casos reales en producción para tu operación. MonkeyJobs, Bogotá.',
    tagline: 'Inteligencia Artificial',
    heroTitle: 'Inteligencia Artificial y agentes',
    heroSubtitle:
      'Integramos modelos generativos, agentes autónomos y pipelines de ML en tus flujos críticos de negocio, con criterio de ingeniería y casos reales en producción.',
    intro:
      'La IA solo aporta valor cuando se integra bien. Conectamos modelos de lenguaje, agentes y automatización a tus procesos reales, midiendo resultados y cuidando seguridad, costos y mantenibilidad.',
    capabilities: [
      {
        title: 'Integración de LLMs',
        description: 'Conectamos modelos generativos a tus productos y procesos, con prompts, contexto y guardrails bien diseñados.',
        icon: 'tabler:robot',
      },
      {
        title: 'Agentes autónomos',
        description: 'Agentes que ejecutan tareas multi-paso sobre tus herramientas y datos, con control y trazabilidad.',
        icon: 'tabler:cpu',
      },
      {
        title: 'RAG y embeddings',
        description: 'Búsqueda semántica y respuestas fundamentadas en tu propia base de conocimiento mediante RAG.',
        icon: 'tabler:database-search',
      },
      {
        title: 'Automatización de procesos',
        description: 'Identificamos tareas repetitivas y las automatizamos con IA para liberar tiempo de tu equipo.',
        icon: 'tabler:wand',
      },
    ],
    technologies: ['OpenAI API', 'LLMs', 'RAG', 'Embeddings', 'Python', 'Machine Learning'],
    faqs: [
      {
        q: '¿Qué casos de IA pueden implementar?',
        a: 'Desde asistentes y agentes conectados a tus sistemas, hasta búsqueda semántica (RAG) sobre tu documentación y automatización de procesos con modelos generativos. Partimos de un caso de uso medible.',
      },
      {
        q: '¿Cómo manejan la seguridad y los costos de la IA?',
        a: 'Diseñamos con guardrails, control de contexto y monitoreo de uso para mantener la respuesta segura y los costos de tokens bajo control.',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Integración de inteligencia artificial, LLMs y agentes autónomos — MonkeyJobs',
    },
  },
  {
    slug: 'sistemas-empresariales',
    navLabel: 'Sistemas empresariales',
    name: 'Sistemas empresariales e integraciones',
    metaTitle: 'Sistemas empresariales e integraciones a la medida',
    metaDescription:
      'ERPs y CRMs a la medida, APIs, microservicios e integraciones con sistemas legacy. Middleware confiable para tu operación. MonkeyJobs, Bogotá.',
    tagline: 'Sistemas empresariales',
    heroTitle: 'Sistemas empresariales e integraciones',
    heroSubtitle:
      'Conectamos lo que tu operación necesita: ERPs y CRMs a la medida, APIs e integraciones con tus sistemas legacy, sin parches frágiles.',
    intro:
      'Tu operación depende de que los sistemas conversen entre sí. Diseñamos y construimos software empresarial e integraciones robustas que automatizan procesos y eliminan el trabajo manual propenso a errores.',
    capabilities: [
      {
        title: 'ERPs y CRMs a la medida',
        description: 'Sistemas de gestión adaptados a tus procesos reales, no al revés. Tú defines cómo opera tu negocio.',
        icon: 'tabler:building-warehouse',
      },
      {
        title: 'APIs REST y GraphQL',
        description: 'APIs bien diseñadas y documentadas para exponer e integrar tus servicios con seguridad.',
        icon: 'tabler:api',
      },
      {
        title: 'Integración con legacy',
        description: 'Conectamos sistemas existentes y de terceros con middleware confiable, sin reescribir todo de cero.',
        icon: 'tabler:plug-connected',
      },
      {
        title: 'Arquitecturas escalables',
        description: 'Microservicios y arquitecturas event-driven cuando el caso lo amerita, con observabilidad incluida.',
        icon: 'tabler:server-bolt',
      },
    ],
    technologies: ['.NET', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
    faqs: [
      {
        q: '¿Pueden integrarse con sistemas que ya tenemos?',
        a: 'Sí. Nos especializamos en integrar ERPs, CRMs, pasarelas de pago, APIs gubernamentales y sistemas legacy mediante APIs y middleware confiable, sin parches frágiles.',
      },
      {
        q: '¿Construyen ERPs y CRMs desde cero?',
        a: 'Cuando las soluciones del mercado no encajan, sí. Diseñamos sistemas a la medida de tus procesos, con arquitectura escalable y mantenible.',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Sistemas empresariales, ERPs e integraciones a la medida — MonkeyJobs',
    },
  },
  {
    slug: 'consultoria-arquitectura',
    navLabel: 'Consultoría y arquitectura',
    name: 'Consultoría y arquitectura de software',
    metaTitle: 'Consultoría y arquitectura de software',
    metaDescription:
      'Auditoría técnica, definición de roadmap, arquitectura de software y acompañamiento estratégico para escalar tu producto o equipo. MonkeyJobs.',
    tagline: 'Consultoría y arquitectura',
    heroTitle: 'Consultoría y arquitectura de software',
    heroSubtitle:
      'Auditoría técnica, definición de roadmap y acompañamiento estratégico para escalar tu producto con criterio de ingeniería.',
    intro:
      'A veces no necesitas más código, sino mejores decisiones. Revisamos tu arquitectura, tu código y tu proceso, y trazamos contigo un roadmap claro para crecer sin acumular deuda técnica.',
    capabilities: [
      {
        title: 'Auditoría técnica',
        description: 'Revisión de código, arquitectura y seguridad para detectar riesgos y oportunidades de mejora.',
        icon: 'tabler:report-search',
      },
      {
        title: 'Definición de roadmap',
        description: 'Priorizamos contigo qué construir y en qué orden, alineando lo técnico con los objetivos de negocio.',
        icon: 'tabler:map-2',
      },
      {
        title: 'Arquitectura escalable',
        description: 'Diseñamos para crecer: SSR, microfrontends, microservicios o monolitos modulares según el caso.',
        icon: 'tabler:sitemap',
      },
      {
        title: 'Acompañamiento a tu equipo',
        description: 'Mentoría, code review y buenas prácticas para subir el nivel técnico de tu equipo interno.',
        icon: 'tabler:users-group',
      },
    ],
    technologies: ['Auditoría de código', 'Arquitectura', 'CI/CD', 'Testing', 'Code Review', 'DevOps'],
    faqs: [
      {
        q: '¿En qué consiste una auditoría técnica?',
        a: 'Revisamos tu código, arquitectura, seguridad y procesos, y entregamos un diagnóstico con hallazgos priorizados y un plan de acción concreto.',
      },
      {
        q: '¿Trabajan con nuestro equipo interno?',
        a: 'Sí. Actuamos como extensión de tu equipo: mentoría, code review y definición de arquitectura, adaptándonos a tu proceso y stack.',
      },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Consultoría y arquitectura de software, auditoría técnica y roadmap — MonkeyJobs',
    },
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
