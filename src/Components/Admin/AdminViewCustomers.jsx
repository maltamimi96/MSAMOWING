import { useState, useEffect } from "react"
import { db } from "../../firebase/firebase-config"
import useFirestore from "../../Hooks/useFirestore"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"
import Card from "../General/card"

function AdminViewCustomers({ category }) {
  const [customers, setCustomers] = useState([])
  const usersCollectionRef = collection(db, "customers")

  const getCustomers = async () => {
    const data = await getDocs(usersCollectionRef)
    setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
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
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Customers List
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            List of Customers
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-1">
          {data?.map((res) => (
            <Card key={res.id} name={res.customerName} address={res.address} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminViewCustomers
