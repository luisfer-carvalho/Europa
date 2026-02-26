import React from 'react';
import { 
  CheckCircle2, 
  DollarSign, 
  Heart, 
  ShieldCheck, 
  Star, 
  BookOpen, 
  Video, 
  Calculator, 
  Users, 
  WheatOff 
} from 'lucide-react';

export const FAQS = [
  {
    question: "¿Necesito experiencia para empezar a vender?",
    answer: "Absolutamente no. Las recetas están diseñadas paso a paso para que cualquier principiante pueda lograr resultados profesionales desde el primer intento."
  },
  {
    question: "¿Los ingredientes son fáciles de conseguir?",
    answer: "Sí. Todo lo puedes encontrar en tu supermercado local o tiendas naturistas comunes. No usamos ingredientes extraños ni imposibles de hallar."
  },
  {
    question: "¿Es realmente sin gluten?",
    answer: "100%. Todas las recetas están formuladas para ser libres de gluten, ideales para celíacos o personas que buscan reducir la inflamación."
  },
  {
    question: "¿Cómo recibo el acceso?",
    answer: "Inmediatamente después de tu pago, recibirás un correo electrónico con tu acceso a la plataforma donde podrás descargar el material y ver los videos (si eliges Premium)."
  },
  {
    question: "¿Puedo usar las recetas solo para casa?",
    answer: "¡Claro que sí! Aunque el enfoque es de negocio, miles de alumnas las usan para consentir a sus familias con postres deliciosos y saludables."
  }
];

export const TESTIMONIALS = [
  {
    name: "Valentina",
    location: "Madrid",
    text: "Empecé vendiendo a conocidos y ahora tengo pedidos todas las semanas. Nunca pensé que sería tan fácil empezar.",
    rating: 5
  },
  {
    name: "Ana María",
    location: "Barcelona",
    text: "El Cheesecake se vende solo. Nadie cree que es sin gluten. Recuperé la inversión con mis primeros 3 pedidos.",
    rating: 5
  },
  {
    name: "Carolina",
    location: "Valencia",
    text: "Buscaba ingresos extra sin descuidar a mis hijos. Estas recetas fueron la solución perfecta.",
    rating: 5
  }
];

export const BONUSES = [
  {
    title: "Guía rápida: Tus primeros clientes",
    description: "Estrategias simples para vender sin ser experto en marketing.",
    icon: <Users className="w-6 h-6 text-brand-600" />
  },
  {
    title: "Guía de precios para vender",
    description: "Para que nunca pierdas dinero y sepas exactamente cuánto cobrar.",
    icon: <Calculator className="w-6 h-6 text-brand-600" />
  },
  {
    title: "Manual de Sustituciones",
    description: "Aprende a reemplazar ingredientes si alguno te falta.",
    icon: <WheatOff className="w-6 h-6 text-brand-600" />
  },
  {
    title: "Pack: 6 Postres Fríos",
    description: "Recetas adicionales perfectas para vender en vasitos.",
    icon: <BookOpen className="w-6 h-6 text-brand-600" />
  }
];