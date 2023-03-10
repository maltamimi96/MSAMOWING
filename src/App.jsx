import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Footer from "./Components/General/Footer"
import Navbar from "./Components/General/Navbar"
import PrivateRoutes from "./Components/General/PrivateRoutes"
import { StateContext } from "./Context/stateContext"
import Admin from "./Pages/Admin"
import Landing from "./Pages/Landing"
import Login from "./Pages/Login"
import { useReducer } from "react"
import { initialState } from "./Context/initialState"
import { reducer } from "./Context/reducer"
import InvoiceGen2 from "./Components/Admin/InvoiceGen2"
import CreateCustomer from "./Components/Admin/CreateCustomer"
import AdminViewCustomers from "./Components/Admin/AdminViewCustomers"
import AdminCustomerProfile from "./Components/Admin/AdminCustomerProfile"
import AdminViewInvoices from "./Components/Admin/AdminViewInvoices"
import AdminViewInvoice from "./Components/Admin/adminViewInvoice"
import Gallery from "./Pages/Gallery"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"

function App() {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <StateContext.Provider value={{ store, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />

            {/* admin routes */}
            <Route path="login" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/admin" element={<Admin />}>
                <Route path="create-customer" element={<CreateCustomer />} />
                <Route path="view-customers" element={<AdminViewCustomers />} />
                <Route path="view-invoices" element={<AdminViewInvoices />} />

                <Route path="invoice-gen" element={<InvoiceGen2 />} />
                <Route
                  path="view-invoices/invoice/:id"
                  element={<AdminViewInvoice />}
                />
                <Route
                  path="view-customers/customer/:id"
                  element={<AdminCustomerProfile />}
                />

                <Route />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  )
}

export default App
