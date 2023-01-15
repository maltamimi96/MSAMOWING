import React, { useState } from "react"
import Navbar from "../Components/General/Navbar"

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <div className="flex flex-col justify-between gap-10">
        <Navbar />
        <div>
          <div>
            {images?.map((image, index) => (
              <img
                key={index}
                src={image?.thumbnail}
                onClick={() => setSelectedImage(image?.full)}
                alt={image?.name}
              />
            ))}
          </div>
          {selectedImage && (
            <div>
              <img src={selectedImage} alt="Selected" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Gallery
