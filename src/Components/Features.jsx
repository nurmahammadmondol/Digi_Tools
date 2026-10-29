import { use } from "react";
import Cart from "./Cart";


const Features = ({promissedData}) => {
    

    const features=use(promissedData)
    // console.log(features)

    return (
       <div className="my-10">
         <div className="text-center ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Premium Digital Tools</h2>
            <p className="text-gray-400 my-5">Choose from our curated collection of premium digital products designed to boost <br/>
                 your productivity and creativity.</p>
            <div className="flex justify-center items-center gap-2">
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Products</button>
                <button className="btn btn-outline border-[#9514FA] text-[#9514FA] rounded-full">Cart (2/6)</button>
            </div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 md:w-10/12 mx-auto mt-10">
            {
                features.map(feature=><Cart key={feature?.id} feature={feature}></Cart>)
            }
        </div>
       </div>
    );
};

export default Features;