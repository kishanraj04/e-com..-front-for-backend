import React from 'react'
import { useLocation } from 'react-router'

function CategoryPage() {
  const {pathname} = useLocation()
  console.log(pathname);
  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage