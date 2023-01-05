import React from "react"

function Services() {
  return (
    <section id="services">
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
    </section>
  )
}

export default Services
