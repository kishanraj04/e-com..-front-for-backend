import React, { useContext, useEffect, useState } from "react";
import { useDeleteUserMutation, useGetAllUserQuery } from "../../../api/apiCallingForUser";
import { DashBoardContext } from "../../context/contextForDashBoard";
import { deleteUser } from "../../../utils/logoutUser";
import { useNavigate } from "react-router";

function TotalUsers() {
  const {
    data: totalUsers,
    isLoading: tLoading,
    isSuccess: tSuccess,
    isError,
    error,
  } = useGetAllUserQuery();
  const [deleteUserMethod,deleteResp] = useDeleteUserMutation()
  const navigate = useNavigate()
  const [allUsers,setAllUsers] = useState([]);
  const {searchValue,setSearchValue} = useContext(DashBoardContext)

  useEffect(()=>{
    if(tSuccess){
        setAllUsers(totalUsers?.allUsers);
    }
  },[totalUsers])
  // Handle loading state
  if (tLoading) {
    return <h1 className="text-center text-blue-500 mt-4">Loading...</h1>;
  }

  // Handle error state
  if (isError) {
    return (
      <h1 className="text-center text-red-500 mt-4">
        Error: {error?.message || "Failed to fetch users"}
      </h1>
    );
  }

//   const allUsers = totalUsers?.allUsers || [];

  return (
    <div>
      {allUsers.length === 0 ? (
        <h1 className="text-center text-red-500 font-semibold mt-4">
          User Not Found
        </h1>
      ) : (
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <h1 className="text-white text-2xl font-bold">Total Users</h1>
          <div className="w-full overflow-x-auto px-4">
            <div className="w-full max-w-7xl mx-auto">
              <table className="w-full bg-white rounded-lg shadow text-sm">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">User Name</th>
                    <th className="py-3 px-4 text-left">User Email</th>
                    <th className="py-3 px-4 text-left">User Contact</th>
                    <th className="py-3 px-4 text-center">Update</th>
                    <th className="py-3 px-4 text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.filter((user)=>user?.email?.toLowerCase().includes(searchValue.toLowerCase())).map((user) => (
                    <tr
                      key={user?.id}
                      className="border-b hover:bg-gray-50 transition duration-200"
                    >
                      <td className="py-3 px-4">{user?.name}</td>
                      <td className="py-3 px-4">{user?.email}</td>
                      <td className="py-3 px-4">{user?.contact}</td>
                      <td className="py-3 px-4 text-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded" onClick={()=>{
                                   navigate("/admin/dashboard/update User",{state:{user}})
                        }}>
                          Update
                        </button>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded" onClick={()=>{
                            deleteUser(deleteUserMethod,user?._id)
                        }}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TotalUsers;
