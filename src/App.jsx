import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';
import Skills from './components/Skills';
import SocialSidebar from './components/SocialSidebar';
import Contact from './components/Contact'; // <-- 1. Import
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // This single line enables buttery smooth scrolling across the entire application!
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    // We removed bg-slate-900. 
    // Added overflow-x-hidden to prevent horizontal scrollbars from absolute background elements
    <div className="min-h-screen font-sans selection:bg-primary-500/30 overflow-x-hidden">
      <Navbar />
        <SocialSidebar />
        <main className="md:pl-24"> 
      <HeroSection />
      <About />
      <ProjectGallery />
      <Skills />
      <Contact />

      </main>
    <Footer />
    </div>
  );
}