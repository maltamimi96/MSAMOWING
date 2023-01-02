import { useRef, useCallback } from "react"
import InvoicePage from "./InvoicePage"
import ReactToPrint from "react-to-print"

function invoicePrint() {
  const componentRef = useRef(null)
  const reactToPrintContent = useCallback(() => {
    return componentRef.current
  }, [componentRef.current])
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={reactToPrintContent}
        documentTitle="AwesomeFileName"
      />
      <InvoicePage ref={(el) => (componentRef = el)} />
    </div>
  )
}

export default invoicePrint
