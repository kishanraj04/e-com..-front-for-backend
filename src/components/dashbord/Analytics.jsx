import React from "react";
import Chart from "react-apexcharts";
import {
  useGetAllCategoryQuery,
  useGetAllProductQuery,
} from "../../../api/apiCallingForProduct";
import { getStockForCat } from "../../../utils/dashBoard";

function Analytics() {
  const {
    data: category,
    isError: isCatError,
    isLoading: isCatLoading,
  } = useGetAllCategoryQuery();
  const { data: allProduct, allProductResp } = useGetAllProductQuery();
  if (isCatLoading) return <p>Loading...</p>
  if (isCatError || !category?.categories)
    return <p>Error loading categories</p>;

  const categoryNames = category?.categories?.map((cat) => cat);
  const stocks = getStockForCat(allProduct, categoryNames);
  // const dummyStockData = Array(categoryNames.length).fill(10);

  return (
    <div className="flex flex-col gap-2  w-full">
      {/* bar graph that show the category and their stocks */}
      <div className="border-[2px] ">
        <Chart
          type="bar"
          width="95%"
          height={500}
          series={[
            {
              name: "Total Stocks",
              data: stocks,
            },
          ]}
          options={{
            title: {
              text: "Total Category And Their Stocks",
              style: {
                fontSize: 25,
                fontFamily: "serif",
                fontWeight: "bold",
                color: "yellow",
              },
            },
            colors: ["red"],
            xaxis: {
              categories: categoryNames,
              title: {
                text: "Category Name",
                style: { color: "blue" },
              },
            },
            dataLabels: {
              enabled: true,
              style: {
                fontSize: "7px",
              },
            },
            responsive: [
              {
                breakpoint: 640,
                options: {
                  title: {
                    style: { fontSize: 10 },
                  },
                },
              },
            ],
          }}
        />
      </div>

      <div className="border-[2px]">
        <Chart
          type="pie"
          width="95%"
          height={500}
          series={[]}
          options={{
            labels: ["a", "b", "c", "d"],
            noData: {
              text: "Empty Data",
              align: "center",
              verticalAlign: "middle",
              style: {
                fontSize: "14px",
                color: "white",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Analytics;
