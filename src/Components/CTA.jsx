
export default function CTA() {
  return (
    <div className="w-full bg-linear-to-r from-[#5f33f7] to-[#9318fb] px-5 py-20 text-center font-['Manrope',sans-serif] text-white md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        {/* heading */}
        <h2 className="text-3xl font-extrabold tracking-tight md:text-[32px]">
          Ready To Transform Your Workflow?
        </h2>

        {/* paragraph */}
        <p className="mt-4 max-w-md text-[13px] leading-6 text-white/85">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* buttons */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a href="#Features" className="btn h-11 min-h-0 rounded-full border-none bg-white px-6 text-[13px] font-bold text-[#6a35f0] shadow-none hover:bg-gray-100">
            Explore Products
          </a>
          <a href="#Pricing" className="btn btn-outline h-11 min-h-0 rounded-full border-white/70 bg-transparent px-8 text-[13px] font-semibold text-white shadow-none hover:border-white hover:bg-white/10 hover:text-white">
            View Pricing
          </a>
        </div>

        {/* footnote */}
        <p className="mt-6 text-xs text-white/80">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>
      </div>
    </div>
  );
}
