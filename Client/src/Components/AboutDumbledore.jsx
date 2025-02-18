import { img } from "../assets/assets";

function AboutDumbledore() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 pt-12 lg:pt-24 w-full">
      <div className="flex flex-col gap-6 justify-center items-center lg:items-start w-full lg:max-w-[60%]">
        <div>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left">
            About Dumbledore Media
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#A4A4A4] text-sm sm:text-base md:text-lg text-center lg:text-left">
            Dumbledore Media quickly established itself as a creative
            powerhouse, specializing in web and app development, 3D design,
            photography, videography, interior design, and VFX services. With a
            commitment to excellence and creativity, the agency has partnered
            with a diverse range of clients, from startups to established
            brands, crafting compelling narratives and innovative visual
            experiences. Our talented team of eight dedicated professionals
            brings a wealth of expertise across various departments, ensuring
            that every project we undertake is infused with creativity and
            precision.
          </p>
          <p className="text-[#A4A4A4] text-sm sm:text-base md:text-lg text-center lg:text-left">
            At Dumbledore Media, we believe that collaboration fuels innovation.
            Each team member is passionate about their craft, and together, we
            strive to deliver outstanding results that elevate our clients'
            brands. We understand the power of storytelling and are committed to
            helping our clients connect authentically with their audiences.
            Every project is an opportunity to weave a new tale, and we take
            pride in creating content that resonates and inspires.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mb-8 lg:mb-0">
        <img
          className="w-full h-auto"
          src={img.Logo || "/placeholder.svg"}
          alt="Dumbledore Media Logo"
        />
      </div>
    </div>
  );
}

export default AboutDumbledore;
