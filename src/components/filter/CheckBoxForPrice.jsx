import React from 'react'

function CheckBoxForPrice({type,value,method}) {
    const handleChange = (e)=>{
        const {checked,value} = e.target
        if(checked){
            method((prev)=>[...prev,value])
        }else{
            method((prev)=>prev.filter((item)=>item!=value))
        }
    }
  return (
    <div>
    <input type={type} name={value?.title} value={value?.price} id={value?.title} onChange={handleChange}/>
    <label htmlFor={value?.title} className='text-xl'>{value?.title}</label>
</div>
  )
}

export default CheckBoxForPrice