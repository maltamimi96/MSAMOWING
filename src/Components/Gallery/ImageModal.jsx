import React, { useState } from "react"

function ImageModal({ imageSrc }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <img
        onClick={openModal}
        src={imageSrc}
        alt="Full screen"
        className="cursor-pointer block object-cover object-center w-full h-full rounded-lg"
      />
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <img
            src={imageSrc}
            alt="Full screen"
            className="max-w-full max-h-full"
          />
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-4 text-white font-bold bg-red-500 p-2 rounded-full hover:bg-red-600">
            CLOSE
          </button>
        </div>
      )}
    </>
  )
}

export default ImageModal
