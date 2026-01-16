import About from '@/components/HomeSection/About';
import Contact from '@/components/HomeSection/Contact';
import Features from '@/components/HomeSection/Features';
import Hero from '@/components/HomeSection/Hero';
import PopularItems from '@/components/HomeSection/PopularItems';
import Services from '@/components/HomeSection/Services';
import Testimonials from '@/components/HomeSection/Testimonials';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <main className="p-6 space-y-20">
        <Hero></Hero>
      <Features></Features>
      <About></About>
      <Services></Services>
      <PopularItems></PopularItems>
      <Testimonials></Testimonials>
      <Contact></Contact>
      </main>
    </div>
  );
};

export default page;