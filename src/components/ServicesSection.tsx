import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefits: string[];
}

interface ServicesProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesProps) {
  return (
    <section id="servicios" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Servicios Especializados</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de contenido visual diseñadas para maximizar tus ventas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              icon={service.icon}
              benefits={service.benefits}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted mb-6">
            ¿Necesitas una solución personalizada? Contáctanos para una consulta gratuita
          </p>
          <a href="/contacto" className="btn-primary">
            Agendar Consulta Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
