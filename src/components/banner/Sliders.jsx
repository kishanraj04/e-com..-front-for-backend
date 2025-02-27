import React from 'react'
import img1 from '../../../public/images/img1.jpg'
import { SwiperSlide } from 'swiper/react'
function Sliders({image}) {
  return (
    <SwiperSlide>
        <img src={image} className='w-full h-[15rem]'/>
    </SwiperSlide>
  )
}

export default Sliders