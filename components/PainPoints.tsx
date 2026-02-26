import React from 'react';
import { AlertCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
            <AlertCircle className="h-12 w-12 text-brand-500 opacity-80" />
        </div>
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
          ¿Te gustaría generar ingresos desde casa, <br className="hidden md:block"/>pero no sabes qué vender?
        </h2>
        <p className="mb-8 text-xl text-slate-300">
          ¿Sientes que el mercado está saturado o que necesitas mucha experiencia para empezar?
        </p>
        <div className="rounded-xl bg-slate-800 p-8 shadow-inner border border-slate-700">
          <p className="text-lg leading-relaxed">
            La repostería saludable está en auge, pero <span className="text-brand-400 font-bold">la mayoría falla</span> porque empieza con recetas equivocadas, secas, sin sabor o que simplemente no se venden.
          </p>
          <p className="mt-4 text-xl font-bold text-white">
            Aquí es donde entra la diferencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;