// Casos de éxito de MonkeyJobs.
// Los casos están descritos por SECTOR (no por nombre de cliente) para ser
// honestos sin exponer datos confidenciales ni inventar marcas. Cuando el
// equipo tenga autorización de un cliente, reemplazar/añadir con el nombre,
// logo y métricas reales del proyecto.

export interface CaseStudy {
  slug: string;
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  stack: string[];
  outcomes: string[];
  icon: string;
  image: { src: string; alt: string };
}

export const cases: CaseStudy[] = [
  {
    slug: 'fintech-onboarding-digital',
    sector: 'Fintech',
    title: 'Onboarding digital y scoring para una fintech',
    summary:
      'Plataforma de alta de clientes 100% digital con verificación de identidad y scoring, lista para escalar.',
    challenge:
      'El alta de clientes era manual, lenta y propensa a errores, con altos tiempos de aprobación y fricción que disparaba el abandono.',
    solution:
      'Diseñamos un flujo de onboarding digital con captura de documentos, verificación de identidad e integración con servicios de scoring, sobre una arquitectura segura y auditable.',
    stack: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Integraciones KYC'],
    outcomes: [
      'Alta de clientes en minutos en lugar de días',
      'Proceso auditable y conforme a requisitos regulatorios',
      'Base lista para escalar sin reescribir el core',
    ],
    icon: 'tabler:coin',
    image: {
      src: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Onboarding digital y scoring para una fintech — MonkeyJobs',
    },
  },
  {
    slug: 'ecommerce-plataforma-headless',
    sector: 'E-commerce / Retail',
    title: 'Plataforma de e-commerce headless para retail',
    summary:
      'Tienda online rápida y escalable, integrada con inventario, pagos y logística.',
    challenge:
      'Una plataforma enlatada limitaba el crecimiento: lenta en campañas de alto tráfico y difícil de integrar con los sistemas internos.',
    solution:
      'Construimos un e-commerce headless con frontend performante (SSR), integraciones con pasarelas de pago, inventario y couriers, y panel de administración a la medida.',
    stack: ['Astro', 'React', 'Node.js', 'Pasarelas de pago', 'APIs de logística'],
    outcomes: [
      'Carga rápida incluso en picos de campaña',
      'Inventario y pedidos sincronizados en tiempo real',
      'Autonomía del equipo para gestionar catálogo y promociones',
    ],
    icon: 'tabler:shopping-cart',
    image: {
      src: 'https://images.unsplash.com/photo-1556909211-d3b9a47a6c87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Plataforma de e-commerce headless para retail — MonkeyJobs',
    },
  },
  {
    slug: 'salud-telemedicina-citas',
    sector: 'Salud',
    title: 'Plataforma de telemedicina y agendamiento',
    summary:
      'Citas médicas, teleconsulta e integración con historia clínica, con foco en privacidad.',
    challenge:
      'La gestión de citas y la atención remota estaban dispersas en herramientas que no conversaban entre sí, complicando la operación clínica.',
    solution:
      'Unificamos agendamiento, teleconsulta por video e integración con sistemas de historia clínica en una plataforma accesible y segura para pacientes y profesionales.',
    stack: ['Angular', '.NET', 'PostgreSQL', 'WebRTC', 'Integraciones HIS'],
    outcomes: [
      'Agenda y teleconsulta en un solo lugar',
      'Manejo de datos sensibles con controles de privacidad',
      'Experiencia simple para pacientes y personal de salud',
    ],
    icon: 'tabler:vaccine',
    image: {
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Plataforma de telemedicina y agendamiento de citas — MonkeyJobs',
    },
  },
  {
    slug: 'logistica-agente-ia-operaciones',
    sector: 'Logística',
    title: 'Automatización con IA para operaciones logísticas',
    summary:
      'Agente de IA que automatiza tareas repetitivas y da visibilidad de la operación en tiempo real.',
    challenge:
      'El equipo perdía horas en tareas manuales de seguimiento y conciliación, sin una vista única del estado de la operación.',
    solution:
      'Implementamos un agente de IA conectado a los sistemas de la operación, con automatización de procesos y un dashboard operativo en tiempo real, con humano en el loop.',
    stack: ['Python', 'LLMs / Agentes', 'RAG', 'APIs', 'Dashboards'],
    outcomes: [
      'Menos trabajo manual repetitivo',
      'Visibilidad de la operación en un solo dashboard',
      'Decisiones más rápidas con datos al día',
    ],
    icon: 'tabler:truck',
    image: {
      src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      alt: 'Automatización con inteligencia artificial para operaciones logísticas — MonkeyJobs',
    },
  },
];
