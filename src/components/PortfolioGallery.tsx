'use client';

import React, { useState } from 'react';

interface Portfolio {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface Category {
  id: string;
  name: string;
  description: string;
}

interface PortfolioGalleryProps {
  items: Portfolio[];
  categories: Category[];
}

export default function PortfolioGallery({ items, categories }: PortfolioGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems =
    selectedCategory === 'all' ? items : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Nuestro Portafolio</h2>
          <p className="text-muted text-lg">
            Casos de éxito de clientes que han crecido significativamente con nuestro contenido
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === 'all'
                ? 'btn-primary'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category.id
                  ? 'btn-primary'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100 h-64">
                <div className="w-full h-full bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-6xl">📸</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-muted text-sm mb-4">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted mb-6 text-lg">
            ¿Quieres que tu negocio sea el próximo caso de éxito?
          </p>
          <a href="/contacto" className="btn-primary">
            Contáctanos Hoy
          </a>
        </div>
      </div>
    </section>
  );
}
