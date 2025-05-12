import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // corrected import
import { useUpdateSingleUserDataMutation } from "../../../api/apiCallingForUser";
import { updateUser } from "../../../utils/logoutUser";

const UpdateForm = () => {
  const { state } = useLocation();
  const [updateMethod,updateResp] = useUpdateSingleUserDataMutation()
  const [userDetailed, setUserDetailed] = useState({
    name: "",
    email: "",
    contact: "",
  });

  useEffect(() => {
    if (state?.user) {
      setUserDetailed({
        _id:state?.user?._id,
        password:state?.user?.password,
        role:state?.user?.role,
        name: state?.user?.name || "",
        email: state?.user?.email || "",
        contact: state.user.contact || "",
      });
    }
  }, [state]); // added state as a dependency (best practice)

  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetailed((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update User Info
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={userDetailed.name}
              onChange={handleOnChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userDetailed.email}
              onChange={handleOnChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Contact</label>
            <input
              type="text"
              name="contact"
              value={userDetailed.contact}
              onChange={handleOnChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200"
           onClick={()=>{
            updateUser(updateMethod,userDetailed)
           }}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
