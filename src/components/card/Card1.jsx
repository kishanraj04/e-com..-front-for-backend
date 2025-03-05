import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const Card1 = ({item}) => {
  const [isFavorite, setIsFavorite] = useState(false);
   
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-[15rem] border border-gray-200 select-none">
      {/* Product Image & Favorite Icon */}
      <div className="relative flex justify-center w-[100%]  select-none ">
      <Link to={`/home/product/detail/${item?._id}`} state={item?._id}>
        <img
          src={item?.images[0]} // Replace with actual image
          alt="Red Lipstick"
          className="w-24 h-24 object-cover"
        />
        </Link>
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-red-600"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? "❤️" : <Heart size={20} />}
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{item?.title}</h3>
        <div className="flex justify-center mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-lg">★</span>
          ))}
        </div>
        <p className="text-gray-500 text-sm">{item?.reviews?.length || 3} reviews</p>

        {/* Pricing */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-gray-400 line-through text-sm">$19.5</span>
          <span className="text-blue-600 text-lg font-bold">{Math.floor(item?.price)}</span>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition">
          Add to Cart <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
};

export default Card1;
