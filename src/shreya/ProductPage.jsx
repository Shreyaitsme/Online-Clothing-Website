import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";

const ProductPage = () => {
  const productData = useSelector((state) => state.cart.productData);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productData.map((product) => (
          <div
            className="relative flex flex-col overflow-hidden rounded-lg border border-#3596B5 bg-[#F0F0F0] shadow-md"
            key={product.id}
          >
            <div className="relative flex h-100 overflow-hidden rounded-xl group">
              
              <img
                className="w-full h-full object-cover"
                src={product.img}
                alt="product image"
              />
            </div>

            <div className="mt-4 px-5 pb-5 flex flex-col items-center justify-between">
              <div className="text-xl tracking-tight text-[#00798C]">
                {product.title}
              </div>
              <div className="mt-2 mb-5 flex items-center justify-center">
                <p>
                  <span className="text-3xl font-bold text-[#F71735]">
                    ₹{product.price}
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 "
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
