import React from 'react';
import { BONUSES } from '../constants';
import { Gift } from 'lucide-react';

const Bonuses: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-8">
            <Gift className="w-6 h-6 text-brand-600" />
            <h2 className="text-2xl font-bold text-center text-slate-900">Bonos incluidos GRATIS solo por hoy</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BONUSES.map((bonus, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="mb-4 p-3 bg-brand-50 rounded-full">
                {bonus.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">{bonus.title}</h4>
              <p className="text-sm text-slate-600">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;