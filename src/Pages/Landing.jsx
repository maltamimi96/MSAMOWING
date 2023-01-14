import React from "react"
import HeroSection from "../Components/Landing/HeroSection"
import ServiceCard from "../Components/Landing/ServiceCard"
import ServiceGrid from "../Components/Landing/ServiceGrid"
import WhyChooseUs from "../Components/Landing/WhyChooseUs"

function Landing() {
  return (
    <main className="bg-gray-300 		">
      <HeroSection />

      <div className="bg-gradient-to-r from-emerald-400 to-green-600 w-screen h-16 overflow-hidden text-center text-3xl p-2 font-medium  ">
        Our Services
      </div>
      <section className="container m-auto">
        <ServiceGrid />
      </section>
      <WhyChooseUs />
    </main>
  )
}

export default Landing
