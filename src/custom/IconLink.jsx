import React from 'react'
import { Link } from 'react-router'

function IconLink({title,icon}) {
  return (
    <Link to={title} className="text-gray-700 hover:text-gray-900">{icon}</Link>

  )
}

export default IconLink