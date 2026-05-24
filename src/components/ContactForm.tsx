'use client';

import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT as string | undefined;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!FORMSPREE_ENDPOINT) {
      setError('El formulario aún no está configurado. Contáctanos directamente por email o WhatsApp.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          telefono: formData.phone,
          negocio: formData.business,
          mensaje: formData.message,
        }),
      });

      if (!res.ok) {
        throw new Error('Error al enviar');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', business: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Hubo un problema al enviar. Por favor contáctanos directamente por email o WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="heading-lg mb-4">Hablemos de tu proyecto</h2>
            <p className="text-muted mb-8">
              Cuéntanos sobre tu negocio y te enviaremos una cotización personalizada en 24 horas.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ ¡Mensaje enviado! Nos pondremos en contacto en menos de 24 horas.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    WhatsApp / Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="+56 9 XXXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-gray-900 mb-2">
                  Tipo de negocio
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Ej: Tienda de accesorios, Café, Studio de yoga"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="¿Qué tipo de contenido necesitas? ¿Cuál es tu objetivo? ¿Tienes presupuesto estimado?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar Consulta'}
              </button>

              <p className="text-xs text-muted text-center">
                Respetamos tu privacidad. Solo usaremos tu información para contactarte.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:contacto@visualboost.com"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    contacto@visualboost.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/56912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    +56 9 1234 5678
                  </a>
                  <p className="text-sm text-muted mt-1">Respuesta inmediata en horario laboral</p>
                </div>
              </div>
            </div>

            {/* Teléfono */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                  <a
                    href="tel:+56212345678"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    +56 2 1234 5678
                  </a>
                  <p className="text-sm text-muted mt-1">Lunes a viernes, 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 border border-primary-200">
              <h3 className="font-bold text-lg mb-4">Tiempos de Respuesta</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">⚡</span>
                  <span>WhatsApp: 15-30 minutos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">⚡</span>
                  <span>Email: 2-4 horas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">⚡</span>
                  <span>Cotización personalizada: 24 horas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
