import React from "react";
import Card from "./Card";
import { useGetAllUserQuery, useGetRegisterUserInThisWeekQuery } from "../../../api/apiCallingForUser";
import { useGetAllProductOrderQuery } from "../../../api/apiCallingForOrder";
import { useGetAllProductQuery } from "../../../api/apiCallingForProduct";

export default function Ecommerce() {
  const { data: totalUsers } = useGetAllUserQuery();
  const { data: allOrder } = useGetAllProductOrderQuery();
  const { data: allProduct, allProductResp } = useGetAllProductQuery();
  const {data:userThisWeek,isLoading:uLoading} = useGetRegisterUserInThisWeekQuery()
  console.log(userThisWeek,uLoading);
  return (
    <div className="p-6 bg-gray-100 min-h-screen -z-50 min-w-[70%] bg-yellow-100">
      <div className="grid grid-cols-1 w-full md:grid-cols-4 gap-4 mb-6">
        <Card title="Total Revenue" value="₹500,000" />
        <Card title="Total Customers" value={totalUsers?.allUsers?.length} />
        <Card title="Total Orders" value={allOrder?.allOrder?.length} />
        <Card title="Total Product" value={allProduct?.length}/>
      </div>

      <div className="grid grid-cols-1 min-w-[70%]  md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-md col-span-2">
          <h2 className="text-lg font-semibold mb-2">Earning Report</h2>
          {/* Placeholder chart */}
          <div className="h-40 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 rounded-md" />
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm">
              <span className="block text-gray-600">Average Earning</span>
              <span className="font-bold">₹5,250</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500">Reach</span>
              <div className="w-16 h-16 rounded-full border-4 border-purple-500 flex items-center justify-center font-bold">
                65%
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <Card title="Total Traffic" value="1,254 (Today)" subtext="+10%" />
          <Card title="Customers" value={`${userThisWeek?.count} (This Week)`} subtext="-5%" />
        </div>
      </div>

      <div className="bg-white rounded-2xl min-w-[70%] shadow-md max-sm:hidden">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500">
              {[
                "ID",
                "Product Name",
                "Quantity",
                "Actual Price (₹)",
                "Sale Price (₹)",
                "Date",
                "Status",
              ].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td>ORD-1234</td>
              <td>Wireless Headphones</td>
              <td>1</td>
              <td>2,499</td>
              <td>1,999</td>
              <td>2024-04-17</td>
              <td>
                <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">
                  Shipped
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
