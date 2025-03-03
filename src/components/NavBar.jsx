import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Heart, User, Search } from "lucide-react";
import LinkTag from "../custom/LinkTag";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import IconLink from "../custom/IconLink";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);


  return (
    <>
      <header className="bg-white shadow-md w-full select-none">
        {/* Promotional Banner */}
        <div className="bg-blue-600 text-white text-center py-2 text-sm">
          Free Shipping on Orders Over $50!
        </div>

        <div className="flex justify-between w-full items-center">
          <nav className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="text-2xl font-bold text-gray-800">E-Shop</div>

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 mx-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Nav Links (Desktop) */}
              <div className="flex space-x-6 max-sm:hidden">
                {["Home", "MarketPlace", "About", "Contact"].map((title, idx) => (
                  <LinkTag title={title} key={idx} />
                ))}
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-4 max-sm:hidden ml-5 relative">
                {[
                  { title: "wish-list", icon: <CiHeart size={'2rem'}/> },
                  { title: "cart", icon: <CiShoppingCart size={'2rem'} /> },
                  { title: "profile", icon: <CiUser size={'2rem'}/> },
                ].map(({ title, icon }, idx) => (
                  <IconLink title={title} icon={icon} key={idx} />
                ))}

                <p className="absolute right-12 bottom-6 border-[1px] border-red-400 w-5 h-5  flex justify-center items-center rounded-lg">0</p>
              </div>
            </div>
          </nav>

          <div className="sm:hidden max-sm:visible">
            {!toggleNav ? (
              <IoReorderThreeOutline
                size={"2rem"}
                onClick={() => setToggleNav(!toggleNav)}
              />
            ) : (
              <RxCross1
                size={"2rem"}
                onClick={() => setToggleNav(!toggleNav)}
              />
            )}
          </div>
        </div>
      </header>

      {/* slide nav */}
      <div
        className={`w-full sm:hidden h-[84.8vh] bg-transparent py-5 transform transition-transform duration-500 font-bold ${
          !toggleNav ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* icons */}
        <div className="p-2 flex gap-5">
          {[
            { title: "wish-list", icon: <CiHeart size={'2rem'}/> },
            { title: "cart", icon: <CiShoppingCart size={'2rem'}/> },
            { title: "profile", icon: <CiUser size={'2rem'} /> },
          ].map(({ title, icon }, idx) => (
            <IconLink title={title}  icon={icon} key={idx} />
          ))}
        </div>

        {/* links */}
        <div className="flex flex-col p-5 gap-5">
          {["Home", "About", "Contact"].map((title, idx) => (
            <LinkTag title={title} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
