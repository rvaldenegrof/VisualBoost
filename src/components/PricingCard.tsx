import React from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  period,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl border transition-transform duration-300 hover:shadow-xl ${
        popular
          ? 'border-primary-600 bg-gradient-to-b from-primary-50 to-white shadow-lg scale-105'
          : 'border-gray-200 bg-white hover:border-primary-300'
      }`}
    >
      {popular && (
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-2 text-center text-sm font-bold rounded-t-2xl">
          ⭐ MÁS POPULAR
        </div>
      )}

      <div className="p-8">
        <h3 className="heading-sm mb-2">{name}</h3>
        <p className="text-muted text-sm mb-6">{description}</p>

        <div className="mb-6">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-bold text-gray-900">{price}</span>
            <span className="text-gray-600">/ {period}</span>
          </div>
        </div>

        <button
          className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors duration-200 ${
            popular
              ? 'btn-primary'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Solicitar Plan
        </button>

        <div className="space-y-3">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Incluye
          </p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
