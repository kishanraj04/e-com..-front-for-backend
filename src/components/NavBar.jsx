import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, Heart, User, Search } from "lucide-react";
import LinkTag from "../custom/LinkTag";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import IconLink from "../custom/IconLink";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useDirectLoginUserQuery, useLogOutUserMutation } from "../../api/apiCallingForUser";
import { logoutUser } from "../../utils/logoutUser";
import { loggedInUser } from "../../store/authSlice";
import { BsSearch } from "react-icons/bs";
import { useLazySearchProductQuery } from "../../api/apiCallingForProduct";
import { handleProductSearch } from "../../utils/handleProductSearch";
import { useGetAllCartItemQuery } from "../../api/apiCallingForCart";
import { GlobalContect } from "../context/globalContect";
import { MdDashboard } from "react-icons/md";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const { filterToggle, setFilterToggle } = useContext(GlobalContect);
  const loggedInUserName = useSelector(
    (state) => state?.auth?.loggedInUser?.name
  );
  const [inpVal, setIpVal] = useState("");
  const {
      data: directLoginData
    } = useDirectLoginUserQuery();
  const [logOutUser, { isError, isSuccess, data }] = useLogOutUserMutation();
  const loggedInUserId = useSelector((state) => state?.auth?.loggedInUser?._id);
  const { data: allCartItem } = useGetAllCartItemQuery(loggedInUserId, {
    skip: !loggedInUserId,
  });
  const [
    trigger,
    { isError: searchError, isSuccess: searchSuccess, data: searchData },
  ] = useLazySearchProductQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(inpVal);
  return (
    <>
      <header className="bg-white shadow-md w-full select-none sticky top-0 z-10">
        {/* Promotional Banner */}
        <div className="bg-blue-600 text-white text-center py-2 text-sm flex justify-around">
          <p className="text-black font-bold font-serif text-xl">
            Welcome ❤️{" "}
            <span className="text-orange-400 font-serif text-xl">
              {loggedInUserName || "YOU"}
            </span>
          </p>
          <p>Free Shipping on Orders Over $50!</p>

          <div className="flex justify-center items-center gap-4">
            <IoMdLogOut
              size={"2rem"}
              color="white"
              onClick={() => logoutUser(logOutUser, navigate, dispatch)}
            />

            <MdDashboard size={"2rem"} color="white" onClick={()=>navigate('/admin/dashboard')}/>
          </div>
        </div>

        <div className="flex justify-between items-center w-full p-4">
          <nav className="max-w-7xl mx-auto w-full px-4 ">
            <div className="flex justify-between items-center h-8">
              {/* Logo */}
              <div className="text-2xl font-bold text-gray-800">E-Shop</div>

              {/* Search Bar (Hidden on small screens) */}
              <div className="hidden md:flex justify-center items-center flex-1 mx-4 w-[30%]">
                <input
                  type="text"
                  value={inpVal}
                  placeholder="Search products..."
                  className="w-[90%] px-4 py-2 border rounded-r-0 focus:outline-none"
                  onChange={(e) => setIpVal(e.target.value)}
                />
                <BsSearch
                  className="w-[10%] px-4 py-2 border rounded-r-3xl h-[2.5rem] border-l-0 bg-red-700"
                  onClick={() => handleProductSearch(navigate, trigger, inpVal)}
                />
              </div>

              {/* Nav Links (Desktop) */}
              <div className="hidden sm:flex space-x-4 p-4">
                {["Home", "MarketPlace", "About", "Contact"].map(
                  (title, idx) => (
                    <LinkTag title={title} key={idx} />
                  )
                )}
              </div>

              {/* Icons */}
              <div className="hidden sm:flex items-center space-x-3 relative">
                {[
                  {
                    title: "wish-list",
                    icon: <CiHeart size="2rem" color="red" />,
                  },
                  { title: "cart", icon: <CiShoppingCart size="2rem" /> },
                  { title: "profile", icon: <CiUser size="2rem" /> },
                ].map(({ title, icon }, idx) => (
                  <IconLink title={title} icon={icon} key={idx} />
                ))}
                {!filterToggle ? (
                  <IoReorderThreeOutline
                    size="2rem"
                    onClick={() => setFilterToggle(true)}
                  />
                ) : (
                  <RxCross1
                    size="2rem"
                    onClick={() => setFilterToggle(false)}
                  />
                )}
                {/* Cart Item Count */}
                <p className="absolute right-[92px] bottom-6 border border-red-400 w-5 h-5 flex justify-center items-center rounded-lg text-sm">
                  {allCartItem?.cartItem?.length}
                </p>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            {toggleNav ? (
              <RxCross1 size="2rem" onClick={() => setToggleNav(false)} />
            ) : (
              <IoReorderThreeOutline
                size="2rem"
                onClick={() => setToggleNav(true)}
              />
            )}
          </div>
        </div>
      </header>

      {/* slide nav */}
      <div
        className={`w-full sm:hidden h-[5.8vh] bg-transparent py-5 transform transition-transform duration-500 font-bold ${
          !toggleNav ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* icons */}
        <div className="p-2 flex gap-5">
          {[
            { title: "wish-list", icon: <CiHeart size={"2rem"} color="red" /> },
            { title: "cart", icon: <CiShoppingCart size={"2rem"} /> },
            { title: "profile", icon: <CiUser size={"2rem"} /> },
          ].map(({ title, icon }, idx) => (
            <IconLink title={title} icon={icon} key={idx} />
          ))}

          <IoMdLogOut
            color="black"
            size={"2rem"}
            onClick={() => logoutUser(logOutUser, navigate, dispatch)}
          />
        </div>

        <div className="flex justify-center items-center flex-1 mx-4 w-[50%] p-2">
          <input
            type="text"
            value={inpVal}
            placeholder="Search products..."
            className="w-[90%] px-4 py-2 border rounded-r-0 focus:outline-none"
            onChange={(e) => setIpVal(e.target.value)}
          />
          <BsSearch
            className="w-[10%] px-4 py-2 border rounded-r-3xl h-[2.5rem] border-l-0 bg-red-700"
            onClick={() => handleProductSearch(navigate, trigger, inpVal)}
          />
        </div>
        {/* links */}
        <div className="flex flex-col p-5 gap-5">
          {["Home", "About", "Contact", "MarketPlace"].map((title, idx) => (
            <LinkTag title={title} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
