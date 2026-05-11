import React from 'react';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Contenido que vende
              </span>
            </div>

            <h1 className="heading-xl mb-6 leading-tight">
              Vende más con contenido visual
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                estratégico
              </span>
            </h1>

            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
              Ayudamos a pymes y emprendedores a crecer en redes sociales con fotografía de productos, reels editados y contenido lifestyle optimizado para vender.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="contacto" className="btn-primary text-center">
                Solicitar Cotización
              </a>
              <a
                href={('#planes')}
                className="btn-secondary text-center"
              >
                Ver Planes →
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">150+</div>
                <div className="text-sm text-muted">Clientes Felices</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">1200+</div>
                <div className="text-sm text-muted">Piezas Creadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-1">240%</div>
                <div className="text-sm text-muted">Aumento Promedio</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 lg:h-96 animate-slide-up">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-6xl">📱</div>
              <div className="absolute inset-0 rounded-2xl border-2 border-white opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
