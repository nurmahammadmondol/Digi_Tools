import { use, useState } from "react";
import Cart from "./Cart";
import { toast } from "react-toastify";
import { LayoutDashboard } from "lucide-react";

const Features = ({ promissedData, setCartItem, cartItem }) => {
  const features = use(promissedData);

  // console.log(cartItem);

  const handleBuyNow = (feature) => {
    const addNewItem = [...cartItem, feature];
    setCartItem(addNewItem);
    toast.success("Successfully Add to Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      //   transition: Bounce,
    });
  };

  const [showProduct, setShowProduct] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const handleCart = () => {
    setShowProduct(false);
    setShowCart(true);
  };

  const handleProduct = () => {
    setShowCart(false);
    setShowProduct(true);
  };

  return (
    <div className="my-10">
      <div className="text-center ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Premium Digital Tools
        </h2>
        <p className="text-gray-400 my-5">
          Choose from our curated collection of premium digital products
          designed to boost <br />
          your productivity and creativity.
        </p>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handleProduct}
            className={`btn px-5 rounded-full ${showProduct ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-outline border-[#9514FA] text-[#9514FA]"}`}
          >
            Products
          </button>
          <button onClick={handleCart} className={`btn px-5 rounded-full ${showCart ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-outline border-[#9514FA] text-[#9514FA]"}`}>
            Cart ({cartItem.length}/{features.length})
          </button>
        </div>
      </div>

      <div
        id="features"
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 md:w-10/12 mx-auto mt-10 ${showCart && "hidden"} `}
      >
        {features.map((feature) => (
          <Cart
            key={feature?.id}
            feature={feature}
            handleBuyNow={handleBuyNow}
          ></Cart>
        ))}
      </div>

      <div
        className={`w-11/12 md:w-10/12 mx-auto mt-10 border border-gray-200 p-5 rounded-2xl ${showProduct && "hidden"}`}
      >
        <h2 className="font-bold">Your Cart</h2>

        <div>
          {cartItem.map((item) => (
            <div className="bg-gray-50 p-5 rounded-2xl flex justify-between my-3">
              <div className="flex items-center gap-2">
                <LayoutDashboard />
                <div>
                  <h2 className=" font-bold">{item?.name}</h2>
                  <p className="">
                    ${item?.price}
                    <small className="text-gray-400">/{item?.billing}</small>
                  </p>
                </div>
              </div>
              <button className="btn text-red-600">Remove</button>
            </div>
          ))}
        </div>
        <button
          className={`btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full mt-5 ${cartItem.length <= 0 && "hidden"}`}
        >
          Proceed to Checkout
        </button>

        {cartItem.length === 0 && (
          <div>
            <div class="rounded-[20px] bg-slate-50 px-6 py-12 text-center">
              <div class="mx-auto mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
                </svg>
              </div>

              <h3 class="mb-2 text-xl font-bold text-gray-900">
                Your cart is empty
              </h3>
              <p class="mb-6 text-sm leading-relaxed text-gray-500">
                Looks like you haven't added anything yet.
                <br />
                Explore our products and find something you'll love.
              </p>

              <button
                onClick={handleProduct}
                class="inline-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Browse Products
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
