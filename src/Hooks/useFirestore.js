import { useState } from "react"
import { db } from "../Firebase/firebase-config"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"

function useFirestore() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const addDocument = async (colName, data) => {
    try {
      const ref = collection(db, colName)
      await addDoc(ref, data)
      setData(data)
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }
  const createBlog = async (data, col) => {
    const usersCollectionRef = collection(db, col)

    await addDoc(usersCollectionRef, data)
  }

  return { loading, error, data, addDocument, createBlog }
}

export default useFirestore
