import React from 'react'
import { Link } from 'react-router'

function LinkTag({title}) {
 
  return (
    <Link to={`${title=="Home"?"/":title}`}  className="text-gray-700 hover:text-gray-900">{title}</Link>
  )
}

export default LinkTag