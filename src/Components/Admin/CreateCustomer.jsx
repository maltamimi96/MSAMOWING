import React, { useState, useEffect } from "react"

import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useGlobalState } from "../../Context/stateContext"
import useFirestore from "../../Hooks/useFirestore"
function CreateCustomer() {
  const [selectedValue, setSelectedValue] = useState("")
  const [formData, setFormData] = useState({})
  const [date, setDate] = useState(new Date())
  const [weeks, setWeeks] = useState(1)
  const { loading, error, data, addDocument } = useFirestore()
  const handleWeeksChange = (event) => {
    setWeeks(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument("Customers", formData)
    data && toast("Customer Added")
  }
  const handleChangeForm = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    })
  }
  console.log(formData)
  function handleChange(event) {
    // Update the selectedValue state variable with the value of the select input
    setSelectedValue(event.target.value)
  }
  const handleDateChange = () => {
    const currentDate = new Date(event.target.value)
    const futureDate = new Date()
    futureDate.setDate(currentDate.getDate() + weeks)
    setDate(futureDate)
  }
  console.log(date)

  return (
    <>
      <section className="max-w-xl container m-auto md:max-w-6xl">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <h4 className="block my-4 text-3xl font-medium text-gray-900 dark:text-white">
            Create New Customer
          </h4>
          <label
            htmlFor="customer name"
            className="block my-4 text-sm font-medium text-gray-900 dark:text-white">
            Customer Name
          </label>
          <input
            type="text"
            id="title"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Customer full name"
            onChange={handleChangeForm}
            required
            name="customer name"
          />
          <label
            htmlFor="customer name"
            className="block my-4 text-sm font-medium text-gray-900 dark:text-white">
            Address
          </label>
          <input
            onChange={handleChangeForm}
            type="text"
            id="title"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Customer address"
            name="address"
            required
          />
          <label
            htmlFor="Last Service"
            className="block my-4 text-sm font-medium text-gray-900 dark:text-white">
            Last Service
          </label>
          <input
            onChange={handleChangeForm}
            type="date"
            id="title"
            name="last service"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Customer address"
            required
          />
          <label
            for="Category"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select an option
          </label>
          <select
            id="collections"
            requiredvalue={selectedValue}
            onChange={handleChange}
            name="provider"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value={14}>2 weeks</option>
            <option value={21}>3 weeks</option>
            <option value={28}>4 weeks</option>
            <option value={35}>5 weeks</option>
            <option value={42}>6 weeks</option>
            <option value={49}>7 weeks</option>
          </select>
          <label
            htmlFor="Last Service"
            className="block my-4 text-sm font-medium text-gray-900 dark:text-white">
            Notes
          </label>
          <textarea
            onChange={handleChangeForm}
            type="date"
            id="title"
            rows={10}
            name="next service"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Notes"
            required
          />

          <label
            for="Category"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select an option
          </label>
          <select
            id="collections"
            requiredvalue={selectedValue}
            onChange={handleChange}
            name="provider"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="NDIS">NDIS</option>
            <option value="PRIVATE">Private</option>
            <option value="HIPAGES">HiPages</option>
          </select>
          <label
            for="Category"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select an option
          </label>
          <select
            id="collections"
            requiredvalue={selectedValue}
            onChange={handleChange}
            name="provider"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="Ahmad">Ahmad</option>
            <option value="Abdul">Abdul</option>
            <option value="Adam">Adam</option>
            <option value="Bahsa">Bahsa</option>
            <option value="Mohammad>">Mohammad</option>
            <option value="Saleh">Saleh</option>
          </select>

          <button
            type="submit"
            required
            className=" my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 block text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Create Customer
          </button>
          <ToastContainer />
        </form>
      </section>
    </>
  )
}

export default CreateCustomer

// const uploadFile = () => {
//   const imageRef = ref(storage, `images/${imageUpload?.name + v4()}`)
//   uploadBytes(imageRef, imageUpload).then((snapshot) => {
//     getDownloadURL(snapshot.ref).then((url) => {
//       setImageUrls(url)
//       toast("Image Added Succesfuly")
//       createBlog({ title, body, author, url })
//         .then(() => {
//           toast("Article Added Succesfuly")
//         })
//         .catch((error) => toast(error))
//     })
//   })
// }
