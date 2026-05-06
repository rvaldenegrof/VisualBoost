import React from 'react';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
  benefits: string[];
}

export default function ServiceCard({ name, description, icon, benefits }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="heading-sm mb-2">{name}</h3>
      <p className="text-muted text-sm mb-4">{description}</p>
      
      <div className="space-y-2">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-primary-600 font-bold text-lg leading-none">+</span>
            <span className="text-gray-700 text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
