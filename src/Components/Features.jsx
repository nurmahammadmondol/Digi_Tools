import { use, useState } from "react";
import Cart from "./Cart";
import { toast } from "react-toastify";
import { LayoutDashboard } from "lucide-react";

const Features = ({ promissedData, setCartItem, cartItem }) => {
  const features = use(promissedData);

  console.log(cartItem);

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
            className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full"
          >
            Products
          </button>
          <button
            onClick={handleCart}
            className="btn btn-outline border-[#9514FA] text-[#9514FA] rounded-full"
          >
            Cart ({cartItem.length}/{features.length})
          </button>
        </div>
      </div>

      <div
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
                  <small className="text-gray-400">
                    /{item?.billing}
                  </small>
                </p>
                </div>
              </div>
              <button className="btn text-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>

          <div>
          </div>
          <button className={`btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full mt-5 ${cartItem.length<=0 && 'hidden'}`}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Features;
