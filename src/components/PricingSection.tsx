import React from 'react';
import PricingCard from './PricingCard';

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  period: string;
  features: string[];
  popular?: boolean;
}

interface PricingProps {
  plans: Plan[];
}

export default function PricingSection({ plans }: PricingProps) {
  return (
    <section id="planes" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Planes Diseñados para Crecer</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio. Puedes cambiar en cualquier momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              period={plan.period}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center border border-primary-200">
          <h3 className="heading-sm mb-2">¿Necesitas algo personalizado?</h3>
          <p className="text-muted mb-6">
            Podemos adaptar un plan según tus necesidades específicas
          </p>
          <a href="/contacto" className="btn-primary">
            Contactar Equipo de Ventas
          </a>
        </div>
      </div>
    </section>
  );
}
