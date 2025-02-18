import { useEffect, useRef } from "react";

export default function ServiceHeader() {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const scrollY = window.scrollY;
        circleRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[#0a0a0a] px-4 py-16 md:py-24">
      {/* Bottom circle */}
      <div className="hidden lg:block absolute right-[-500px] bottom-[-580px] w-[800px] h-[800px] rounded-full border-zinc-800 border-[1px] "></div>

      {/* Top circle */}
      <div className="hidden lg:block absolute left-[-400px] top-[-200px] w-[800px] h-[800px] rounded-full border-zinc-800 border-[1px] "></div>

      {/* Orange Circle */}
      <div
        ref={circleRef}
        className="hidden lg:block absolute h-7 w-7 left-[385px] top-[210px] rounded-full bg-orange-500"
      ></div>

      {/* Vertical Text */}
      <div className="absolute right-8 top-1/3 ">
        <div className="flex flex-col gap-5 items-center">
          <span className="vertical-text text-xs font-medium tracking-[0.2em] text-white opacity-70">
            SERVICES
          </span>
          <div className="w-[2px] h-[80px] bg-white opacity-70"></div>
          <span className="vertical-text text-xs font-medium tracking-[0.2em] text-white opacity-70">
            SCROLL
          </span>
        </div>
      </div>

      <div className="container h-full self-center mt-[50px] md:mt-[120px] pb-[70px] relative mx-auto ">
        <div className="relative space-y-6">
          <div className="flex items-center gap-4 md:gap-2">
            <span className="text-sm font-medium uppercase tracking-wider text-orange-500">
              What we do?
            </span>
          </div>
          <div className="max-w-3xl pl-[30px] space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl xl:text-8xl">
              Driving brands <br />
              forward online
            </h1>
          </div>
        </div>
        <div className="absolute bottom-[-10px] md:bottom-[10px] right-[80px] flex justify-center">
          <p className="text-lg text-zinc-400">
            A digital-first approach <br />
            to strategy and creativity.
          </p>
        </div>
        <div className="hidden lg:block absolute bottom-0 right-[30px] h-[280px] w-[300px] rounded-full overflow-hidden">
          <div className="relative h-full w-full ">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.2) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(80, 80, 80, 0.2) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                opacity: 0.95,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
