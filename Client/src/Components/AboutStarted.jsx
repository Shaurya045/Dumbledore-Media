import { img } from "../assets/assets";

function AboutStarted() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 pt-8 lg:pt-12 w-full">
      <div className="relative mx-auto lg:mx-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
        <div className="w-full h-full lg:w-[500px] lg:h-[500px] bg-transparent border-2 border-[#A4A4A4] rounded-full"></div>
        <div className="w-full h-full absolute top-0 lg:top-6 lg:left-6 xl:top-0 xl:left-0 flex items-center justify-center">
          <div className="w-[90%] h-[90%] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={img.sunny || "/placeholder.svg"}
              alt="Sunny Singh, founder of Dumbledore Media"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center lg:items-start w-full">
        <div>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left">
            When we Started?
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#A4A4A4] text-sm sm:text-base md:text-lg text-center lg:text-left">
            This passionate visionary from Patna, Bihar, Sunny Singh, has always
            been captivated by the power of storytelling. After years of working
            with leading agencies and gaining invaluable industry insights, he
            founded Dumbledore Media in 2024 to help brands connect
            authentically with their audiences.
          </p>
          <p className="text-[#A4A4A4] text-sm sm:text-base md:text-lg text-center lg:text-left">
            Sunny's journey reflects the belief that great storytelling can
            transform businesses, and at Dumbledore Media, every project is an
            opportunity to weave a new tale.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutStarted;
