import React from 'react';
import Footer from '../General/Footer';

const HeroSection = () => {
  return (
    <section className="bg-green-500 text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">Lawn Mowing Services</h1>
        <p className="text-xl font-light mb-8">
          We offer professional lawn mowing and maintenance services to keep your lawn looking its best. Our expert team will take care of all your lawn care needs, ensuring that your lawn is healthy and well-maintained.
        </p>
      </div>
      <Footer/>
    </section>
    
  );
};

export default HeroSection;
