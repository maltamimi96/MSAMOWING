import React from "react"
import Navbar from "../Components/General/Navbar"
import ContactForm from "../Components/Landing/ContactForm"
import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa"

function Contact() {
  return (
    <main className="bg-green-700">
      <Navbar />
      <section className="bg-gray-200  md:p-20   ">
        <div className="container m-auto">
          <ContactForm title={"Contact us"} />
          <ul className="list-unstyled flex justify-center mx-auto text-6xl mb-2 gap-8 my-8 ">
            <li className="text-xl my-auto font-semibold">socials:</li>
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
        </div>
      </section>
    </main>
  )
}

export default Contact
