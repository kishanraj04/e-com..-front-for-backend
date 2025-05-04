import React from 'react'

function Card({ title, value, subtext }) {
  return (
    <>
      <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col justify-between">
    <div>
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-xl font-semibold">{value}</p>
    </div>
    {subtext && (
      <p
        className={`text-sm mt-2 ${
          subtext.includes("-") ? "text-red-500" : "text-green-500"
        }`}
      >
        {subtext}
      </p>
    )}
  </div>
    </>
  )
}

export default Card