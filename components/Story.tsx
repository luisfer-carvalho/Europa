import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

const RESULT_IMAGES = [
  "https://i.postimg.cc/JnX3r17Z/ana.webp",
  "https://i.postimg.cc/nLjB2HDw/celeste.webp",
  "https://i.postimg.cc/Hx0Jvjs8/ana-luiza.webp",
  "https://i.postimg.cc/DfJfzSKd/salete.webp"
];

const Story: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-white py-12 md:py-20 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-block rounded-lg bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
              Historia Real
            </div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Viste una historia real.
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Una mujer común que empezó horneando en la mitad de su casa, con recursos limitados, y en pocos meses la demanda explotó.
              </p>
              <p className="font-semibold text-slate-800 border-l-4 border-brand-500 pl-4">
                No fue suerte. Fue entender qué recetas vender, cómo hacerlas bien y por dónde empezar.
              </p>
              <p>
                Miles de personas quieren entrar en este mercado, pero se pierden porque nadie les muestra el camino correcto desde el inicio.
              </p>
              <p>
                Este kit existe para acortar ese camino y darte las herramientas exactas que funcionan hoy.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-8 mb-6">
                💬 Resultados reales de personas comunes
              </h3>

              {/* CARRUSEL DE RESULTADOS */}
              <div className="relative w-full">
                <style>{`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                  .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}</style>
                
                {/* Contenedor Scroll */}
                <div 
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="hide-scrollbar flex w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-4"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {RESULT_IMAGES.map((src, idx) => (
                    <div 
                      key={idx} 
                      className="min-w-full flex-shrink-0 snap-center flex justify-center items-start"
                    >
                      <img 
                        src={src} 
                        alt={`Resultado ${idx + 1}`}
                        onClick={() => setSelectedImage(src)}
                        className="max-h-[500px] w-auto max-w-full object-contain rounded-xl shadow-sm cursor-zoom-in hover:opacity-95 transition-opacity"
                      />
                    </div>
                  ))}
                </div>

                {/* Indicadores (Dots) */}
                <div className="flex justify-center gap-2 mt-2">
                  {RESULT_IMAGES.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'bg-slate-800 w-6' : 'bg-slate-300 w-2.5'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* LIGHTBOX (Zoom) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Zoom Resultado" 
            className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Story;