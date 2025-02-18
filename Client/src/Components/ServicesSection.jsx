import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, MinusIcon } from "lucide-react";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "A strategic-creative approach, designing, prototyping to craft exceptional user experiences.",
  },
  {
    id: 2,
    title: "Website Design",
    description:
      "Creating stunning, responsive websites that capture your brand's essence.",
  },
  {
    id: 3,
    title: "Application Design",
    description:
      "Designing intuitive and engaging applications for various platforms.",
  },
  {
    id: 4,
    title: "Logo Design",
    description: "Crafting unique and memorable brand identities.",
  },
  {
    id: 5,
    title: "Website Development",
    description:
      "Building robust and scalable web solutions using cutting-edge technologies.",
  },
  {
    id: 6,
    title: "Cross-platform App Development",
    description:
      "Developing seamless applications that work across multiple platforms.",
  },
  {
    id: 7,
    title: "Native App Development",
    description:
      "Creating high-performance native applications for iOS and Android.",
  },
  {
    id: 8,
    title: "Re-branding",
    description:
      "Refreshing and modernizing your brand identity for the digital age.",
  },
];

function ServicesSection() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950 px-4 py-6 md:py-10">
      <div className="hidden lg:block absolute right-[-500px] top-[-220px] w-[800px] h-[800px] rounded-full border-zinc-800 border-[1px] "></div>
      <div className="hidden lg:block absolute h-7 w-7 right-[285px] top-[160px] rounded-full bg-orange-500"></div>
      <div className="container relative mx-auto">
        {/* Decorative elements */}

        <div className="relative h-full w-full pl-[15px] ">
          <h3 className="mb-20 text-4xl max-w-3xl font-bold text-white sm:text-6xl">
            Elevating your brand
            <br />
            At every touchpoint.
          </h3>
          <div className="flex flex-row justify-start md:justify-end h-full w-full ">
            <div className="max-w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={` ${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === service.id ? null : service.id
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-orange-500">
                        {expandedId === service.id ? (
                          <MinusIcon className="h-4 w-4" />
                        ) : (
                          <PlusIcon className="h-4 w-4" />
                        )}
                      </span>
                      <span className="text-2xl font-medium text-white">
                        {service.title}
                      </span>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedId === service.id
                        ? "max-h-42 pl-[20px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-6">
                      <p className="mb-4 text-zinc-400">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                      >
                        Get a Quote
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-[-30px] left-[-100px] h-[500px] w-[600px] rounded-full overflow-hidden ">
        <div className="relative h-full w-full ">
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.2) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(80, 80, 80, 0.2) 1px, transparent 1px)`,
              backgroundSize: "70px 70px",
              opacity: 0.95,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
