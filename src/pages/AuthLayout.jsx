import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useDirectLoginUserQuery } from '../../api/apiCallingForUser';

function AuthLayout({children}) {
    const navigate = useNavigate()
    const loggedInUserStatus = useSelector((state)=>state.auth?.loggedInUser)
   
    
    useEffect(()=>{
        if(!loggedInUserStatus){
            navigate('/')
        }
    },[loggedInUserStatus])
    return <>{children}</>
}

export default AuthLayout