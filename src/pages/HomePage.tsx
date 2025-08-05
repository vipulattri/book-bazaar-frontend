'use client';

import dynamic from 'next/dynamic';

// Static components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Dynamic components (with or without SSR)
const HeroSection = dynamic(() => import('../components/HeroSection'), {
  ssr: false,
  loading: () => <div className="min-h-[80vh]" />
});

const StudyAssistant = dynamic(() => import('../components/StudyAssistant'), {
  ssr: false,
  loading: () => <div className="min-h-[50vh]" />
});

const Stats = dynamic(() => import('../components/Stats'), { ssr: false });
const HowItWorks = dynamic(() => import('../components/HowItWorks'), { ssr: false });
const Categories = dynamic(() => import('../components/Categories'), { ssr: false });
const FeaturedBooks = dynamic(() => import('../components/FeaturedBooks'), { ssr: false });

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="overflow-hidden">
        <HeroSection />
        <Stats />
        <StudyAssistant />
        <HowItWorks />
        <Categories />
        <FeaturedBooks />
      </main>

      <Footer />
    </div>
  );
}
