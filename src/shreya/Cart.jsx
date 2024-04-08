import { Heart, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClear } from "react-icons/md";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "./cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleRemove = (id, title) => {
    dispatch(removeFromCart({ id, title }));
  };

  const handleIncrease = (id, title) => {
    dispatch(increaseQuantity({ id, title }));
  };

  const handleDecrease = (id, title) => {
    dispatch(decreaseQuantity({ id, title }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="px-2 mx-auto max-w-7xl lg:px-0">
      <div className="max-w-2xl py-8 mx-auto lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        {items.length === 0 ? (
          <p className="text-[#00798C]">Your cart is empty.</p>
        ) : (
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="bg-white rounded-lg lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul role="list" className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="">
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="object-contain object-center w-24 h-24 rounded-md sm:h-38 sm:w-38"
                        />
                      </div>

                      <div className="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <a
                                  href={item.href}
                                  className="font-semibold text-black"
                                >
                                  {item.title}
                                </a>
                              </h3>
                            </div>

                            <div className="flex mt-1 text-sm">
                              <p className="text-sm text-gray-500">
                                {item.color}
                              </p>
                              {item.size ? (
                                <p className="pl-4 ml-4 text-sm text-gray-500 border-l border-gray-200">
                                  {item.size}
                                </p>
                              ) : null}
                            </div>
                            <div className="flex items-end mt-1">
                              <p className="text-xs font-medium text-gray-500 line-through">
                                {item.originalPrice}
                              </p>
                              <p>price:₹{item.price}</p>

                              <p className="text-sm font-medium text-green-500">
                                {item.discount}
                              </p>
                            </div>
                            <div>
                              <p>Subtotal:₹{item.quantity * item.price}</p>
                            </div>
                            <div className="text-[#291528]">
                              Quantity: {item.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <div className="flex mb-2">
                      <div className="flex min-w-24">
                        <button
                          type="button"
                          className="h-7 w-7"
                          onClick={() => handleDecrease(item.id, item.title)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="mx-1 text-center border rounded-md h-7 w-9"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          type="button"
                          className="flex items-center justify-center h-7 w-7"
                          onClick={() => handleIncrease(item.id, item.title)}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex ml-6 text-sm">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                          onClick={() => handleRemove(item.id, item.title)}
                        >
                          <Trash size={12} className="text-red-500" />
                          <span className="text-xs font-medium text-red-500">
                            Remove
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
              <div>
                <button
                  onClick={handleClearCart}
                  className="flex justify-center items-center gap-2 w-40 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] mt-2"
                >
                  <MdOutlineClear />
                  Clear Cart
                </button>
              </div>
            </section>
            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 bg-white rounded-md lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className="px-4 py-3 text-lg text-gray-900 border-b border-gray-200 font-large sm:p-4"
              >
                Price Details
              </h2>
              <div>
                <dl className="px-2 py-4 space-y-1 ">
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm text-gray-800">
                      <span>Total Amount</span>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ₹ {total}
                    </dd>
                  </div>
                </dl>
                <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                  Place Order
                </button>
              </div>
            </section>
          </form>
        )}
      </div>
    </div>
  );
}
