'use client';

import React, { useState } from 'react';
import PortfolioLightbox from './PortfolioLightbox';

interface Portfolio {
  id: number;
  category: string;
  title: string;
  description: string;
  images: string[];
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

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const imgUrl = (path: string) => `${base}${path}`;

export default function PortfolioGallery({ items, categories }: PortfolioGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<Portfolio | null>(null);

  const filteredItems =
    selectedCategory === 'all' ? items : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Nuestro Portafolio</h2>
          <p className="text-muted text-lg">
            Explora nuestros trabajos — haz clic en cualquier proyecto para ver la galería completa
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
              onClick={() => setActiveLightbox(item)}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Cover image */}
              <div className="relative overflow-hidden bg-gray-100 h-64">
                <img
                  src={imgUrl(item.images[0])}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Photo count badge */}
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {item.images.length} fotos
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    Ver galería →
                  </span>
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

      {/* Lightbox */}
      {activeLightbox && (
        <PortfolioLightbox
          item={activeLightbox}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </section>
  );
}
