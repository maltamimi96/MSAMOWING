import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
    <div className="container mx-auto px-6 flex flex-wrap">
      <div className="w-full md:w-1/4 text-center md:text-left">
        <img src="/logo.svg" alt="Logo" className="w-24 h-24 mb-6" />
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris at lectus at justo elementum viverra.
        </p>
      </div>
      <div className="w-full md:w-1/4 text-gray-600 text-sm md:text-left">
        <h6 className="font-bold text-gray-800 mb-4">Services</h6>
        <ul className="list-unstyled">
          <li className="mb-2">Lawn Mowing</li>
          <li className="mb-2">Lawn Maintenance</li>
          <li className="mb-2">Garden Care</li>
          <li className="mb-2">Landscaping</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 text-gray-600 text-sm md:text-left">
        <h6 className="font-bold text-gray-800 mb-4">Contact</h6>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a href="mailto:info@example.com" className="text-gray-600 hover:text-gray-800">
              info@example.com
            </a>
          </li>
          <li className="mb-2">(123) 456-7890</li>
          <li className="mb-2">123 Main Street</li>
          <li className="mb-2">Anytown, USA 12345</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 text-gray-600 text-sm md:text-left">
        <h6 className="font-bold text-gray-800 mb-4">Socials</h6>
        <ul className="list-unstyled flex items-center">
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebook className="w-6 h-6" />
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter className="w-6 h-6" />
              </a>
         </li>
         <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
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