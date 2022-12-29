import { Navigate, Outlet } from "react-router-dom"
function PrivateRoutes() {
  const loggedIn = sessionStorage.getItem("Auth Token")
  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />
}

export default PrivateRoutes
