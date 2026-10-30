import { CircleCheck, LayoutDashboard } from "lucide-react";

const Cart = ({ feature, handleBuyNow }) => {
  const { name, badge, description, price, billing, features } = feature;

  return (
    <div className="border border-gray-300 p-5 rounded-2xl space-y-4 flex-1 ">
      <div className="flex justify-between items-center ">
        <LayoutDashboard />
        <small className="text-[#9514FA] bg-[#9514FA25] px-4 rounded-full">
          {badge}
        </small>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
      <p className="text-gray-400">{description}</p>
      <p className="font-bold">${price}<small className="text-gray-400 font-mono">/{billing}</small></p>
      <div className="space-y-1">
          {features.map((featur,i) => (
            <small key={i} className="flex items-center gap-2"><CircleCheck className="text-green-500"/> {featur}</small>
          ))}
        
      </div>
      <button onClick={()=>{handleBuyNow(feature)}} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full mt-5">
        Buy Now
      </button>

    </div>
  );
};

export default Cart;
