import React from "react"
import { useState, useEffect } from "react"

import useFirestore from "../../Hooks/useFirestore"
import { useParams } from "react-router-dom"

function AdminCustomerProfile() {
  const { loading, error, document, getDocument } = useFirestore()
  const { id } = useParams()

  useEffect(() => {
    getDocument("customers", id)
    console.log(document)
  }, [])
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen ">
      <div className="mx-auto container m-auto md:p-20">
        <h2 className="mb-12 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center md:text-left ">
          {document?.address}
        </h2>
        <p className="font-light mb-6 text-justify leading-relaxed text-gray-500 sm:text-xl dark:text-gray-200 break-words"></p>
        <h4 className="mb-4 text-md lg:text-sm  font-light text-gray-900 dark:text-white  text-left "></h4>
      </div>
    </section>
  )
}

export default AdminCustomerProfile
