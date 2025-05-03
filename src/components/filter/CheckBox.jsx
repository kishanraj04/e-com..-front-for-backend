import React from 'react'

function CheckBox({type,name,title,method}) {

  const handleChange = (e)=>{
    const {checked,value} = e?.target
    if(checked){
        console.log(e?.target?.value);
    method((prev)=>[...prev,value])
    }else{
        method((prev)=>prev.filter((val)=>val!=value))
    }
    
  }

  return (
    <div>
        <input type={type} name={name} value={title} id={title} onChange={handleChange}/>
        <label htmlFor={title} className='text-xl'>{title}</label>
    </div>
  )
}

export default CheckBox