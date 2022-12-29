import React from "react"
import logoSm from "../../assets/logo-sm.png"

function InvoiceGen({ customerName, address, phone, services }) {
  return (
    <div className="p-10 font-sans bg-white  min-h-screen">
      <div className="text-center mb-5">
        <img src={logoSm} alt="Logo" className="h-12" />
      </div>
      <h2 className="text-3xl  font-bold mb-5 text-center">
        Invoice Generator
      </h2>
      <div className="flex justify-between mb-10">
        <div className="w-1/2">
          <h3 className="font-bold mb-2">From:</h3>
        </div>
        <div className="w-1/2">
          <h3 className="font-bold mb-2">To:</h3>
          <div>{customerName}</div>
          <div>{address}</div>
          <div>{phone}</div>
        </div>
      </div>
      <table className="rounded w-full border-collapse  mb-10">
        <thead className="rounded">
          <tr>
            <th className="border rounded bg-slate-400  px-4 py-2">
              Description
            </th>
            <th className="border rounded bg-slate-400 px-4 py-2">Quantity</th>
            <th className="border rounded bg-slate-400 px-4 py-2">Price</th>
            <th className="border rouned bg-slate-400 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <td></td>
        </tbody>
      </table>
      <div className="flex justify-end">
        <div className="w-1/2 text-right">
          <div className="font-bold">Subtotal:</div>
          <div className="font-bold">Tax:</div>
          <h3 className="font-bold">Total:</h3>
        </div>
        {/* <div className="w-1/2">
          <div>{subtotal}</div>
          <div>{tax}</div>
          <h3>{total}</h3>
        </div> */}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-primary bg-emerald-400 p-4 rounded-full">
          Export PDF
        </button>
      </div>
    </div>
    // onClick={exportPDF}
  )
}

export default InvoiceGen
