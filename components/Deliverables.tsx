import React from 'react';
import { Star, Book } from 'lucide-react';

const Deliverables: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">📦 Esto es lo que recibes hoy:</h2>
          <p className="mt-2 text-slate-600">Un kit completo diseñado para tu éxito.</p>
        </div>

        <div className="space-y-6">
          {/* Premium Module */}
          <div className="flex flex-col md:flex-row gap-6 rounded-2xl border-2 border-brand-200 bg-brand-50 p-6 md:items-center">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-white shadow-md">
              <Star className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">MÓDULO PREMIUM – Recetas Estrella del Video</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700">
                <li className="flex items-center gap-2">🔹 Cheesecake New York saludable</li>
                <li className="flex items-center gap-2">🔹 Brookie (Brownie + Cookie)</li>
                <li className="flex items-center gap-2">🔹 Cinnamon Cake (Torta de Canela)</li>
                <li className="flex items-center gap-2">🔹 Bizcocho de Limón con Frambuesa</li>
              </ul>
            </div>
          </div>

          {/* Ebook Base */}
          <div className="flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:items-center shadow-sm">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
              <Book className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">E-BOOK BASE – 40 Tortas Caseras Esenciales</h3>
              <p className="text-slate-600 mb-3 text-sm">Banana caramelizada, Chocolate intenso, Coco con piña, Maíz tradicional y más.</p>
              <span className="inline-block rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                Formato PDF · Acceso inmediato
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;