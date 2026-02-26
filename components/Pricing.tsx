import React from 'react';
import { Check, Star, BookOpen } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Elige tu plan de acceso</h2>
        
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 max-w-4xl mx-auto">
            
            {/* Basic Plan */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-slate-500 uppercase tracking-wide">Acceso Básico</h3>
                <div className="mt-4 flex flex-col">
                    <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold tracking-tight text-slate-900">19,90 €</span>
                        <span className="ml-2 text-base font-medium text-slate-500 line-through">59,90 €</span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-slate-500">EUR (Euros) 🇪🇸</p>
                    <p className="text-xs text-slate-400">Pago único</p>
                </div>

                <ul className="mt-8 space-y-4 flex-1">
                    <li className="flex items-center">
                        <Check className="h-5 w-5 text-slate-400 mr-3" />
                        <span className="text-slate-600">E-Book con 40 Recetas</span>
                    </li>
                    <li className="flex items-center">
                        <Check className="h-5 w-5 text-slate-400 mr-3" />
                        <span className="text-slate-600">Recetas paso a paso, fáciles de seguir</span>
                    </li>
                    <li className="flex items-center">
                        <Check className="h-5 w-5 text-slate-400 mr-3" />
                        <span className="text-slate-600">Aprende a tu ritmo, sin horarios</span>
                    </li>
                    <li className="flex items-center">
                        <Check className="h-5 w-5 text-slate-400 mr-3" />
                        <span className="text-slate-600">Acceso Inmediato</span>
                    </li>
                    <li className="flex items-center">
                        <Check className="h-5 w-5 text-slate-400 mr-3" />
                        <span className="text-slate-600">Ideal para consumo personal</span>
                    </li>
                </ul>

                <a 
                  href="https://pay.hotmart.com/M103664752V?checkoutMode=10"
                  className="mt-8 block w-full text-center rounded-xl border-2 border-slate-200 bg-transparent py-3 px-4 font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                    Acceder por 19,90 €
                </a>
            </div>

            {/* Premium Plan */}
            <div id="oferta-premium" className="relative rounded-2xl border-2 border-brand-500 bg-white p-8 shadow-2xl flex flex-col transform md:-translate-y-4 scroll-mt-24">
                <div className="absolute top-0 right-0 -mt-4 mr-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                    Más Vendido en España
                </div>
                
                <h3 className="text-xl font-bold text-brand-600 uppercase tracking-wide">Acceso Premium</h3>
                
                {/* Product Image */}
                <div className="mt-4 flex justify-center">
                    <img 
                        src="https://i.postimg.cc/L54yT3Xn/capa-Postre.jpg" 
                        alt="Kit Premium" 
                        className="w-48 rounded-lg shadow-md object-cover transform hover:scale-105 transition-transform duration-300 border-2 border-brand-100" 
                    />
                </div>

                <div className="mt-4 flex flex-col">
                    <div className="flex items-baseline">
                        <span className="text-5xl font-extrabold tracking-tight text-slate-900">23,90 €</span>
                        <span className="ml-2 text-lg font-medium text-slate-500 line-through">79,90 €</span>
                    </div>
                    <p className="mt-1 text-sm font-bold text-slate-600">EUR (Euros) 🇪🇸</p>
                    <p className="text-xs text-slate-500">Pago único · Ahorras 70%</p>
                </div>

                <div className="mt-6 p-3 bg-brand-50 rounded-lg border border-brand-100">
                    <p className="text-sm font-semibold text-brand-800 flex items-center gap-2">
                        <Star className="w-4 h-4" /> Oferta Completa con Bonos
                    </p>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                    <li className="flex items-center">
                        <Check className="h-5 w-5 text-action-500 mr-3" />
                        <span className="font-bold text-slate-900">Todo lo del plan Básico</span>
                    </li>
                    <li className="flex items-center">
                        <Check className="h-5 w-5 text-action-500 mr-3" />
                        <span className="text-slate-700 font-medium">Incluye todas las recetas + 5 Bonos completos</span>
                    </li>
                    <li className="flex items-center">
                        <Check className="h-5 w-5 text-action-500 mr-3" />
                        <span className="text-slate-900 font-bold">Ideal para Vender y Escalar pedidos</span>
                    </li>
                </ul>

                <a 
                  href="https://pay.hotmart.com/F103992260Y?off=ea4kn0mk&checkoutMode=10"
                  className="mt-8 block w-full text-center rounded-xl bg-action-500 py-4 px-4 font-bold text-white shadow-lg hover:bg-action-600 transition-all animate-pulse-action cursor-pointer text-lg"
                >
                    ACCEDER POR 23,90 €
                </a>
                <p className="text-center mt-3 text-xs text-slate-400">Precio final en Euros 🇪🇸</p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;