import React from "react"
import HeroSection from "../Components/Landing/HeroSection"
import ServiceCard from "../Components/Landing/ServiceCard"
import ServiceGrid from "../Components/Landing/ServiceGrid"
import WhyChooseUs from "../Components/Landing/WhyChooseUs"

function Landing() {
  return (
    <main className="bg-gray-300 		">
      <HeroSection />
      <div className="w-full h-20 bg-green-600"></div>

      <section className="container m-auto">
        <ServiceGrid />
      </section>
      <div className="w-full h-20 bg-green-600"></div>

      <WhyChooseUs />
      <div className="w-full h-20 bg-green-600"></div>
    </main>
  )
}

export default Landing
