import React from "react"
import Footer from "../General/Footer"
import mower from "../../assets/mower.png"
import Navbar from "../../Components/General/Navbar"
import ContactForm from "./ContactForm"
import {
  FaDollarSign,
  FaRegCalendarCheck,
  FaMapMarkerAlt,
  FaUserFriends,
  FaToolbox,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaQuoteRight,
} from "react-icons/fa"

import micn from "../../assets/micn.png"
import { Link } from "react-router-dom"
function HeroSection(props) {
  const areas = [
    "Bankstown",
    "Roselands",
    "Bass Hill",
    "Revesby",
    "Canterbury",
    "Auburn",
    "Merrylands",
    "Chester hill",
    "Georges Hall",
    "Cabramatta",
    "Granville",
    "Liverpool",
    "Casula",
    "Prestons",
    "Villawood",
    "Fairfield",
    "Guildford",
    "Greenacre",
  ]

  return (
    <section
      className="min-h-screen bg-cover 	 bg-blend-multiply  flex flex-col brightness-90 bg-green-500  justify-between bg-right-bottom  md:bg-green-300 md:brightness-90 md:contrast-125   md:bg-center     "
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1558337587-80f6bbf67e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
      }}>
      <Navbar />
      <div className=" bg-cover mb-6 flex flex-col-reverse   justify-between container  p-6 md:mx-auto md:p-0 md:gap-40  text-zinc-100 md:flex-row  md:mb-4 md:my-10   ">
        <div className="mt-6 md:mt-0 md:w-1/3 ">
          <ContactForm title={"Get a Qoute"} />
        </div>
        <div className="flex flex-col  md:justify-start md:w-1/2 ">
          <h1 className="text-4xl focus-in-expand  md:text-4xl lg:text-7xl font-bold mb-4 uppercase">
            Professional Lawn Services
          </h1>
          <h2 className=" focus-in-expand text-2xl font-bold md:text-3xl mb-4 font-sans">
            MSA Mowing is a reliable and professional lawn care service that
            provides a wide range of services to keep your lawn looking healthy
            and beautiful
          </h2>
          <h2 className="text-2xl md:text-3xl mb-4 font-sans"></h2>
          <ul className="text-2xl md:text-3xl flex flex-col gap-2  capitalize">
            <li className="flex  gap-1 ">
              <FaToolbox className="mt-1" />
              Residential & Commercial Services
            </li>
            <li className="flex  gap-1 ">
              <FaRegCalendarCheck className="mt-1" />
              Easy Scheduling
            </li>
            <li className="flex gap-1 ">
              <FaDollarSign className="mt-1" />
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
          <div className="flex md:flex-row gap-4">
            <a
              href="tel:0493498074"
              className="focus-in-expand py-3 flex gap-1  bg-green-500 px-5 w-fit text-md font-medium text-center mt-8 text-white hover:bg-cyan-800  rounded-lg  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
              <FaPhoneAlt className="m-auto text-2xl" />
              <h2 className=" md:text-2xl m-auto uppercase font-bold">
                Call now
              </h2>
            </a>
            <a
              href="https://www.instagram.com/msamowing/"
              className="focus-in-expand py-3 flex gap-1  bg-green-500 px-5 w-fit text-md font-medium text-center mt-8 text-white hover:bg-cyan-800  rounded-lg  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
              <FaInstagram className="m-auto text-2xl" />
              <h2 className=" md:text-2xl m-auto uppercase font-bold">
                Instagram
              </h2>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-zinc-700/50 	 w-screen h-fit p-4 text-white">
        <h1 className="text-center md:text-4xl uppercase font-bold text-gray-200 mb-4 ">
          Area Of Service
        </h1>
        <ul className="flex flex-wrap  md:gap-2 justify-center">
          {areas.map((lg) => (
            <li className="bg-gradient-to-r text-1xl rounded p-2 text-white font-semibold">
              {lg}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HeroSection

// <p className="mb-6  leading-loose md:text-2xl">
// We offer professional lawn mowing and maintenance services to keep
// your lawn looking its best. Our expert team will take care of all
// your lawn care needs, ensuring that your lawn is healthy and
// well-maintained. We are dedicated to providing top-quality lawn
// care services to help you maintain a beautiful and healthy lawn.
// Our team of experienced professionals uses the latest equipment
// and techniques to ensure that your lawn looks its best all year
// round. We offer a variety of services, including regular mowing,
// edging, hedge trimming, and weed control. Contact us today to
// learn more and schedule your services
// </p>
