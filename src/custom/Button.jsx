import React from 'react'

function Button({title}) {
  return (
    <button className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300">
    {title}
  </button>
  )
}

export default Button