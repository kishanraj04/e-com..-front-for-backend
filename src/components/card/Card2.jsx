
export default function Card2({item}) {
    
    return (
      <div className="w-64 p-4 border rounded-lg shadow-md bg-gradient-to-br from-yellow-50 to-red-50 relative">
        {/* Product Name and Quantity */}
        <div className="flex justify-between items-start">
          <h2 className="font-semibold">{item?.title}</h2>
          <span className="text-sm font-medium">3</span>
        </div>
  
        {/* Product Image with Price Tag */}
        <div className="relative flex justify-center mt-4">
          <div className="w-24 h-36 border-2 border-black rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={item?.images[0]}
              alt="Sofa"
              className="object-cover"
            />
          </div>
          <span className="absolute top-0 right-10 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
            $2500
          </span>
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
  