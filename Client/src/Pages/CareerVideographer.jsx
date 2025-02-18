function CareerVideographer() {
  return (
    <div className="bg-black py-20 sm:py-12 md:py-16 lg:py-24 flex flex-col items-center">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2 sm:gap-3">
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
            🎥 Sorcerer of Motion (Videographer) | 1-3 Years of Experience
          </h2>
          <p className="text-[#A4A4A4] text-sm sm:text-base">
            Caster of cinematic spells, crafting moving stories that captivate
            the audience 🎬
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
          At Dumbledore Media, we believe in the power of moving images to tell
          compelling stories. As a Sorcerer of Motion, your videos will bring
          narratives to life and enchant viewers across the globe.
        </p>
        <div className="text-[#A4A4A4] flex flex-col gap-4 sm:gap-6">
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
            The primary purpose of the role:
          </h3>
          <p className="text-sm sm:text-base">
            You are a visual storyteller: A creative mind who transforms
            concepts into captivating visual narratives that resonate with
            audiences.
          </p>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6">
            Key Responsibilities:
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
            <li>Shoot and edit video content for various platforms.</li>
            <li>
              Collaborate with the creative team to develop compelling
              storylines.
            </li>
            <li>Stay updated on video production techniques and trends.</li>
          </ul>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6">
            Key Requirements:
          </h3>
          <ul className="list-disc list-inside flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
            <li>1-3 years of experience in videography or video production.</li>
            <li>
              Proficient in video editing software (e.g., Adobe Premiere Pro,
              Final Cut Pro).
            </li>
            <li>A strong portfolio of your video work.</li>
            <li>A passion for storytelling through video.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerVideographer;
