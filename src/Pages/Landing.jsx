import React from "react"
import HeroSection from "../Components/Landing/HeroSection"
import ServiceCard from "../Components/Landing/ServiceCard"
import ServiceGrid from "../Components/Landing/ServiceGrid"
import WhyChooseUs from "../Components/Landing/WhyChooseUs"

function Landing() {
  return (
    <main className="bg-gray-300 		">
      <HeroSection />

      <section className="container m-auto">
        <ServiceGrid />
      </section>
      <WhyChooseUs />
    </main>
  )
}

export default Landing
