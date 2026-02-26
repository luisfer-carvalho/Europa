import React, { useEffect, useState } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
      <a 
        href="https://pay.hotmart.com/F103992260Y?off=ea4kn0mk&checkoutMode=10"
        className="block w-full text-center rounded-lg bg-action-500 py-3 font-bold text-white shadow hover:bg-action-600 active:bg-action-700 animate-pulse-action"
      >
        QUIERO EMPEZAR HOY
      </a>
    </div>
  );
};

export default StickyCTA;