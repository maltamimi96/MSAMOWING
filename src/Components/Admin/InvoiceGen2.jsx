import { useRef, useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import useFirestore from "../../Hooks/useFirestore"

function InvoiceGen2() {
  const [items, setItems] = useState([{ item: "", quantity: 0, amount: 0 }])

  const [total, setTotal] = useState(0)

  const handleAddItem = (e) => {
    setItems([...items, { item: "", quantity: 0, amount: 0 }])
  }

  const handleDelete = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const { loading, error, data, addDocument } = useFirestore()

  const [formData, setFormData] = useState({
    img: "https://firebasestorage.googleapis.com/v0/b/msa-mowing.appspot.com/o/logo-sm.png?alt=media&token=fa8cffca-f2c1-435f-9e5d-9273eb72513c",
    abn: "ABN : 73 882 493 738",
    email: "msamowing@gmail.com",
    phone: "+61 493 498 074",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument("invoices", formData)
  }

  useEffect(() => {
    let newTotal = 0
    items.forEach((item) => {
      newTotal += item.quantity * item.price
    })
    setTotal(newTotal)
  }, [items])
  console.log(typeof items, "total", total)
  return (
    <section className="bg-white shadow-md rounded px-20 pt-20 pb-8 mb-4 min-h-screen ">
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-5">
          <img src={formData?.img} alt="Logo" className="h-12 mb-4" />
          <h4 className="text-left font-semibold">{formData?.abn} </h4>
          <h4 className="text-left font-semibold">
            Email : msamowing@gmail.com
          </h4>
          <h4 className="text-left font-semibold">Phone : +61 493 498 074</h4>
        </div>
        {/* Client Name Section */}
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
        {/* Services Section */}
        <div className="mb-4 flex gap-2">
          <div>
            {items?.map((input, index) => (
              <div key={input?.id} className="flex gap-4">
                <div className="">
                  <h4 className="text-sm text-center  ">{index}</h4>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="Item">
                    Item
                  </label>

                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="invoice-date"
                    type="text"
                    name="item"
                    value={input?.item}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="Item">
                    Quantity
                  </label>

                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="quantity"
                    type="number"
                    name="quantity"
                    value={input?.quantity}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="amount">
                    Amount
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount"
                    type="number"
                    placeholder="$100.00"
                    name="amount"
                    value={input?.amount}
                  />
                </div>
                <div className="m-auto pt-4 flex gap-4">
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 text-sm font-light">
                    - remove
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={handleAddItem}
              className="text-1xl text-sky-600 hover:text-red-400">
              + Add Item
            </button>
          </div>
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
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="amount">
            Total
          </label>
          <h3>Total :$ </h3>
        </div>
        <div className="mb-4">
          <button
            className="bg-emerald-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Generate Invoice
          </button>
        </div>
        <h3>{total}</h3>
      </form>
      <ToastContainer />
    </section>
  )
}

export default InvoiceGen2
