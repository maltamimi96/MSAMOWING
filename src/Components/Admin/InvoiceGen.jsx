import React from "react"
import logoSm from "../../assets/logo-sm.png"
import { useState, useEffect } from "react"

function InvoiceGen({ customerName, address, phone, services }) {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [newItem, setNewItem] = useState({ name: "", quantity: 0, price: 0 })
  const handleAddItem = (e) => {
    e.preventDefault()
    setItems([...items, newItem])
    setNewItem({})
  }

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }
  useEffect(() => {
    let newTotal = 0
    items.forEach((item) => {
      newTotal += item.data.price * item.data.quantity
    })
    setTotal(newTotal)
  }, [items])
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-4">Invoice</h1>
      <form onSubmit={handleAddItem}>
        <input
          className="border rounded w-full py-2 px-3 mb-2"
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          className="border rounded w-full py-2 px-3 mb-2"
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <input
          className="border rounded w-full py-2 px-3 mb-2"
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit">
          Add item
        </button>
      </form>
      <table className="w-full text-left table-collapse">
        <thead>
          <tr>
            <th className="text-sm font-semibold text-grey-darker p-2 bg-grey  )"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item?.id}>
              <td className="p-2 border-t border-grey-light">
                {item?.data.name}
              </td>
              <td className="p-2 border-t border-grey-light">
                {item?.data.quantity}
              </td>
              <td className="p-2 border-t border-grey-light">
                {item?.data.price}
              </td>
              <td className="p-2 border-t border-grey-light">
                {item?.data.price * item.data.quantity}
              </td>
              <td className="p-2 border-t border-grey-light">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 flex justify-end">
        <div className="text-2xl font-bold">Total: {total}</div>
      </div>
    </div>
  )
}

export default InvoiceGen
