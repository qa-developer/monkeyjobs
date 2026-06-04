import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Desarrollo web',
          href: getPermalink('/services/desarrollo-web'),
        },
        {
          text: 'Apps móviles',
          href: getPermalink('/services/apps-moviles'),
        },
        {
          text: 'Inteligencia Artificial',
          href: getPermalink('/services/inteligencia-artificial'),
        },
        {
          text: 'Sistemas empresariales',
          href: getPermalink('/services/sistemas-empresariales'),
        },
        {
          text: 'Consultoría y arquitectura',
          href: getPermalink('/services/consultoria-arquitectura'),
        },
        {
          text: 'Ver todos los servicios',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'Nosotros',
      href: getPermalink('/about'),
    },
    {
      text: 'Planes',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Cotizar proyecto', href: getPermalink('/contact'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Desarrollo web', href: getPermalink('/services/desarrollo-web') },
        { text: 'Apps móviles', href: getPermalink('/services/apps-moviles') },
        { text: 'Inteligencia Artificial', href: getPermalink('/services/inteligencia-artificial') },
        { text: 'Sistemas empresariales', href: getPermalink('/services/sistemas-empresariales') },
        { text: 'Consultoría', href: getPermalink('/services/consultoria-arquitectura') },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre nosotros', href: getPermalink('/about') },
        { text: 'Planes y precios', href: getPermalink('/pricing') },
        { text: 'Contacto', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Servicios', href: getPermalink('/services') },
        { text: 'Planes y precios', href: getPermalink('/pricing') },
        { text: 'Preguntas frecuentes', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Términos y condiciones', href: getPermalink('/terms') },
        { text: 'Política de privacidad', href: getPermalink('/privacy') },
        { text: 'Aviso legal', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/noyecode' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/noyecode' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCew_c8BymxCRLOx8vOQbqhg' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/573013859952' },
  ],
  footNote: `
    © ${new Date().getFullYear()} <strong>MonkeyJobs S.A.S.</strong> · Bogotá, Colombia · Todos los derechos reservados.
  `,
};
