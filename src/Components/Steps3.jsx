import userImg from '../assets/products/user.png'
import packageImg from '../assets/products/package.png'
import rocketImg from '../assets/products/rocket.png'


const Steps3 = () => {
    return (
        <div className="text-center py-20 bg-gray-100">
            <h3 className="text-2xl font-bold">Get Started in 3 Steps</h3>
            <small className="text-gray-400">Start using premium digital tools in minutes, not hours.</small>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-5 md:px-10 lg:px-32 mt-10'>
                {/* cart 1 */}
                <div className='flex flex-col items-center gap-2 p-7 bg-white rounded-2xl'>
                    <img className='bg-[#9514FA20] p-4 rounded-full' src={userImg} alt="userImg" />
                    <h6 className='text-xl'>Create Account</h6>
                    <small className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</small>
                </div>
                {/* cart 2 */}
                <div className='flex flex-col items-center gap-2 p-7 bg-white rounded-2xl'>
                    <img className='bg-[#9514FA20] p-4 rounded-full' src={packageImg} alt="userImg" />
                    <h6 className='text-xl'>Choose Products</h6>
                    <small className='text-gray-500'>Browse our catalog and select the tool sthat fit your needs.</small>
                </div>
                {/* cart 3 */}
                <div className='flex flex-col items-center gap-2 p-7 bg-white rounded-2xl'>
                    <img className='bg-[#9514FA20] p-4 rounded-full' src={rocketImg} alt="userImg" />
                    <h6 className='text-xl'>Choose Products</h6>
                    <small className='text-gray-500'>Browse our catalog and select the tool sthat fit your needs.</small>
                </div>
            </div>
        </div>
    );
};

export default Steps3;