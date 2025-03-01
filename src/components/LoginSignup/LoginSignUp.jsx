import React, { useState } from "react";

const SignInSignUp = () => {
  const [pageStatus, setPageStatus] = useState({ signIn: true });

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative w-4/5 max-w-4xl h-[500px] shadow-lg rounded-lg overflow-hidden">
        {/* Left Section: Sign In */}
        <div
          className={`absolute w-1/2 h-full bg-white p-8 flex flex-col justify-center transform transition-transform duration-500 ease-in-out ${
            pageStatus.signIn ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            {pageStatus.signIn ? "Sign In" : "Sign Up"}
          </h2>
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300">
              F
            </button>
            <button className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300">
              G+
            </button>
            <button className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300">
              in
            </button>
          </div>
          <p className="text-center text-gray-500 mb-6">or use your account</p>
          {/* Form */}
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {
              !pageStatus.signIn ? <input
              type="tel"
              placeholder="Contact"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            /> : ''
            }
            <p className="text-sm text-right text-gray-500 hover:underline cursor-pointer mb-4">
              Forgot your password?
            </p>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600"
            >
              {pageStatus.signIn ? "SIGN IN" : "SIGN UP"}
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div
          className={`absolute w-1/2 h-full bg-gradient-to-r from-red-400 to-pink-500 p-8 text-white flex flex-col justify-center items-center transform transition-transform duration-500 ease-in-out ${
            pageStatus.signIn ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
          <p className="text-center mb-6">
            Enter your personal details and start your journey with us
          </p>
          <button
            className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition"
            onClick={() =>
              setPageStatus((prev) => ({ ...prev, signIn: !pageStatus.signIn }))
            }
          >
            {pageStatus.signIn ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
