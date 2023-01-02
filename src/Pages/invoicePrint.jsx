import { useRef } from "react"
import InvoicePage from "./InvoicePage"
function invoicePrint() {
  return (
    <div>invoicePrint

<ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
    </div>
  )
}

export default invoicePrint