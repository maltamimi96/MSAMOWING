import React, { useState } from "react"
import { Link } from "react-router-dom"
import ImageModal from "../Components/Gallery/ImageModal"
import Navbar from "../Components/General/Navbar"
const images = [
  {
    name: "edges",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/PXL_20230111_092354479.jpg?alt=media&token=4f5c925b-9f1b-42f7-8730-1b88f0549f64",
    full: "https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/PXL_20230111_092354479.jpg?alt=media&token=4f5c925b-9f1b-42f7-8730-1b88f0549f64",
  },
]
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <main className="flex flex-col justify-between  bg-green-700">
        <Navbar />

        <section className="overflow-hidden text-gray-700 min-h-screen bg-gray-200">
          <div className=" container m-auto">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row p-2">
              <div className=" md:w-1/4 m-4  ">
                <ImageModal
                  imageSrc={
                    "https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/PXL_20230111_092354479.jpg?alt=media&token=4f5c925b-9f1b-42f7-8730-1b88f0549f64"
                  }
                />
              </div>
              <div className="md:w-1/4 m-4">
                <ImageModal
                  imageSrc={
                    "https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/PXL_20230111_092354479.jpg?alt=media&token=4f5c925b-9f1b-42f7-8730-1b88f0549f64"
                  }
                />
              </div>
              <div className="md:w-1/4 m-4">
                <ImageModal
                  imageSrc={
                    "https://firebasestorage.googleapis.com/v0/b/msamowing-f8bb5.appspot.com/o/PXL_20230111_092354479.jpg?alt=media&token=4f5c925b-9f1b-42f7-8730-1b88f0549f64"
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Gallery
