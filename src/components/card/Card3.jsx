export default function Card4() {
    return (
      <div className="w-64 p-4 border rounded-lg shadow-md bg-gradient-to-br from-red-50 to-white relative">
        {/* Sale Tag */}
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
          Sale
        </span>
  
        {/* Product Image */}
        <div className="flex justify-center mt-4">
          <img
            src="https://via.placeholder.com/120"
            alt="Red Nail Polish"
            className="w-24 h-24 object-contain"
          />
        </div>
  
        {/* Product Name and Price */}
        <div className="flex justify-between items-center mt-4 px-2">
          <h2 className="text-sm font-semibold">Red Nail Polish</h2>
          <span className="text-sm font-bold">$9</span>
        </div>
  
        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
          <button className="text-green-600 text-2xl">
            🛒
          </button>
          <button className="text-red-500 text-2xl">
            ❤️
          </button>
        </div>
      </div>
    );
  }
  