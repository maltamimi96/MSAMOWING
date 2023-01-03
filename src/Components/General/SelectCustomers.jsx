import useFirestore from "../../Hooks/useFirestore"
import { useState, useEffect } from "react"

function SelectCustomers() {
  const { loading, error, data, getDocuments } = useFirestore()
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getDocuments("customers")
    setCustomers(data)
  }, [])
  console.log(customers)
  return (
    <div>
      <label for="countries" class="block mb-2 text-sm font-bold text-zinc-600">
        Select an option
      </label>
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-200 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a Customer</option>
        {data?.map((customer) => (
          <option value={customer?.id}>{customer?.customerName}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectCustomers
