import { useState, useEffect } from "react"
import useFirestore from "../../Hooks/useFirestore"
import Card from "../General/card"

function AdminViewCustomers({ category }) {
  const [customers, setCustomers] = useState([])
  const { loading, error, data, getDocuments } = useFirestore()

  useEffect(() => {
    getDocuments("customers")
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
        <div className="grid gap-8 lg:grid-cols-1">
          ={" "}
          {data?.map((res) => (
            <Card
              key={res?.id}
              name={res?.customerName}
              address={res?.address}
              phone={res?.phone}
              customerId={res?.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminViewCustomers
