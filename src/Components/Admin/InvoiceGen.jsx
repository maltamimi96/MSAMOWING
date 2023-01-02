import React from "react"
import { useState, useEffect } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import parse from "html-react-parser"
import useFirestore from "../../Hooks/useFirestore"
import { ToastContainer, toast } from "react-toastify"

function InvoiceGen() {
  const [formData, setFormData] = useState({})

  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [editingIndex, setEditingIndex] = useState(-1)
  const [notes, setNotes] = useState("")
  const [dataForm, setDataForm] = useState({
    clientName: "",
    invoiceNumber: "",
    invoiceDate: "",
    items: items,
    notes: "",
    total: total,
  })
  const { loading, error, data, addDocument } = useFirestore()

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))

    setTotal(calculateTotal())
  }
  console.log(items)
  function addItem() {
    setItems([...items, formData])
    setFormData({})
    setEditingIndex(-1)
  }

  function editItem(index) {
    setFormData(items[index])
    setEditingIndex(index)
  }

  function cancelEdit() {
    setFormData({})
    setEditingIndex(-1)
  }

  function saveEdit() {
    setItems((prevItems) => {
      prevItems[editingIndex] = formData
      return [...prevItems]
    })
    setFormData({})
    setEditingIndex(-1)
  }

  function removeItem(index) {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index))
  }

  function calculateTotal() {
    return items.reduce((total, item) => {
      return total + item.quantity * item.price
    }, 0)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument("invoices", formData)
      .then(() => {
        toast("Article Added Succesfuly")
      })
      .catch((error) => toast(error))
  }

  useEffect(() => {
    setTotal(calculateTotal())
  }, [items])
  console.log(formData)
  return (
    <section className="bg-white shadow-md rounded px-20 pt-20 pb-8 mb-4 min-h-screen ">
      <div className="text-center mb-5">
        <div
          className="flex justify-between flex-wrap
        ">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/msa-mowing.appspot.com/o/logo-sm.png?alt=media&token=fa8cffca-f2c1-435f-9e5d-9273eb72513c"
            }
            alt="Logo"
            className="h-12 mb-4"
          />
          <h1 className="text-6xl uppercase">Invoice</h1>
        </div>

        <h4 className="text-left font-semibold">ABN : 73 882 493 738 </h4>
        <h4 className="text-left font-semibold">Email : msamowing@gmail.com</h4>
        <h4 className="text-left font-semibold">Phone : +61 493 498 074</h4>
      </div>
      <div className="mb-4 flex flex-col gap-2 md:flex-row">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="client-name">
            Client Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="client-name"
            type="text"
            placeholder="John Doe"
            name="client-name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="invoice-number">
            Invoice Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="invoice-number"
            type="text"
            placeholder="#123"
            name="invoice-number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="invoice-date">
            Invoice Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="invoice-date"
            type="date"
            name="invoice-date"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="container mx-auto">
        {editingIndex === -1 ? (
          <form className="mb-4 flex flex-col gap-2 md:flex-row">
            <label className="block font-bold mb-2">
              Item Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block font-bold mb-2">
              Quantity:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="quantity"
                value={formData.quantity || 0}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block font-bold mb-2">
              Price:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="price"
                value={formData.price || 0}
                onChange={handleChange}
                required
              />
            </label>
            <button
              className="btn btn-primary mt-4 text-emerald-600 font-semibold"
              type="button"
              onClick={addItem}>
              + Add Item
            </button>
          </form>
        ) : (
          <form className="mb-4  flex flex-col gap-4 md:flex-col">
            <label className="block font-bold mb-2">
              Item Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
              />
            </label>
            <label className="block font-bold mb-2">
              Quantity:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="quantity"
                value={formData.quantity || 0}
                onChange={handleChange}
              />
            </label>
            <label className="block font-bold mb-2">
              Price:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="price"
                value={formData.price || 0}
                onChange={handleChange}
              />
            </label>
            <button
              className="btn btn-primary mt-4 mr-2 text-sky-600 font-bold"
              type="button"
              onClick={saveEdit}>
              Save
            </button>
            <button
              className="btn btn-secondary mt-4 text-orange-700 font-bold"
              type="button"
              onClick={cancelEdit}>
              Cancel
            </button>
          </form>
        )}
        <div className="mb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4   justify-center py-2 border-b border-gray-200  rounded md:flex-row md:justify-start md:items-center md:gap-20">
              <span className="font-bold  p-4 rounded">
                item:&nbsp;
                <span className="font-light"> {item.name || "blank"}</span>
              </span>
              <span className="font-bold p-4   rounded">
                quantity:&nbsp;
                <span className="font-light">{item.quantity || 0}</span>
              </span>
              <span className="font-bold  rounded p-4 ">
                price:&nbsp;
                <span className="font-light"> {item.price || 0}</span>
              </span>
              <span className="font-bold  rounded p-4  ">
                {" "}
                amount:&nbsp;
                <span className="font-light">
                  {item.price * item.quantity || 0}{" "}
                </span>
              </span>

              {editingIndex === index ? (
                <button
                  className="btn btn-secondary rounded p-4 bg-purple-500"
                  type="button"
                  onClick={cancelEdit}>
                  Cancel
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-secondary p-4 rounded uppercase text-1xl text-purple-600  font-semibold md:text-lg"
                    type="button"
                    onClick={() => editItem(index)}>
                    Edit
                  </button>
                  <button
                    className="btn btn-primary uppercase text-red-600 font-semibold text-1xl   p-4 rounded md:text-lg"
                    type="button"
                    onClick={() => removeItem(index)}>
                    Remove
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="description">
            Notes
          </label>
          <ReactQuill
            className="block my-4 text-sm font-medium text-zinc-700 "
            theme="snow"
            value={notes}
            onChange={setNotes}
          />
        </div>

        <div className="flex gap-2 py-4 font-bold border-t border-gray-200">
          <span>Total: $</span>
          <span>{total || 0}</span>
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary font-semibold mt-4 bg-sky-400 rounded-full px-6 py-2 ">
          Generate
        </button>
      </div>
      <ToastContainer />
    </section>
  )
}

export default InvoiceGen
