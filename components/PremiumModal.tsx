import React from 'react';
import { X, Check, Star, ShieldCheck, ArrowRight } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors backdrop-blur-md"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="bg-brand-500 p-6 pt-8 text-center text-white relative overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
            <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white border border-white/30 shadow-sm">
                    <Star className="h-3 w-3 fill-current" /> Oferta Exclusiva 🇪🇸
                </div>
                <h2 className="text-2xl font-extrabold leading-tight shadow-black drop-shadow-sm">
                    Acceso Premium
                </h2>
                <p className="text-brand-50 text-sm mt-1 font-medium opacity-90">
                    Kit de Recetas + Bonos
                </p>

                {/* IMAGEN INSERTADA */}
                <div className="mt-4 flex justify-center">
                    <img 
                        src="https://i.postimg.cc/L54yT3Xn/capa-Postre.jpg" 
                        alt="Portada Kit Premium" 
                        className="w-full max-w-[180px] rounded-lg shadow-2xl border-4 border-white/20 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
             {/* Price */}
             <div className="mb-6 flex flex-col items-center border-b border-slate-100 pb-6">
                <span className="text-sm font-medium text-slate-400 line-through mb-1">Precio Normal: 79,90 €</span>
                <div className="flex items-center gap-2">
                    <span className="text-5xl font-extrabold text-slate-900 tracking-tight">23,90 €</span>
                </div>
                <span className="text-sm font-bold text-slate-600 mb-2">EUROS 🇪🇸</span>
                <span className="mt-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 animate-pulse">
                    🔥 Ahorras 70% Hoy
                </span>
             </div>

             {/* Benefits */}
             <div className="space-y-4 mb-8">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 text-center">Todo lo que incluye:</p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-sm font-medium text-slate-800">40+ Recetas de Tortas (E-book PDF)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-sm font-medium text-slate-800">Recetas de Cheesecake & Brookie</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-sm text-slate-600">Bono: Guía de Ventas (Instagram/WhatsApp)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-sm text-slate-600">Bono: Calculadora de Costos y Precios</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-sm text-slate-600">Bono: Pack Postres en Vasito</span>
                    </li>
                </ul>
             </div>
        </div>

        {/* Footer CTA - Always visible or at bottom */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex-shrink-0">
             <a 
                href="https://pay.hotmart.com/F103992260Y?off=ea4kn0mk&checkoutMode=10"
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-action-500 px-6 py-4 font-bold text-white shadow-lg transition-all hover:bg-action-600 hover:shadow-xl hover:scale-[1.02] active:scale-95"
            >
                <span className="mr-2">ACCEDER POR 23,90 €</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="mt-3 flex justify-center items-center gap-2 text-xs text-slate-400 font-medium">
                <ShieldCheck className="w-3 h-3" /> Compra 100% Segura y Garantizada
            </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumModal;