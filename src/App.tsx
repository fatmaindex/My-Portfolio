import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { Services } from '@/components/portfolio/Services';
import { About } from '@/components/portfolio/About';
import { Projects } from '@/components/portfolio/Projects';
import { Skills } from '@/components/portfolio/Skills';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/Scrolltotop';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;