import React from 'react'
import { Link } from 'react-router-dom'
import {useState } from "react"
import logoSm from '../../assets/logo-sm.png'


function Navbar({color}) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
      <div className={`w-full sm:py-4 ${color&&'bg-slate-500'}`}>
      
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
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className=" text-2xl text-emerald-800 hover:text-orange-600 border-gray-400 my-8 uppercase">
                  <Link to="/">Home</Link>
              </li>
              <li className=" text-2xl text-emerald-800 hover:text-orange-600 border-gray-400 my-8 uppercase">
                  <Link to="/blog/XG13yTumA7E3jhKC5MJC">The Beginning</Link>
              </li>
              <li className=" text-2xl text-emerald-800 hover:text-orange-600 border-gray-400 my-8 uppercase">
                <Link to="/maltreatment">Maltreatment</Link>
              </li>
              <li className=" text-2xl text-emerald-800 hover:text-orange-600 border-gray-400 my-8 uppercase">
                <Link to="/different-topics">Different Topics</Link>
              </li>
              <li className=" text-2xl text-emerald-800 hover:text-orange-600 border-gray-400 my-8 uppercase">
                <Link to="/contact">Contact</Link>
              </li>
              <li className=" text-2xl text-emerald-800 hover:text-orange-600 border-gray-400 my-8 uppercase">
                <Link to="/contact">Tell Your Story</Link>
              </li>
            </ul>
          </div>
        </section>

                  <div id='nav--logo' className='my-auto w-60' >
                    <Link to={"/"}><  img className='' src={logoSm} ></img></Link>

                  </div>
                <div className='hidden md:flex justify-center gap-5 align-middle'>
                  <Link to={"/"} className="text-1xl text-center m-auto text-emerald-500 hover:text-zinc-300">Home</Link>         
                  <Link to={"/blog/XG13yTumA7E3jhKC5MJC"} className="text-1xl text-center m-auto text-emerald-500 hover:text-zinc-300">The Beginning</Link>         
                  <Link to={"/maltreatment"} className="text-1xl text-center m-auto text-emerald-500 hover:text-zinc-300">Maltreatment</Link>              
                  <Link to={"/different-topics"} className="text-1xl text-center m-auto text-emerald-500 hover:text-zinc-300">Different Topics</Link> 
                  <Link to={"/contact"} className="text-1xl text-center m-auto text-emerald-500 hover:text-zinc-300">Contact Me</Link>              
                  <Link
                  to={"/contact"}
                  className="hidden p-2 px-4 text-1xl 	hover:bg-emerald-400 text-white  text-center bg-emerald-700 rounded md:block my-auto"
                  
                  >Tell Your Story</Link >
                  
                 
                </div>
             
               
  
                <style>{`
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
    `}</style>
             
  
             
               
          </nav>
      </div>
        )
  }
  
  export default Navbar