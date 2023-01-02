import React from 'react'
import useFirestore from "../Hooks/useFirestore"


function InvoicePage() {
    const { loading, error, data, addDocument } = useFirestore()

  return (
    <div className="text-center mb-5">
    <div
      className="flex justify-between flex-wrap
  ">
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/msa-mowing.appspot.com/o/logo-sm.png?alt=media&token=fa8cffca-f2c1-435f-9e5d-9273eb72513c"
        }
        alt="Logo"
        className="h-12 mb-4"
      />
      <h1 className="text-6xl uppercase">Invoice</h1>
    </div>

    <h4 className="text-left font-semibold">ABN : 73 882 493 738 </h4>
    <h4 className="text-left font-semibold">
      Email : msamowing@gmail.com
    </h4>
    <h4 className="text-left font-semibold">Phone : +61 493 498 074</h4>
  </div>  )
}

export default InvoicePage