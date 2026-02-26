import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const InsideTheGuide: React.FC = () => {
  const images = [
    "https://i.postimg.cc/0NdxH00B/Captura_de_tela_2026_02_07_000920.jpg",
    "https://i.postimg.cc/xdyYF33F/Captura_de_tela_2026_02_06_235719.jpg",
    "https://i.postimg.cc/25FmX77t/Captura_de_tela_2026_02_06_235602.jpg"
  ];

  const features = [
    "Recetas sin gluten y sin azúcar refinada",
    "Postres saludables que sí funcionan y se venden",
    "Preparaciones ideales para diabéticos y público saludable",
    "Recetas paso a paso, fáciles de seguir",
    "Contenido aplicable tanto para consumo personal como para venta"
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📦 ¿Qué vas a recibir en la guía?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Al acceder a la Guía Práctica de Repostería Saludable, encontrarás recetas completas, 
            organizadas y pensadas para funcionar tanto en casa como en emprendimientos de pastelería.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            El material fue creado para personas que buscan resultados reales, con preparaciones 
            fáciles de aplicar, ingredientes accesibles y explicaciones paso a paso.
          </p>
          <p className="mt-4 text-sm text-slate-500 font-medium">
            A continuación, algunos ejemplos de lo que encontrarás dentro del contenido:
          </p>
        </div>

        {/* Grilla de Imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-start">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-xl bg-white shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full relative bg-slate-100">
                <img 
                  src={img} 
                  alt={`Ejemplo de receta ${index + 1}`} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lista de Características */}
        <div className="mx-auto max-w-2xl bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
          <ul className="space-y-4">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default InsideTheGuide;