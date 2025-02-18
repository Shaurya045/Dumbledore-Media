import { Check } from "lucide-react";

const packages = [
  {
    name: "Website Basic",
    type: "For Businesses",
    price: 45000,
    originalPrice: 55000,
    features: [
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Complete Deployment",
      "FREE 1-year maintenance",
      "FREE 2-year domain",
    ],
  },
  {
    name: "Website Gold",
    type: "For Businesses",
    price: 65000,
    originalPrice: 75000,
    isPopular: true,
    features: [
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Complete Deployment",
      "FREE 1-year maintenance",
      "FREE 2-year domain",
    ],
  },
  {
    name: "Website Silver",
    type: "For Businesses",
    price: 55000,
    originalPrice: 65000,
    features: [
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Complete Deployment",
      "FREE 1-year maintenance",
      "FREE 2-year domain",
    ],
  },
];

function ServicesPackages() {
  return (
    <section
      className="relative bg-zinc-950 px-0 py-16 md:py-24 overflow-hidden"
      style={{
        background: `
        radial-gradient(circle at center,
          rgba(40, 25, 20, 0.9) 0%,
          rgba(20, 15, 15, 0.95) 50%,
          rgba(10, 8, 8, 1) 100%
        )
      `,
      }}
    >
      {/* Grid Background */}
      {/* <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(55 55 55) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(55 55 55) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
      /> */}

      {/* Decorative Elements */}
      <div className="absolute left-1/4 top-12 h-24 w-16 bg-[#4A2417]" />
      <div className="absolute right-1/3 top-24 h-32 w-24 bg-[#4A2417]/50" />
      <div className="absolute right-1/4 bottom-24 h-20 w-32 bg-[#4A2417]" />

      <div className="container relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            You Ask. We Deliver
          </h2>
          <p className="mb-16 text-lg text-zinc-400">
            Tailoring your package according to your budget and needs.
          </p>
        </div>

        <div className="p-10 grid gap-16 md:grid-cols-3 items-center">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl ${
                pkg.isPopular
                  ? "bg-zinc-800/30 backdrop-blur-sm md:scale-110 md:-translate-y-4 z-10"
                  : "bg-[#F5F5F5]"
              } p-7 transition-all duration-300 ${
                pkg.isPopular ? "md:shadow-2xl" : ""
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3 right-8 rounded-full bg-[#D84A1B] px-4 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold ${
                    pkg.isPopular ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm ${
                    pkg.isPopular ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {pkg.type}
                </p>
              </div>
              <div className="mb-6">
                <p
                  className={`text-sm ${
                    pkg.isPopular ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  Starting from
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-3xl font-bold ${
                      pkg.isPopular ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    $ {pkg.price.toLocaleString()}
                  </span>
                  <span
                    className={`text-sm ${
                      pkg.isPopular ? "text-zinc-500" : "text-zinc-400"
                    } line-through`}
                  >
                    $ {pkg.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <button
                className={`mb-8 w-full rounded-lg ${
                  pkg.isPopular ? "bg-[#D84A1B]" : "bg-[#D84A1B]/90"
                } px-4 py-3 font-bold text-white transition-colors hover:bg-[#C0431B]`}
              >
                GET A QUOTE
              </button>
              <ul className="space-y-4">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 ${
                      pkg.isPopular ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    <div
                      className={`flex h-5 w-5 items-center justify-center ${
                        pkg.isPopular ? "bg-zinc-700" : "bg-zinc-200"
                      }`}
                    >
                      <Check
                        className={`h-3.5 w-3.5 ${
                          pkg.isPopular ? "text-white" : "text-zinc-900"
                        }`}
                      />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPackages;
