import banner from "../assets/products/banner.png";


const Banner = () => {
  return (
    <div>
      <div className="w-11/12 md:w-10/12 mx-auto my-5 md:my-20 ">
        <div className=" flex-col items-center md:flex md:flex-row-reverse gap-10">
          <div className="flex-1 ">
            <img
            alt="Banner Pic"
            src={banner}
            className=" rounded-lg shadow-2xl "
          />
          </div>

          <div className="flex-1 md:ml-5 mt-5 md:mt-0">
            <small className="bg-[#9514FA25] px-3 py-1 rounded-full text-[#9514FA] ">New :AI-Powered Tools Available</small>
            <h1 className="text-5xl font-bold mt-5">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products.
            </p>
            <div className="flex items-center gap-2">
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
                Explore Products
              </button>
              <button className="btn btn-outline border-[#9514FA] text-[#9514FA] rounded-full">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
