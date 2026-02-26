import React from 'react';
import { Check, ShieldCheck, TrendingUp, Smartphone } from 'lucide-react';

const ProductBreakdown: React.FC = () => {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-10 overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Title & Image */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            📦 Esto es lo que recibes al acceder hoy
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Un kit práctico, claro y probado para empezar desde cero, ya sea para vender desde casa o disfrutar postres saludables sin culpa.
          </p>
        </div>

        {/* List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
          {/* Main List */}
          <ul className="space-y-4 mb-6">
            {[
              "Más de 40 recetas de tortas sin gluten, explicadas paso a paso",
              "Más de 10 recetas de cheesecakes saludables, cremosos y premium",
              "Recetas estrella que viste en el video (Brookie, Cheesecake, tortas más vendidas)",
              "Guía práctica en PDF, fácil de seguir desde casa"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 rounded-full bg-green-100 p-1">
                  <Check className="h-4 w-4 text-green-600 font-bold" />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Text */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
            <Smartphone className="w-4 h-4" />
            Acceso inmediato · Sin mensualidades
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a 
            href="https://pay.hotmart.com/F103992260Y?off=ea4kn0mk&checkoutMode=10"
            className="block w-full text-center max-w-sm rounded-xl bg-action-500 py-4 px-6 font-bold text-white shadow-lg transition-all hover:bg-action-600 hover:scale-[1.02] active:scale-95 animate-pulse-action md:text-lg"
          >
            QUIERO ACCEDER AHORA
          </a>
          
          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> Compra Segura</span>
            <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3"/> Acceso Inmediato</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductBreakdown;