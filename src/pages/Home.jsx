import React from 'react'
import Banner from '../components/banner/Banner.jsx'
import CategorySection from '../components/categorysection/CategorySection.jsx'

function Home() {
  console.log("cookie " ,document.cookie);

  return (
    <>
    {/* banner */}
    <Banner/>

    {/* category section*/}
    <CategorySection/>
    </>

  )
}

export default Home