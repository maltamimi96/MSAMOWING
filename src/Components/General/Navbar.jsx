import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import logoSm from "../../assets/logo-sm.png"

function Navbar({ color }) {
  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false

  return (
    <div className="bg-transparent py-4">
      <nav className="relative container mx-auto p-1 w-full content-center flex justify-between  ">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
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
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className=" text-2xl text-emerald-800 hover:text-orange-600 border-gray-400 my-8 uppercase">
                <Link to="/">Gallery</Link>
              </li>
            </ul>
          </div>
        </section>

        <div id="nav--logo" className="my-auto w-60">
          <Link to={"/"}>
            <img
              className=" bg-gradient-to-r from-emerald-500 to-green-600 p-1 rounded-xl"
              src={logoSm}></img>
          </Link>
        </div>
        <div className="hidden md:flex justify-center gap-5 align-middle">
          <Link
            to={"/"}
            className="text-1xl font-semibold text-center m-auto text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl px-2 py-1 hover:text-sky-300">
            Contact
          </Link>
          <Link
            to={"/"}
            className="text-1xl font-semibold text-center m-auto text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl px-2 py-1 hover:text-sky-300">
            Gallery
          </Link>{" "}
          <Link
            to={"/"}
            className="text-1xl font-semibold text-center m-auto text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl px-2 py-1 hover:text-sky-300">
            Services
          </Link>
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
        background: white;
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
