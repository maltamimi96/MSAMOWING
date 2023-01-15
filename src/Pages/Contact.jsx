import React from "react"
import Navbar from "../Components/General/Navbar"
import ContactForm from "../Components/Landing/ContactForm"
import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa"

function Contact() {
  return (
    <main className="bg-gray-200">
      <Navbar />
      <section className="container m-auto my-6 md:p-20 md:my-4">
        <ContactForm title={"Contact us"} />
        <ul className="list-unstyled flex justify-center mx-auto text-6xl mb-2 gap-8 ">
          <li className="mr-4 ">
            <a href="#" className="hover:text-green-600 ">
              <FaFacebook className="" />
            </a>
          </li>

          <li className="mr-4">
            <a
              href="email:msamowing@gmail.com"
              className="hover:text-green-600 ">
              <FaInstagram className="" />
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="hover:text-green-600">
              <FaMailBulk className="" />
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Contact
