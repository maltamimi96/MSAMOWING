import { useState, useEffect } from "react"
import { db } from "../../firebase/firebase-config"

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"

function AdminViewCustomers({ category }) {
  const [blogs, setBlogs] = useState([])
  const usersCollectionRef = collection(db, category)

  const getBlogs = async () => {
    const data = await getDocs(usersCollectionRef)
    setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  useEffect(() => {
    getBlogs()
  }, [])
  return (
    <section class="bg-white dark:bg-gray-900 min-h-screen">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Maltreatment Section
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Articles Speaking About My Experience
          </p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          {blogs.map((blg) => (
            <></>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminViewCustomers
