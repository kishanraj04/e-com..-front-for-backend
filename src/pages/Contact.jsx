import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function Contact() {

  // const navigate = useNavigate()
  // const isLoggedInUserStatus = useSelector((state)=>state.auth.isLoggedIn)
  // console.log(isLoggedInUserStatus);
  
  // useEffect(()=>{
  //   console.log("lo ",isLoggedInUserStatus);
  //   if(isLoggedInUserStatus==false) {navigate('/')}
  // },[])

  return (
    <div>Contact</div>
  )
}

export default Contact