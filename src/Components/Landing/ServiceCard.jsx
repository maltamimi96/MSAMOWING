import React from "react"
import mower from "../../assets/mower.png"
function ServiceCard() {
  return (
    <div className="   flex  shadow-xl">
      <div className=" bg-slate-50">
        <div className="bg-zinc-100  ">
          <h1 className="text-2xl font-semibold  capitalize mb-2">
            lawn mowing
          </h1>
          <p className="text-gray-500 antialiased ">
            Keep your lawn looking neat and tidy with our professional mowing
            services
          </p>{" "}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
