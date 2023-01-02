import { useRef, useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import useFirestore from "../../Hooks/useFirestore"

function InvoiceGen2() {
  const [formData, setFormData] = useState({
    customerName: "",
    invoiceNumber: "",
    invoiceDate: "",
    notes: "",
    items: [],
    total: 0,
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function handleAddItem() {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        {
          name: "",
          price: "",
          quantity: "",
        },
      ],
    })
  }

  function handleUpdateItem(index, event) {
    const { name, value } = event.target
    const items = [...formData.items]
    items[index][name] = value
    setFormData({ ...formData, items })
  }

  function handleRemoveItem(index) {
    const items = [...formData.items]
    items.splice(index, 1)
    setFormData({ ...formData, items })
  }

  useEffect(() => {
    let total = 0
    formData.items.forEach((item) => {
      total += item.price * item.quantity
    })
    setFormData({ ...formData, total })
  }, [formData.items])
  console.log(formData)
  return (
    <section className="bg-white shadow-md rounded px-20 pt-20 pb-8 mb-4 min-h-screen ">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between py-4 font-bold border-b border-gray-200">
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
            <h4 className="text-left font-semibold">
              Email : msamowing@gmail.com
            </h4>
            <h4 className="text-left font-semibold">Phone : +61 493 498 074</h4>
          </div>
          <div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="customerName"
              placeholder="Customer Name"
              value={formData.customerName}
              onChange={handleChange}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="invoiceNumber"
              placeholder="Invoice #"
              value={formData.invoiceNumber}
              onChange={handleChange}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="invoiceDate"
              placeholder="Invoice Date"
              value={formData.invoiceDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="py-4 border-b border-gray-200">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
          />
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {formData.items.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="name"
                      value={item.name}
                      onChange={(event) => handleUpdateItem(index, event)}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="price"
                      value={item.price}
                      onChange={(event) => handleUpdateItem(index, event)}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      onChange={(event) => handleUpdateItem(index, event)}
                    />
                  </td>
                  <td className="px-4 py-2">{item.price * item.quantity}</td>
                  <td className="px-4 py-2">
                    <button
                      className="btn btn-link"
                      onClick={() => handleRemoveItem(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="px-4 py-2 font-bold">
                  Total
                </td>
                <td className="px-4 py-2 font-bold">{formData.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-4 flex justify-end">
          <button className="btn" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
      </div>
    </section>
  )
}

export default InvoiceGen2
