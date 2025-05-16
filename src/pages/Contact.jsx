import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSaveContactMutation } from '../../api/apiCallingForContact';
import {toast} from 'react-toastify'

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function Contact() {

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  
  const [saveContact,contactResp] = useSaveContactMutation()

  const handleContactSubmit = async(e) => {
    e.preventDefault();
    if(nameRef?.current?.value?.length<=2){
       toast.error("name is to short")
       return
    }

    else if(!isValidEmail(emailRef?.current?.value)){
       toast.error("invalid email")
       return
    }
    else if(messageRef?.current?.value?.length<=20){
      toast.error("message is to short")
      return
    }
    
    const contact = {
      name:  nameRef.current?.value, 
      email: emailRef.current?.value,
      message: messageRef.current?.value
    }

    const resp = await saveContact(contact)
    if(resp?.data){
      toast.success("message saved")
    }else{
      toast.error("message not send")
    }
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