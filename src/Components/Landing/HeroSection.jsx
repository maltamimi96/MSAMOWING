import React from "react"
import Footer from "../General/Footer"
import mower from "../../assets/mower.png"
import Navbar from "../../Components/General/Navbar"
import ContactForm from "./ContactForm"
import { FaDollarSign } from "react-icons/fa"

const HeroSection = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-blend-multiply 	 bg-slate-300  "
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1560426961-4aa4cdcb7edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`,
      }}>
      <Navbar />
      <div className=" py-24 bg-cover	  flex justify-center  ">
        <div className="container text-zinc-100    flex flex-col  gap-6 md:flex-row ">
          <div className="pb-40 md:w-10/12">
            <h1 className="text-5xl font-bold mb-4">Lawn Mowing Services</h1>
            <p className="mb-6  leading-loose md:text-2xl">
              We offer professional lawn mowing and maintenance services to keep
              your lawn looking its best. Our expert team will take care of all
              your lawn care needs, ensuring that your lawn is healthy and
              well-maintained. We are dedicated to providing top-quality lawn
              care services to help you maintain a beautiful and healthy lawn.
              Our team of experienced professionals uses the latest equipment
              and techniques to ensure that your lawn looks its best all year
              round. We offer a variety of services, including regular mowing,
              edging, hedge trimming, and weed control. Contact us today to
              learn more and schedule your services
            </p>
            <ul>
              <li>Residential and Commercial Services</li>
              <li className="flex">
                <FaDollarSign />
                Affordable Prices
              </li>
            </ul>
            <a
              href="tel:0490688332"
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-2xl px-4 py-2 rounded-2xl capitalize">
              call us now
            </a>
            <a href="#" className=" text-2xl px-4 py-2 rounded-2xl capitalize">
              View Services
            </a>
          </div>
          <div className="w-96 md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
