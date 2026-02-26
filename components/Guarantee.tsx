import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="bg-slate-900 py-12 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="flex-shrink-0">
                <ShieldCheck className="h-24 w-24 text-brand-500" />
            </div>
            <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Garantía Incondicional de 7 Días</h3>
                <p className="text-slate-300">
                    Prueba el contenido sin riesgo. Accede, mira las recetas, prueba los postres. 
                    Si sientes que esto no es para ti, envíanos un email y te devolvemos el 100% del dinero.
                    Sin preguntas incómodas.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;