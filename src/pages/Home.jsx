import React, { useEffect } from 'react'
import Banner from '../components/banner/Banner.jsx'
import CategorySection from '../components/categorysection/CategorySection.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate()
    const isLoggedInUserStatus = useSelector((state)=>state.auth.isLoggedIn)
    
    useEffect(()=>{
      console.log("lo ",isLoggedInUserStatus);
      if(isLoggedInUserStatus==false) {navigate('/')}
    },[])

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