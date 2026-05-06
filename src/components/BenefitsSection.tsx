import React from 'react';

const benefits = [
  {
    icon: '⚡',
    title: 'Entregas en 48-72 hrs',
    description: 'Contenido profesional listo para publicar en máximo 3 días',
  },
  {
    icon: '💰',
    title: 'Precios Accesibles',
    description: 'Planes desde $120.000 sin cargos ocultos',
  },
  {
    icon: '🎯',
    title: 'Enfocado en Ventas',
    description: 'Cada pieza está diseñada para convertir, no solo para verse bien',
  },
  {
    icon: '📞',
    title: 'Soporte Dedicado',
    description: 'Equipo disponible por WhatsApp para resolver dudas rápidamente',
  },
  {
    icon: '🔄',
    title: 'Sin Contratos Largos',
    description: 'Mes a mes, cambia o cancela en cualquier momento',
  },
  {
    icon: '✨',
    title: 'Calidad Premium',
    description: 'Profesionales con años de experiencia en marketing visual',
  },
];

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">¿Por qué elegir VisualBoost?</h2>
          <p className="text-muted text-lg">
            Somos la mejor opción para crecer tu negocio en redes sociales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary-300 transition-all duration-300"
            >
              <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
