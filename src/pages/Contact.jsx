import React, { useEffect, useRef } from 'react'
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
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)


  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    console.log(
      nameRef.current?.value, 
      emailRef.current?.value, 
      messageRef.current?.value
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
      
      {/* Contact Information */}
      <div className="text-center mb-6">
        <p className="text-gray-600">Have questions? We'd love to hear from you!</p>
        <p className="text-gray-700 font-medium mt-2">📍 123 E-Commerce St, Your City</p>
        <p className="text-gray-700 font-medium">📞 +1 (234) 567-890</p>
        <p className="text-gray-700 font-medium">✉️ support@yourecommerce.com</p>
      </div>

      {/* Contact Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Your Name</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            ref={nameRef}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Your Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            ref={emailRef}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
            ref={messageRef}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={(e)=>handleContactSubmit(e)}
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
  )
}

export default Contact