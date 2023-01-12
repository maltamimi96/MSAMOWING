import React from "react"
import mower from "../../assets/mower.png"
function ServiceCard(props) {
  return (
    <div className="w-full lg:w-1/4  text-center">
      <img src={props.url} className="" />
      <h3 className="text-2xl text-left font-semibold uppercase  text-gray-800 mt-4">
        {props.title}
      </h3>
      <p className="text-gray-500 mt-2 text-left">{props.description}</p>
    </div>
  )
}

export default ServiceCard
