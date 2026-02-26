import React from 'react';
import { DollarSign, Heart, Check, ArrowRight, ShieldCheck } from 'lucide-react';

const Benefits: React.FC = () => {
  const scrollToPremium = () => {
    const element = document.getElementById('oferta-premium');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-50/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Benefit 1: Selling (Primary) */}
          <div className="relative rounded-2xl bg-white p-8 shadow-xl border-t-4 border-action-500">
            <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-action-500 text-white shadow-lg">
              <DollarSign className="h-7 w-7" />
            </div>
            <h3 className="mb-6 mt-4 text-2xl font-bold text-slate-900">
              🎯 ¿Para quién es este kit?
            </h3>
            <ul className="space-y-4">
              {[
                "Para quien quiere generar ingresos desde casa",
                "Recetas saludables con alta demanda actual",
                "Postres que se venden más caro (Premium)",
                "Ingredientes accesibles del supermercado",
                "Ideal para pedidos por WhatsApp e Instagram",
                "Empieza con lo que ya tienes en casa"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-action-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-action-50 p-4 text-sm font-medium text-action-800">
              Muchas personas comienzan vendiendo a amigos, vecinos o familiares — exactamente como en la historia que viste.
            </div>
          </div>

          {/* Benefit 2: Personal (Secondary) */}
          <div className="relative rounded-2xl bg-white p-8 shadow-lg border-t-4 border-rose-400">
            <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-rose-400 text-white shadow-lg">
              <Heart className="h-7 w-7" />
            </div>
            <h3 className="mb-6 mt-4 text-2xl font-bold text-slate-900">
              Y además, para ti y tu familia
            </h3>
            <ul className="space-y-4">
              {[
                "Disfruta postres sin culpa",
                "100% libres de harina de trigo",
                "Opciones aptas para celíacos",
                "Bizcochos suaves, esponjosos y probados",
                "Ahorra dinero preparando en casa"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-rose-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
             <div className="mt-6 rounded-lg bg-rose-50 p-4 text-sm font-medium text-rose-800">
               Incluso si no vendes, mejorar la alimentación de tu familia ya hace que valga la pena la inversión.
            </div>
          </div>

        </div>

        {/* CTA Moved Here */}
        <div className="mt-12 flex flex-col items-center gap-3 md:gap-4">
          <button 
            onClick={scrollToPremium}
            className="group relative inline-flex w-full max-w-sm items-center justify-center overflow-hidden rounded-xl bg-action-500 animate-pulse-action px-6 py-3.5 font-bold text-white transition-all duration-300 hover:bg-action-600 focus:outline-none focus:ring-4 focus:ring-action-400 md:w-auto md:px-8 md:py-4 md:text-xl cursor-pointer"
          >
            <span className="mr-2 drop-shadow-md text-lg md:text-xl">VER EL MÉTODO COMPLETO</span>
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1 drop-shadow-md" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:250%_250%] bg-[position:200%_0] transition-all duration-1000 group-hover:bg-[position:-200%_0]" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <ShieldCheck className="w-3 h-3 text-action-600"/>
            <span>Disponibilidad limitada para hoy.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;