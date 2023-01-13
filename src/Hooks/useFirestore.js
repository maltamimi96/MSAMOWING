import { useState } from "react"
import { db } from "../Firebase/firebase-config"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  doc,
} from "firebase/firestore"

function useFirestore() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [document, setDocument] = useState(null)

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
  const getDocuments = async (colName) => {
    try {
      const ref = collection(db, colName)
      const documents = await getDocs(ref)
      setData(documents.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }
  const getDocument = async (colName, id) => {
    const docRef = doc(db, colName, id)
    await getDoc(docRef)
      .then((doc) => {
        setDocument(doc.data())
      })
      .catch((error) => console.log(error))
  }

  return {
    loading,
    error,
    data,
    addDocument,
    getDocuments,
    getDocument,
    document,
  }
}

export default useFirestore
