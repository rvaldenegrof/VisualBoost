'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
}

interface PortfolioLightboxProps {
  item: PortfolioItem;
  initialIndex?: number;
  onClose: () => void;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -400 : 400, opacity: 0 }),
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const imgUrl = (path: string) => `${base}${path}`;

export default function PortfolioLightbox({ item, initialIndex = 0, onClose }: PortfolioLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? item.images.length - 1 : i - 1));
  }, [item.images.length]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((i) => (i === item.images.length - 1 ? 0 : i + 1));
  }, [item.images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, prev, next]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const total = item.images.length;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95"
      onClick={onClose}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-4 flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 className="text-white font-semibold text-lg leading-tight">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm tabular-nums">
            {currentIndex + 1} / {total}
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Cerrar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image area — click on dark surround closes modal; image/buttons stop propagation */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Prev button */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 z-10 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 rounded-full p-3 transition-all"
          aria-label="Anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Animated image */}
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            src={imgUrl(item.images[currentIndex])}
            alt={`${item.title} - foto ${currentIndex + 1}`}
            className="max-h-[75vh] max-w-[90vw] object-contain select-none"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onClick={(e) => e.stopPropagation()}
            onDragEnd={(_e, info) => {
              if (info.offset.x > 80) prev();
              else if (info.offset.x < -80) next();
            }}
          />
        </AnimatePresence>

        {/* Next button */}
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 z-10 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 rounded-full p-3 transition-all"
          aria-label="Siguiente"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dot navigation */}
      <div
        className="flex justify-center gap-2 py-5 flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        {item.images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`rounded-full transition-all duration-200 ${
              i === currentIndex
                ? 'bg-white w-5 h-2'
                : 'bg-white/30 hover:bg-white/60 w-2 h-2'
            }`}
            aria-label={`Ir a foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
