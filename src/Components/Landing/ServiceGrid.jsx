import React from "react"
import ServiceCard from "./ServiceCard"
import cleaning from "../../assets/cleaning.png"
import hedge from "../../assets/hedge.png"
import rubbish from "../../assets/rubbish.png"

function ServiceGrid() {
  return (
    <section className="py-4">
      <div className="flex flex-col gap-10 flex-wrap  items-center justify-center mx-auto   container m-auto md:flex-row">
        <ServiceCard
          title="Lawn Mowing"
          description="Keep your lawn looking neat and tidy with our professional mowing
            services."
          url="https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <ServiceCard
          title="Edging"
          description="    Get crisp and clean edges around your lawn and garden beds with our
          edging services."
          url="https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <ServiceCard
          title="Hedge Trimming"
          description="    Keep your hedges looking well-groomed with our professional trimming
          services."
          url={hedge}
        />
        <ServiceCard
          title="Weed Treatment"
          description="Eliminate weeds and prevent them from coming back with our weed
          treatment services."
          url="https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <ServiceCard
          title="Waste Removal"
          description="            Keep your property clean and tidy with our waste removal services.
          "
          url={rubbish}
        />
        <ServiceCard
          title="Garden Cleaning"
          description=" Let us take care of the dirty work with our garden cleaning
          services."
          url={cleaning}
        />
      </div>
    </section>
  )
}

export default ServiceGrid
