import React from "react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"
import logoSm from "../../assets/logo-sm.png"

function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 flex flex-wrap gap-8">
        <div id="nav--logo" className="my-auto w-60">
          <Link to={"/"}>
            <img
              className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-xl"
              src={logoSm}></img>
          </Link>
        </div>
        <div className="w-full md:w-1/4 text-gray-600 text-sm md:text-left">
          <h6 className="font-bold text-gray-800 mb-4">Services</h6>
          <ul className="list-unstyled">
            <li className="mb-2">Lawn Mowing</li>
            <li className="mb-2">Lawn Maintenance</li>
            <li className="mb-2">Garden Care</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-gray-600 text-sm md:text-left">
          <h6 className="font-bold text-gray-800 mb-4">Contact</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a
                href="mailto:info@example.com"
                className="text-gray-600 hover:text-gray-800">
                msamowing@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <a href="tel:0493498074">0493498074</a>
            </li>
            <li className="mb-2">Sydney NSW</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-gray-600 text-sm md:text-left">
          <h6 className="font-bold text-gray-800 mb-4">Socials</h6>
          <ul className="list-unstyled flex items-center">
            <li className="mr-4">
              <a
                href="https://www.facebook.com/profile.php?id=100089696359545"
                className="text-gray-600 hover:text-gray-800">
                <FaFacebook className="w-6 h-6" />
              </a>
            </li>

            <li className="mr-4">
              <a
                href="https://www.instagram.com/msamowing/"
                className="text-gray-600 hover:text-gray-800">
                <FaInstagram className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
