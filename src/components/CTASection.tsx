import React from 'react';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  dark?: boolean;
}

export default function CTASection({
  title = '¿Listo para crecer tu negocio?',
  subtitle = 'Solicita una consulta gratuita hoy y descubre cómo podemos ayudarte a vender más',
  buttonText = 'Agendar Consulta',
  buttonLink = '/contacto',
  dark = false,
}: CTAProps) {
  return (
    <section
      className={`section-padding ${
        dark
          ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white'
          : 'bg-gradient-to-r from-primary-600 to-accent-500 text-white'
      }`}
    >
      <div className="container-max text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className={`text-lg mb-8 ${dark ? 'text-gray-300' : 'text-primary-100'}`}>
          {subtitle}
        </p>
        <a
          href={buttonLink}
          className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
