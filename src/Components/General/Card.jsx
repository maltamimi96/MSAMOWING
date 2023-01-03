import React from "react"
import { Link } from "react-router-dom"

function Card(props) {
  return (
    <div className="p-6   text-ellipsis bg-white  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white  ">
        {props.name}
      </h2>
      <div className="flex flex-col justify-between">
        <h4 className="text-sm mb-2 font-light tracking-tight text-gray-800 dark:text-zinc-300">
          {props.address}
        </h4>
        <h4 className="text-sm mb-2 font-light tracking-tight text-gray-800 dark:text-zinc-300">
          {props.phone || "No Phone"}
        </h4>
        <Link to={"/"} className="text-emerald-400">
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default Card
