import React, { useState, useEffect, useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import useFirestore from "../../Hooks/useFirestore"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"
import { db } from "../../Firebase/firebase-config"
function CreateCustomer() {
  // refs
  const lastServiceRef = useRef()
  const nextServiceRef = useRef()
  //state
  const [formData, setFormData] = useState({})
  const [lastService, setLastService] = useState(new Date())
  const [endDate, setEndDate] = useState("")
  const [weeks, setWeeks] = useState(0)
  //custom hooks
  const { loading, error, data, addDocument } = useFirestore()
  //functions
  function handleChange(event) {
    // Get the number of days to add from the select input
    // Create a new date by adding the specified number of days to the start date
    setLastService(event.target.value)
    const nextService = new Date(event.target.value)
    nextService.setDate(nextService.getDate() + Number(weeks))
    // Update the state with the new end date
    setEndDate(nextService)
  }

  const handleWeeks = (event) => {
    setWeeks(event.target.value)
  }
  const handleChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      lastService: lastService,
      nextService: endDate.toString() || "No Rebooking",
      weeks: weeks / 7,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument("customers", formData)
      .then(() => {
        toast("Article Added Succesfuly")
      })
      .catch((error) => toast(error))
  }
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
            name="customerName"
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
            type="date"
            id="title"
            onChange={handleChange}
            name="last-service"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Customer address"
            required
          />
          <div className="flex gap-7">
            <div className="">
              <label
                for="Category"
                class="block  text-sm font-medium text-gray-900 dark:text-white">
                Service Frequency
              </label>
              <select
                id="collections"
                name="frequency"
                onChange={handleWeeks}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value={0}>No Return</option>
                <option value={14}>2 weeks</option>
                <option value={21}>3 weeks</option>
                <option value={28}>4 weeks</option>
                <option value={35}>5 weeks</option>
                <option value={42}>6 weeks</option>
                <option value={49}>7 weeks</option>
              </select>
            </div>
            <div className="">
              <label
                htmlFor="Last Service"
                className="block  text-sm font-medium text-gray-900 dark:text-white">
                Next Service
              </label>
              <input
                type="text"
                id="title"
                value={endDate}
                name="next-service"
                className="shadow-sm bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Customer address"
                required
                disabled
              />
            </div>
          </div>

          <label
            htmlFor="notes"
            className="block my-4 text-sm font-medium text-gray-900 dark:text-white">
            Notes
          </label>
          <textarea
            onChange={handleChangeForm}
            type="date"
            id="title"
            rows={10}
            name="notes"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Notes"
          />

          <label
            for="Category"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Provider
          </label>
          <select
            id="collections"
            name="provider"
            onChange={handleChangeForm}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="NDIS">NDIS</option>
            <option value="PRIVATE">Private</option>
            <option value="HIPAGES">HiPages</option>
          </select>
          <label
            for="Category"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            By:
          </label>
          <select
            id="collections"
            name="found-by"
            onChange={handleChangeForm}
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
