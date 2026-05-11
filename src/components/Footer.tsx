import React from 'react';

const basePath = import.meta.env.BASE_URL || '/';
const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;

const anchorLink = (hash: string) => `${normalizedBasePath}${hash}`;
const pageLink = (path: string) => `${normalizedBasePath}${path.replace(/^\//, '')}`;

const footerLinks = {
  product: [
    { label: 'Servicios', href:anchorLink('#servicios') },
    { label: 'Planes', href: anchorLink('#planes') },
    { label: 'Portafolio', href: ('portafolio') },
  ],
  company: [
    { label: 'Quiénes Somos', href: pageLink('quienes-somos') },
    { label: 'Blog', href: pageLink('blog') },
    { label: 'Contacto', href: pageLink('contacto')},
  ],
  legal: [
    { label: 'Privacidad', href: pageLink('privacidad') },
    { label: 'Términos', href: pageLink('terminos') },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: '📷' },
    { label: 'WhatsApp', href: 'https://wa.me', icon: '💬' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <span className="font-bold text-lg">VisualBoost</span>
              </div>
              <p className="text-gray-400 text-sm">
                Contenido estratégico que vende.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Producto</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Empresa</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Redes</h4>
              <div className="flex gap-3">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <p>&copy; {currentYear} VisualBoost. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <a href="/privacidad" className="hover:text-white transition-colors">
                  Privacidad
                </a>
                <a href="/terminos" className="hover:text-white transition-colors">
                  Términos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
