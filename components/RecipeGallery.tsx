import React from 'react';
import { Camera, ArrowRight, ShieldCheck } from 'lucide-react';

const RECIPES = [
  {
    title: "Torta de Chocolate Irresistible",
    image: "https://i.postimg.cc/xTXC2vrV/bolo-chocolate.jpg",
    description: "Bizcocho sin gluten, súper húmedo, con relleno generoso y una cobertura de chocolate que se deshace en la boca."
  },
  {
    title: "Brownie Premium con Helado",
    image: "https://i.postimg.cc/tJZHLzs7/brounie-sorvete.jpg",
    description: "La textura perfecta: crocante por fuera y suave por dentro. El postre ideal para servir en cenas o vender como experiencia gourmet."
  },
  {
    title: "Cheesecake de Frutos Rojos",
    image: "https://i.postimg.cc/qgVWWHfS/cheescake-frutas-vermelhas.jpg",
    description: "Alto, cremoso y 100% sin gluten. Con una cobertura fresca que equilibra el dulzor. Uno de los más vendidos."
  },
  {
    title: "Torta Decorada con Relleno",
    image: "https://i.postimg.cc/MZVwb9JC/bolo-confeitado-2.jpg",
    description: "Aprende a montar tortas estructuradas y elegantes, con cortes perfectos que muestran capas de puro sabor."
  },
  {
    title: "Brownie en Vasito (Best-Seller)",
    image: "https://i.postimg.cc/T2V8Whns/brownie-copo.jpg",
    description: "El formato rey de las ventas rápidas por WhatsApp e Instagram. Fácil de transportar, hermoso y delicioso."
  }
];

const RecipeGallery: React.FC = () => {
  const scrollToPremium = () => {
    const element = document.getElementById('oferta-premium');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="bg-white pb-16 pt-0 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="flex justify-center mb-8 -mt-6 md:-mt-10 relative z-10">
            <img 
              src="https://i.postimg.cc/hvGsYhfx/Chat-GPT-Image-26-de-fev-de-2026-00-44-20-(2).jpg" 
              alt="Deliciosos Postres" 
              className="rounded-xl shadow-lg w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <p className="text-xl md:text-2xl font-medium text-slate-800 mb-8 px-4 leading-relaxed max-w-2xl mx-auto">
            Debido al gran éxito de esta tendencia en toda <span className="font-bold text-brand-600">España</span>, hemos liberado el acceso a la guía práctica utilizada por estas mujeres para iniciar sus negocios desde cero.
          </p>

          <div className="flex justify-center mb-12">
            <button 
              onClick={scrollToPremium}
              className="group relative inline-flex w-full max-w-sm items-center justify-center overflow-hidden rounded-xl bg-action-500 animate-pulse-action px-6 py-3.5 font-bold text-white transition-all duration-300 hover:bg-action-600 focus:outline-none focus:ring-4 focus:ring-action-400 md:w-auto md:px-8 md:py-4 md:text-xl cursor-pointer"
            >
              <span className="mr-2 drop-shadow-md text-lg md:text-xl">VER EL MÉTODO COMPLETO</span>
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1 drop-shadow-md" />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:250%_250%] bg-[position:200%_0] transition-all duration-1000 group-hover:bg-[position:-200%_0]" />
            </button>
          </div>

          <div className="inline-flex items-center justify-center p-2 bg-brand-50 rounded-full mb-4">
            <Camera className="w-5 h-5 text-brand-600 mr-2" />
            <span className="text-sm font-bold text-brand-800 tracking-wide uppercase">Galería de Sabores</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Algunas de las recetas que aprenderás
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Estas son solo algunas de las recetas que encontrarás dentro del kit. 
            Postres <span className="font-semibold text-brand-600">sin gluten</span>, probados, vendidos y perfectos tanto para consumo personal como para generar ingresos desde casa.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {RECIPES.map((recipe, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900 leading-tight group-hover:text-brand-600 transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {recipe.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
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

export default RecipeGallery;