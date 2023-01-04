import useFirestore from "../../Hooks/useFirestore"
import { useState,useEffect } from "react"
function AdminViewInvoice() {

const [invoice, setInvoice] = useState([])
const { loading, error, getDocument,document } = useFirestore()
useEffect(() => {
  getDocument("invoices")
  setInvoice(data)
}, [])

  return(
   <section className="bg-white shadow-md rounded px-20 pt-20 pb-8 mb-4 min-h-screen">
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
          </div>
    </section>
   )
}

export default AdminViewInvoice
