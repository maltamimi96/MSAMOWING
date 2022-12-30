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

  return { loading, error, data, addDocument }
}

export default useFirestore
