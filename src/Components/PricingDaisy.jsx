
const plans = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: "$0",
    button: "Get Started Free",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
  },
  {
    name: "Pro",
    tagline: "Best for professionals",
    price: "$29",
    button: "Start Pro Trial",
    popular: true,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For teams and businesses",
    price: "$99",
    button: "Contact Sales",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
  },
];

const CheckIcon = ({ className }) => (
  <svg
    className={`h-4 w-4 shrink-0 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Pricing() {
  return (
    <div className="relative  w-full bg-white px-5 py-20 text-center font-['Manrope',sans-serif] text-gray-900">
     
      {/* heading */}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
        Simple, Transparent Pricing
      </h2>
      <p className="mt-3 text-sm text-gray-500">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      {/* 3 cards in a flex row */}
      <div className="w-11/12 md:w-10/12 lg:w-9/12  mx-auto mt-10 flex  flex-col items-stretch justify-center gap-7 md:flex-row md:gap-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`card relative flex-1 rounded-2xl border text-left ${
              plan.popular
                ? "border-transparent bg-linear-to-br from-[#6a35f0] to-[#9a17ff] text-white"
                : "border-gray-100 bg-gray-50 text-gray-900"
            }`}
          >
            {plan.popular && (
              <>
                <span className="absolute -top-4 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-pink-500" />
                <span className="badge absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap border-none bg-amber-100 px-3 py-3 text-[11px] font-medium text-amber-700">
                  Most Popular
                </span>
              </>
            )}

            <div className="card-body p-6">
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p
                className={`text-xs ${
                  plan.popular ? "text-white/80" : "text-gray-500"
                }`}
              >
                {plan.tagline}
              </p>

              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span
                  className={`ml-0.5 text-base ${
                    plan.popular ? "text-white/85" : "text-gray-500"
                  }`}
                >
                  /Month
                </span>
              </div>

              <ul className="mt-3 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 text-xs ${
                      plan.popular ? "text-white" : "text-gray-600"
                    }`}
                  >
                    <CheckIcon
                      className={plan.popular ? "text-white" : "text-emerald-500"}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="card-actions mt-4">
                <button
                  className={`btn btn-block h-11 min-h-0 rounded-full border-none text-[13px] font-bold shadow-none ${
                    plan.popular
                      ? "bg-white text-[#6a35f0] hover:bg-gray-100"
                      : "bg-linear-to-r from-[#6a35f0] to-[#a418ff] text-white hover:opacity-90"
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
