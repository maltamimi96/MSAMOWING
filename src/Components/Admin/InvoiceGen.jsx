import React from "react"
import logoSm from "../../assets/logo-sm.png"
import { useState, useEffect } from "react"

function InvoiceGen() {
  const [formData, setFormData] = useState({})
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [editingIndex, setEditingIndex] = useState(-1)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))

    setTotal(calculateTotal())
  }

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
  useEffect(() => {
    setTotal(calculateTotal())
  }, [items])
  return (
    <section className="bg-white shadow-md rounded px-20 pt-20 pb-8 mb-4 min-h-screen ">
      <div className="text-center mb-5">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/msa-mowing.appspot.com/o/logo-sm.png?alt=media&token=fa8cffca-f2c1-435f-9e5d-9273eb72513c"
          }
          alt="Logo"
          className="h-12 mb-4"
        />
        <h4 className="text-left font-semibold">ABN : 73 882 493 738 </h4>
        <h4 className="text-left font-semibold">Email : msamowing@gmail.com</h4>
        <h4 className="text-left font-semibold">Phone : +61 493 498 074</h4>
      </div>
      <div className="mb-4 flex gap-2">
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
          />
        </div>
      </div>
      <div className="container mx-auto">
        {editingIndex === -1 ? (
          <form className="mb-4 flex gap-2">
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
          <form className="mb-4">
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
              className="btn btn-primary mt-4 mr-2"
              type="button"
              onClick={saveEdit}>
              Save
            </button>
            <button
              className="btn btn-secondary mt-4"
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
              className="flex gap-2 items-center justify-between py-2 border-b border-gray-200">
              <span className="font-bold">{item.name}</span>
              <span className="font-bold">{item.quantity}</span>
              <span className="font-bold">{item.price}</span>
              {editingIndex === index ? (
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={cancelEdit}>
                  Cancel
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-secondary mr-2"
                    type="button"
                    onClick={() => editItem(index)}>
                    Edit
                  </button>
                  <button
                    className="btn btn-primary mt-4 text-red-600 font-semibold"
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
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Work performed, etc."
            name="description"
            rows={20}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between py-4 font-bold border-t border-gray-200">
          <span>Total:</span>
          <span>{total || 0}</span>
        </div>
        <button className="btn btn-primary mt-4 bg-sky-400 rounded-full px-6 py-2 ">
          Print
        </button>
      </div>
    </section>
  )
}

export default InvoiceGen
