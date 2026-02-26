import React from 'react';
import { Mail, Smartphone, ShieldCheck, ChefHat } from 'lucide-react';

const QuickSummary: React.FC = () => {
  const features = [
    {
      icon: <Mail className="h-6 w-6 text-brand-600" />,
      title: "Acceso Inmediato",
      desc: "Te llega al email ahora mismo"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-brand-600" />,
      title: "100% Digital",
      desc: "Míralo en tu celular o PC"
    },
    {
      icon: <ChefHat className="h-6 w-6 text-brand-600" />,
      title: "Nivel Principiante",
      desc: "Explicado paso a paso"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-600" />,
      title: "Compra Segura",
      desc: "Garantía total de 7 días"
    }
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200 py-6 md:py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          Lo que obtienes al inscribirte hoy:
        </p>
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-4">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-2 rounded-full bg-brand-100 p-2 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-snug max-w-[120px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickSummary;