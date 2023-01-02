import { useRef, useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import useFirestore from "../../Hooks/useFirestore"

function InvoiceGen2() {
  const { loading, error, data, addDocument } = useFirestore()

  const [formData, setFormData] = useState({
    customerName: "",
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
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

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument("invoices", formData)
      .then(() => {
        toast("Article Added Succesfuly")
      })
      .catch((error) => toast(error))
  }
  return (
    <section className="bg-white shadow-md rounded px-20 pt-20 pb-8 mb-4 min-h-screen ">
      <form onSubmit={handleSubmit}>

      
      <div className="container mx-auto p-4">
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
        <div className="flex items-center justify-between py-4 font-bold border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:gap-20">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="client-name">
                Client Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="customerName"
                placeholder="Customer Name"
                value={formData.customerName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="client-name">
                Invoice Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="invoiceNumber"
                placeholder="Invoice #"
                value={formData.invoiceNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="client-name">
                Invoice Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="invoiceDate"
                placeholder="Invoice Date"
                value={formData.invoiceDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="client-name">
                Due date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="dueDate"
                placeholder="Invoice Date"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="py-4  border-b border-gray-200 my-20">
          <table className="w-full">
            <thead className="bg-gray-400 rounded">
              <tr>
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="">
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
                      className="btn btn-primary uppercase text-red-600 font-semibold text-1xl   p-4 rounded md:text-sm"
                      onClick={() => handleRemoveItem(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-4 flex justify-end">
          <button
            className="btn btn-primary mt-4 text-emerald-600 font-semibold"
            onClick={handleAddItem}>
            + Add Item
          </button>
        </div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="client-name">
          Notes
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="notes"
          placeholder="Payment details etc..."
          rows={10}
          value={formData.notes}
          onChange={handleChange}
        />
        <h4  className="font-bold">total: <span className="font-light">${formData.total}</span></h4>
      </div>
      <button
        className="btn btn-primary font-semibold mt-4 bg-sky-400 rounded-full px-6 py-2 "
        type="submit">
        Generate
      </button>
      </form>
      <ToastContainer />
    </section>
  )
}

export default InvoiceGen2
