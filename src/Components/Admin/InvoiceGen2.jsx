import { useRef, useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import useFirestore from "../../Hooks/useFirestore"

function InvoiceGen2() {
  const [items, setItems] = useState([]) // the first item in items array ,it displays by default
  const [newItem, setNewItem] = useState({ item: "", quantity: 0, amount: 0 }) //this is the new item that should be added to item
  const [total, setTotal] = useState(0)

  const handleAddItem = () => {
    setItems([...items, newItem]) //spreads the items, then adds new item
    setNewItem({ item: "", quantity: 0, amount: 0 }) //resets the new item to be the empty default
  }

  const handleDelete = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const { loading, error, data, addDocument } = useFirestore()
  const [formData, setFormData] = useState({})

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
    let newTotal = 0 //starts at 0,place holder variable
    items.forEach((item, index) => {
      //loops through items
      console.log(item)
      newTotal += item?.quantity * item?.amount // for each item u increment by the  q * a
    })
    setTotal(newTotal)
    setFormData({
      ...formData,
      items: items,
      total: total,
    })
  }, [items, total]) // runs whenever items changes

  // console.log("form data is --", formData)
  return (
    <section className="bg-white shadow-md rounded px-20 pt-20 pb-8 mb-4 min-h-screen ">
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-5">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/msa-mowing.appspot.com/o/logo-sm.png?alt=media&token=fa8cffca-f2c1-435f-9e5d-9273eb72513c"
            }
            alt="Logo"
            className="h-12 mb-4"
          />
          <h4 className="text-left font-semibold">ABN : 73 882 493 738 </h4>
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
                  <h4 className="text-md text-center py-6  ">{index}</h4>
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
                    required
                    onChange={(e) => {
                      setNewItem({ ...newItem, item: e.target.value })
                    }}
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
                    required
                    onChange={(e) => {
                      setNewItem({ ...newItem, quantity: e.target.value })
                    }}
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
                    required
                    onChange={(e) => {
                      setNewItem({ ...newItem, amount: e.target.value })
                    }}
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
          <h3 className="text-1xl ">Total : ${total}</h3>
        </div>
        <div className="mb-4">
          <button
            className="bg-emerald-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Generate Invoice
          </button>
        </div>
      </form>
      <ToastContainer />

      {items.map((item) => {
        {
          Object.entries(item).map(([key, value]) => (
            <div key={key}>
              <span>{key}: </span>
              <span>{value}</span>
            </div>
          ))
        }
      })}
    </section>
  )
}

export default InvoiceGen2
