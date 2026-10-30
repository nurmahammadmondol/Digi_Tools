import { ShoppingCartMinus } from "lucide-react";

const Navbar = ({cartItem}) => {
  const list = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm md:px-10 lg:px-20 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 space-y-1 p-2 shadow">
              {list.map((manu, i) => (
                <li key={i} className="hover:bg-gray-200">
                  {manu}
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost md:text-2xl lg:text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            Digi Tools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="md:flex items-center gap-5">
            {list.map((manu,i) => (
              <li key={i} className="">{manu}</li>
            ))}
          </ul>
        </div>

        <div className="navbar-end flex gap-3">
          <button>
            <ShoppingCartMinus className="relative"/>
            <small className="bg-gray-200 px-1 rounded-full absolute top-2 ">{cartItem.length}</small>
          </button>
          <button>Log in</button>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
