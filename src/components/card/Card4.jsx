export default function ProductCard() {
    return (
      <div className="w-72 p-6 border rounded-lg shadow-md bg-gradient-to-br from-yellow-50 to-white text-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Eyeshadow Palette"
            className="w-32 h-32 object-contain"
          />
        </div>
  
        {/* Product Name */}
        <h2 className="mt-4 text-md font-semibold">Eyeshadow Palette with Mirror</h2>
  
        {/* Price */}
        <span className="block mt-2 text-lg font-bold text-orange-500">$19.99</span>
  
        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600">
            Add to Cart
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600">
            WishList
          </button>
        </div>
      </div>
    );
  }
  