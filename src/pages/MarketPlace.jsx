import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'

function MarketPlace() {

  const navigate = useNavigate()
  const isLoggedInUserStatus = useSelector((state)=>state.auth.isLoggedIn)
  console.log(isLoggedInUserStatus);
  
  useEffect(()=>{
    console.log("lo ",isLoggedInUserStatus);
    if(isLoggedInUserStatus==false) {navigate('/')}
  },[])
 
  return (
    <div>Market Place</div>
  )
}

export default MarketPlace