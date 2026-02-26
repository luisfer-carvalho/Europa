import React, { useState, useEffect, useRef } from 'react';
import { UserCheck } from 'lucide-react';

const NAMES = ["Ana", "María", "Laura", "Valentina", "Carolina", "Daniela", "Sofia", "Isabella", "Camila", "Mariana"];
const CITIES = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Murcia", "Palma"];
const ACTIONS = [
  { text: "Compró hace", time: "5 min" },
  { text: "Compró hace", time: "14 min" },
  { text: "Compró hace", time: "28 min" },
  { text: "Accedió al pack", time: "hoy" },
  { text: "Empezó", time: "ahora mismo" },
  { text: "Se inscribió hace", time: "2 min" }
];

interface NotificationData {
  name: string;
  city: string;
  action: string;
  time: string;
}

const SocialProofToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<NotificationData | null>(null);
  
  // Ref para guardar el ID del timeout de ocultar y limpiarlo si se desmonta
  const hideTimeoutRef = useRef<number | null>(null);

  const generateNotification = () => {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const city = CITIES[Math.floor(Math.random() * CITIES.length)];
    const actionObj = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
    
    setData({
      name,
      city,
      action: actionObj.text,
      time: actionObj.time
    });
  };

  const showToast = () => {
    generateNotification();
    setIsVisible(true);
    
    // Limpiar timeout anterior si existe
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    
    // Configurar nuevo timeout para ocultar
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  useEffect(() => {
    // Primer disparo
    const initialTimeout = window.setTimeout(() => {
      showToast();
    }, 10000);

    // Intervalo regular
    const interval = setInterval(() => {
      showToast();
    }, 45000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  if (!data) return null;

  return (
    <div 
      className={`
        fixed left-4 z-40 flex w-auto max-w-[70%] items-center gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-lg transition-all duration-700 ease-in-out md:max-w-xs
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}
        bottom-24 md:bottom-8
      `}
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
        <UserCheck className="h-5 w-5" />
      </div>
      
      <div className="flex flex-col text-xs leading-snug">
        <span className="font-bold text-slate-900">
          {data.name} – {data.city}
        </span>
        <span className="text-slate-500">
          {data.action} <span className="text-slate-700 font-medium">{data.time}</span>
        </span>
      </div>
    </div>
  );
};

export default SocialProofToast;