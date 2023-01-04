import React from "react"
import HeroSection from "../Components/Landing/HeroSection"
import ServiceCard from "../Components/Landing/ServiceCard"
function Landing() {
  return (
    <main className="bg-gray-200">
      <HeroSection />
      <div className="bg-gradient-to-r from-emerald-400 to-green-600 w-screen h-16 overflow-hidden "></div>
      <div className="flex mt-10">
        <img
          className="w-1/2 "
          src="https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"></img>
        <div className="p-2 flex flex-col gap-4">
          <h1 className="text-4xl capitalize ">our services</h1>
          <p className="text-gray-500 text-3xl font-light leading-relaxed  ">
            Our company offers a wide range of services to help you maintain and
            improve your property. From lawn mowing and edging to hedge trimming
            and garden cleaning, we have the expertise and equipment to handle
            all of your outdoor maintenance needs. We also offer weed treatment
            and waste removal services to keep your property looking its best.
            Whether you need one-time services or ongoing maintenance, we have
            options to suit your needs and budget. Contact us today to learn
            more and schedule your services.
          </p>
        </div>
      </div>
      <section className="flex container ">
        <div>
          <div className="">
            <div className="flex flex-wrap items-center justify-center mx-auto py-12">
              <div className="w-full lg:w-1/2 px-4 text-center">
                <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
                  Lawn Mowing
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Keep your lawn looking neat and tidy with our professional
                  mowing services.
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4 text-center">
                <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
                  Edging
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Get crisp and clean edges around your lawn and garden beds
                  with our edging services.
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4 text-center">
                <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
                  Hedge Trimming
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Keep your hedges looking well-groomed with our professional
                  trimming services.
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4 text-center">
                <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
                  Weed Treatment
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Eliminate weeds and prevent them from coming back with our
                  weed treatment services.
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4 text-center">
                <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
                  Waste Removal
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Keep your property clean and tidy with our waste removal
                  services.
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4 text-center">
                <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
                  Garden Cleaning
                </h3>
                <p className="text-gray-500 mt-2 text-left">
                  Let us take care of the dirty work with our garden cleaning
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className=""
            src="https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"></img>
        </div>
      </section>
    </main>
  )
}

export default Landing

{
  /* <div className="">
<div className="flex flex-wrap items-center justify-center mx-auto py-12">
  <div className="w-full lg:w-1/2 px-4 text-center">
    <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
      Lawn Mowing
    </h3>
    <p className="text-gray-500 mt-2 text-left">
      Keep your lawn looking neat and tidy with our professional
      mowing services.
    </p>
  </div>
  <div className="w-full lg:w-1/2 px-4 text-center">
    <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
      Edging
    </h3>
    <p className="text-gray-500 mt-2 text-left">
      Get crisp and clean edges around your lawn and garden beds with
      our edging services.
    </p>
  </div>
  <div className="w-full lg:w-1/2 px-4 text-center">
    <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
      Hedge Trimming
    </h3>
    <p className="text-gray-500 mt-2 text-left">
      Keep your hedges looking well-groomed with our professional
      trimming services.
    </p>
  </div>
  <div className="w-full lg:w-1/2 px-4 text-center">
    <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
      Weed Treatment
    </h3>
    <p className="text-gray-500 mt-2 text-left">
      Eliminate weeds and prevent them from coming back with our weed
      treatment services.
    </p>
  </div>
  <div className="w-full lg:w-1/2 px-4 text-center">
    <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
      Waste Removal
    </h3>
    <p className="text-gray-500 mt-2 text-left">
      Keep your property clean and tidy with our waste removal
      services.
    </p>
  </div>
  <div className="w-full lg:w-1/2 px-4 text-center">
    <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
      Garden Cleaning
    </h3>
    <p className="text-gray-500 mt-2 text-left">
      Let us take care of the dirty work with our garden cleaning
      services.
    </p>
  </div>
</div>
</div> */
}
