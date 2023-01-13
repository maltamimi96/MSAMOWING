import React, { useState } from "react"
import mower from "../../assets/mower.png"
import { Link } from "react-router-dom"

function ServiceCard(props) {
  const [hover, setHover] = useState(false)

  return (
    <div className="w-full lg:w-1/4  text-center">
      <Link to="/lawn-mowing" className="block">
        <img
          src={props.url}
          alt="lawn mowing"
          className="h-60 w-full object-cover rounded-lg hover:opacity-75 transition duration-150 ease-in-out"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4"></h3>
        <div className={`p-2 text-black `}>
          <h3 className="text-lg font-medium">{props.title}</h3>
        </div>
      </Link>
      <p className="text-gray-500 mt-2  text-center">{props.description}</p>
    </div>
  )
}

export default ServiceCard
