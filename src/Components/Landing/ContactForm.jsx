import { useRef, useState } from "react"
import { FaPhone } from "react-icons/fa"
import emailjs from "@emailjs/browser"
function ContactForm({ title }) {
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const sendEmail = (e) => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”

    emailjs
      .send(
        "service_39cqkfc",
        "template_3ud75cs ",
        formData,
        "Ipn-fyuXcoNaH__EW"
      )
      .then(
        (result) => {
          console.log("sent")
        },
        (error) => {
          console.log(error)
        }
      )
  }
  console.log(formData)

  return (
    <section className=" text-black  bg-gray-200/50  p-8   lg:w-full 	">
      <div className=" ">
        <h2 className="mb-4 text-black text-6xl tracking-tight uppercase font-extrabold text-center ">
          {title}
        </h2>

        <form onSubmit={sendEmail} classname="space-y-10 ">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm my-2 placeholder:text-black placeholder:font-semibold bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              required
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="text"
              id="name"
              className="block my-2 p-3 w-full placeholder:text-black placeholder:font-semibold text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              required
              onChange={handleChange}
              placeholder="Name"
              name="name"
            />
          </div>
          <div>
            <input
              type="text"
              id="phone"
              className="block p-3 my-2 w-full text-sm  placeholder:text-black placeholder:font-semibold text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              required
              onChange={handleChange}
              name="phone"
              placeholder="Phone"
            />
          </div>
          <div>
            <input
              type="text"
              id="postcode"
              className="block p-3 my-2 w-full text-sm  placeholder:text-black placeholder:font-semibold text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              required
              onChange={handleChange}
              name="postcode"
              placeholder="Postcode"
            />
          </div>
          <div className="sm:col-span-2">
            <textarea
              id="message"
              rows="6"
              onChange={handleChange}
              placeholder="Enquiry"
              name="message"
              className="block resize-none  placeholder:text-black placeholder:font-semibold	 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "></textarea>
          </div>
          <button
            type="submit"
            className="py-3 bg-green-600 px-5 text-md font-medium text-center mt-4 text-white hover:bg-green-700  rounded-lg w-full  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
            Send
          </button>
        </form>
        <div className=" text-4xl my-14">
          <a
            className="font-bold flex flex-wrap-reverse gap-2 justify-center text-1xl hover:text-sky-300 md:text-4xl md:flex-row "
            href="tel:0493498074">
            <FaPhone className="border-2  rounded-full p-2 md:text-4xl border-black" />
            0493498074
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
