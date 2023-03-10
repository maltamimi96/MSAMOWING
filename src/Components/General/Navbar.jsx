import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import logoSm from "../../assets/logo-sm.png"
import { FaPhone } from "react-icons/fa"
import { MdOutlineGrass } from "react-icons/md"

function Navbar({ color }) {
  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false

  return (
    <div className="bg-transparent py-4">
      <nav className="relative container mx-auto p-1 w-full content-center flex justify-between  ">
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "showMenuNav bg-green-800 border-2 rounded"
                : "hideMenuNav"
            }>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
              <li className=" text-4xl text-gray-200 hover:text-orange-600 border-gray-400 my-8 uppercase">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className=" text-4xl text-gray-200 hover:text-orange-600 border-gray-400 my-8 uppercase">
                <Link to="/services">Services</Link>
              </li>
              <li className=" text-4xl text-gray-200 hover:text-orange-600 border-gray-400 my-8 uppercase">
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a
                  className="font-bold  p-2 rounded-sm border-2 text-gray-200  flex flex-wrap-reverse gap-2 justify-center text-4xl hover:text-sky-300 md:text-4xl md:flex-row "
                  href="tel:0493498074">
                  <FaPhone className="border-2  rounded-full p-2 md:text-4xl border-gray-200" />
                  03 8657 0094
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div id="nav--logo" className="my-auto  ">
          <Link
            to={"/"}
            className="flex bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl px-2 ">
            <img className="  p-2 rounded-xl w-60" src={logoSm}></img>
            <MdOutlineGrass className="text-4xl text-gray-200 my-auto" />
          </Link>
        </div>
        <div className="hidden md:flex justify-center gap-5 align-middle text-white">
          <Link
            to={"/contact"}
            className="text-1xl font-semibold text-center m-auto  bg-gradient-to-r from-green-500 to-green-600 rounded-xl px-4 py-2 hover:text-sky-300">
            Contact
          </Link>
          <Link
            to={"/gallery"}
            className="text-1xl font-semibold text-center m-auto  bg-gradient-to-r from-green-500 to-green-600 rounded-xl px-4 py-2 hover:text-sky-300">
            Gallery
          </Link>{" "}
          <Link
            to={"/services"}
            className="text-1xl font-semibold text-center m-auto bg-gradient-to-r from-green-500 to-green-600 rounded-xl px-4 py-2 hover:text-sky-300">
            Services
          </Link>
          <a
            className="font-bold flex flex-wrap-reverse gap-2 px-4 py-2 justify-center text-1xl hover:text-sky-300 md:text-4xl md:flex-row "
            href="tel:0493498074">
            <FaPhone className="border-2  rounded-full p-2 md:text-4xl border-white" />
            0493498074
          </a>
        </div>

        <style>
          {`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
        </style>
      </nav>
    </div>
  )
}

export default Navbar
