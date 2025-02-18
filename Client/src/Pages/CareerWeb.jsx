function CareerWeb() {
  return (
    <div className="bg-black py-20 sm:py-12 md:py-16 lg:py-24 flex flex-col items-center">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2 sm:gap-3">
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
            💻 Web Wizard | 0-2 Years of Experience
          </h2>
          <p className="text-[#A4A4A4] text-sm sm:text-base">
            Master of the digital realm, weaving spells of code to create
            enchanting websites 🌐
          </p>
        </div>
        <p className="text-[#A4A4A4] text-lg sm:text-xl md:text-2xl">
          🔥{" "}
          <span className="underline underline-offset-4 cursor-pointer hover:text-white transition-colors">
            Click here to Apply
          </span>{" "}
          🔥
        </p>
        <p className="text-[#A4A4A4] text-sm sm:text-base md:text-lg">
          As a Web Wizard at Dumbledore Media, you will create magical digital
          experiences that engage and delight users, crafting websites that are
          as enchanting as they are functional.
        </p>
        <div className="text-[#A4A4A4] flex flex-col gap-4 sm:gap-6">
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
            The primary purpose of the role:
          </h3>
          <p className="text-sm sm:text-base">
            You are a coding sorcerer: A skilled developer who crafts enchanting
            websites with a focus on user experience, bringing creativity and
            functionality together.
          </p>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6">
            Key Responsibilities:
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
            <li>
              Develop and maintain websites using HTML, CSS, and JavaScript.
            </li>
            <li>Collaborate with designers to bring their visions to life.</li>
            <li>Optimize websites for speed and performance.</li>
          </ul>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6">
            Key Requirements:
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
            <li>0-2 years of experience in web development.</li>
            <li>
              Proficiency in front-end web technologies (HTML, CSS, JavaScript).
            </li>
            <li>A portfolio showcasing your web projects.</li>
            <li>A passion for creating seamless digital experiences.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerWeb;
