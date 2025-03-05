import React, { useEffect } from 'react'
import Banner from '../components/banner/Banner.jsx'
import CategorySection from '../components/categorysection/CategorySection.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useGetAllProductQuery } from '../../api/apiCallingForProduct.js'
import { saveAllProduct } from '../../store/productSlice.js'
import { getRandomData } from '../../utils/getRandomData.js'
import Card2 from '../components/card/Card2.jsx'

function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoggedInUserStatus = useSelector((state)=>state.auth.isLoggedIn)
    const {data,isError,isLoading,isSuccess} = useGetAllProductQuery()
    useEffect(()=>{
      if(isSuccess) dispatch(saveAllProduct({data:data}))
      if(isLoggedInUserStatus==false) {navigate('/')}
    },[data,isError])
    const allProduct = useSelector((state)=>state.product.allProduct.product)

  return (
    <>
    {/* banner */}
    <Banner/>

    {/* category section*/}
    <CategorySection/>

    {/*  */}
    <div>
    <div>
      <h1>Best Seller</h1>
    </div>
    {
     allProduct && getRandomData(allProduct,1).map((product,idx)=><Card2 key={idx} />)
    }
    </div>
    </>

  )
}

export default Home