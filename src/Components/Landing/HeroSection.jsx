import React from 'react';
import Footer from '../General/Footer';

const HeroSection = () => {
  return (
<<<<<<< Updated upstream
    <section className="bg-green-500 text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">Lawn Mowing Services</h1>
        <p className="text-xl font-light mb-8">
          We offer professional lawn mowing and maintenance services to keep your lawn looking its best. Our expert team will take care of all your lawn care needs, ensuring that your lawn is healthy and well-maintained.
        </p>
=======
    <section
      className="min-h-screen bg-cover bg-center	 bg-blend-multiply  flex flex-col justify-between bg-slate-300  "
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1559702971-54d4089fc5a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
      }}>
      <Navbar />
      <div className=" bg-cover mb-6 flex flex-col  justify-between container mx-auto  text-zinc-100 md:flex-row  md:mb-0  ">
        <div className="flex flex-col  md:justify-start">
          <h1 className="text-5xl font-bold mb-4">Lawn Services</h1>
          <h2 className="text-2xl mb-4">
            MSA Mowing is a reliable and professional lawn care service that
            provides a wide range of services to keep your lawn looking healthy
            and beautiful
          </h2>
          <ul className="text-2xl flex flex-col gap-2 md:pl-4 capitalize">
            <li className="flex  gap-1 ">
              <FaToolbox className="mt-1" />
              Residential & Commercial Services
            </li>
            <li className="flex gap-1 ">
              <FaRegCalendarCheck className="mt-1" />
              Affordable Prices
            </li>
            <li className="flex gap-1 ">
              <FaMapMarkerAlt className="mt-1" />
              Family Owned Local Business
            </li>
            <li className="flex gap-1 ">
              <FaUserFriends className="mt-1" />
              Professional Team
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>

      <div className="bg-zinc-700/50 	 w-screen h-fit p-4 text-white">
        <h1 className="text-center md:text-2xl capitalise text-gray-200 mb-4 ">
          Area Of Service
        </h1>
        <ul className="flex flex-wrap  gap-2 justify-center">
          <li>
            <FaMapMarkerAlt className="text-4xl" />
          </li>
          {areas.map((lg) => (
            <li className="bg-gradient-to-r text-1xl rounded p-2 text-white font-semibold">
              {lg}
            </li>
          ))}
        </ul>
>>>>>>> Stashed changes
      </div>
      <Footer/>
    </section>
    
  );
};

export default HeroSection;
