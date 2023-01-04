import { useState, useEffect } from "react"
import useFirestore from "../../Hooks/useFirestore"
import Card from "../General/card"
import { Link } from "react-router-dom"
function AdminViewInvoices({ category }) {
  const [customers, setCustomers] = useState([])
  const { loading, error, data, getDocuments } = useFirestore()

  useEffect(() => {
    getDocuments("invoices")
    setCustomers(data)
  }, [])
  console.log(customers)
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl uppercase lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Customers List
          </h2>
          <p className=" uppercasefont-light text-gray-500 text-2xl dark:text-gray-400">
            Total Customers :
            <span className="text-emerald-400 text-2xl">{data?.length}</span>
          </p>
        </div>
        <div className=" rounded px-20 ">
          {data?.map((res) => (
            <div
              key={res.id}
              className="w-fit  bg-gray-200 rounded p-10 "
              style={{ width: "800px" }}>
              <div className="flex justify-between">
                <h1 className="text-1xl uppercase">Invoice</h1>
                <h1 className="text-1xl uppercase">
                  Issued: {res.invoiceDate}
                </h1>
              </div>
              <h1 className="text-2xl uppercase">{res.customerName}</h1>

              <span>$:{res.total}</span>
              <div className="pl-">
                <Link to={`invoice/${res.id}`} className="text-emerald-600 ">
                  View Invoice
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminViewInvoices
