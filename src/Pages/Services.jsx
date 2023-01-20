import React from "react"
import Navbar from "../Components/General/Navbar"
import { useParams } from "react-router-dom"

function Services() {
  const { id } = useParams()
  console.log(id)
  return (
    <main className="flex flex-col justify-between   bg-green-700 ">
      <Navbar />

      <section className="   min-h-screen md:text-2xl flex flex-col gap-6 p-10 bg-gray-200">
        <div className="container m-auto">
          <article className="text-gray-700 font-normal flex flex-col md:gap-8 p-4">
            <h1 className="md:text-6xl  uppercase  font-bold text-green-500 my-8">
              Services At MSA Mowing {id}
            </h1>
            <p>
              MSA Mowing Services is a professional mowing company that
              specializes in lawn mowing, hedge trimming, edging, weed
              treatment, rubbish removal, and garden cleaning. Our team of
              experienced and skilled professionals are dedicated to providing
              top-quality services to residential and commercial properties.
            </p>
            <p>
              <span className="font-bold">Lawn Mowing: </span>We use
              state-of-the-art equipment to ensure a precise and even cut on
              your lawn. Our mowing services include regular maintenance mows,
              as well as one-time cuts for special events or as needed.
            </p>
            <p>
              <span className="font-bold">Hedge Trimming:</span> Our hedge
              trimming services are designed to keep your hedges and bushes
              looking neat and tidy. We use precision cutting techniques to
              shape and contour your hedges to your desired look.
            </p>
            <p>
              <span className="font-bold">Edging:</span> Our edging services are
              designed to give your lawn a clean and polished look. We use
              specialized equipment to create crisp edges along sidewalks,
              driveways, and flower beds.
            </p>
            <p>
              <span className="font-bold">Weed Treatment:</span> We use safe and
              effective weed control methods to keep your lawn and garden free
              of unwanted weeds. Our team will identify and target problem areas
              to ensure a weed-free environment.
            </p>
            <p>
              <span className="font-bold">Rubbish Removal:</span> We offer a
              comprehensive rubbish removal service to help keep your property
              clean and tidy. Our team will remove and dispose of any unwanted
              debris, including branches, leaves, and other yard waste.
            </p>
            <p>
              <span className="font-bold">Garden Cleaning:</span> Our garden
              cleaning service includes the removal of dead plants and weeds, as
              well as general tidying and pruning of your garden beds. We also
              offer general garden maintenance such as mulching and fertilizing.
            </p>
            <p>
              At MSA Mowing Services, we take pride in our work and are
              committed to providing top-quality services to our customers. Our
              team is fully insured and equipped with the necessary tools and
              equipment to get the job done right. Contact us today to schedule
              your next mowing service.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Services
