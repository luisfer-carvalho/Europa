import React from 'react';
import Hero from './components/Hero';
import RecipeGallery from './components/RecipeGallery';
import Story from './components/Story';
import PainPoints from './components/PainPoints';
import Benefits from './components/Benefits';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CountdownBar from './components/CountdownBar';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900">
      <CountdownBar />
      <Hero />
      <RecipeGallery />
      <Story />
      <PainPoints />
      <Benefits />
      <Bonuses />
      <Pricing />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;