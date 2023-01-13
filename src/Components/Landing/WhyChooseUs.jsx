import React from "react"
import { FaCheckCircle } from "react-icons/fa"
import grass from "../../assets/footer.jpg"

const WhyChooseUs = () => {
  return (
    <div
      className="bg-gray-200 pb-40 pt-20 bg-cover bg-blend-multiply bg-zinc-700/70 "
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1560426961-4aa4cdcb7edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`,
      }}>
      <div className="container m-auto text-white">
        <h2 className="text-5xl font-medium mb-20 text-center text-green-400">
          Why Choose MSA Mowing
        </h2>

        <div className="my-20">
          <div className="flex flex-wrap justify-center gap-8 ">
            <div className=" flex">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              <span className="text-2xl font-medium">
                Reliable and professional service
              </span>
            </div>
            <div className=" flex">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              <span className="text-2xl font-medium">Flexible scheduling</span>
            </div>
            <div className=" flex">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              <span className="text-2xl font-medium">Affordable pricing</span>
            </div>
            <div className=" flex">
              <FaCheckCircle className="text-green-500 mr-2 text-2xl" />
              <span className="text-2xl font-medium">High-quality work</span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <p className="text-xl font-medium leading-loose text-center text-justify">
            At MSA Mowing, we understand the importance of maintaining a
            beautiful lawn. That's why we offer a wide range of services to
            ensure your lawn looks its best all year round. From regular lawn
            mowing and edging to hedge trimming and weed treatment, we've got
            you covered. With our reliable and professional service, flexible
            scheduling, and affordable pricing, there's no better choice for
            your lawn care needs. Our team of experienced and professional
            technicians have the knowledge and expertise to provide you with the
            highest quality lawn care services. We take pride in our attention
            to detail and strive to exceed your expectations with every job. Our
            services include regular lawn mowing and edging, hedge trimming,
            weed treatment, and much more. We also offer flexible scheduling and
            affordable pricing to fit any budget. Choose MSA Mowing for all of
            your lawn care needs and let us help you achieve the lawn of your
            dreams.
          </p>
        </div>
        <div className="text-center my-4">
          <span className="text-xl font-medium">
            We guarantee you'll love your lawn!
          </span>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
