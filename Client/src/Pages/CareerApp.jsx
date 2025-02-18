function CareerApp() {
  return (
    <div className="bg-black py-20 sm:py-12 md:py-16 lg:py-24 flex flex-col items-center">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2 sm:gap-3">
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
            📱 App Alchemist | 0-2 Years of Experience
          </h2>
          <p className="text-[#A4A4A4] text-sm sm:text-base">
            Craftsman of mobile magic, conjuring applications that delight and
            engage users 📲
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
          As an App Alchemist at Dumbledore Media, you will develop captivating
          mobile applications that enchant users, blending creativity and
          technology in every project.
        </p>
        <div className="text-[#A4A4A4] flex flex-col gap-4 sm:gap-6">
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
            The primary purpose of the role:
          </h3>
          <p className="text-sm sm:text-base">
            You are a mobile maestro: A developer who creates engaging
            applications that provide exceptional user experiences, merging
            functionality and aesthetics seamlessly.
          </p>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6">
            Key Responsibilities:
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
            <li>
              Develop and maintain mobile applications for iOS and Android
              platforms.
            </li>
            <li>
              Collaborate with designers to create user-friendly interfaces.
            </li>
            <li>
              Test and optimize applications for performance and usability.
            </li>
          </ul>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6">
            Key Requirements:
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
            <li>0-2 years of experience in mobile app development.</li>
            <li>
              Proficiency in programming languages (e.g., Java, Swift, React
              Native).
            </li>
            <li>A portfolio showcasing your mobile projects.</li>
            <li>A passion for crafting innovative mobile solutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerApp;
