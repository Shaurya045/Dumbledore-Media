function CareerContact() {
  return (
    <div className="self-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-8 sm:mt-12 md:mt-16 flex flex-col gap-6 sm:gap-8 md:gap-10">
      <div className="flex flex-col gap-4 sm:gap-6">
        <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
          Contact Us
        </h2>
        <div className="text-[#A4A4A4] flex flex-col gap-4 sm:gap-6 text-sm sm:text-base">
          <p>
            If you don't see a position for yourself, but believe your unique
            magic can help us soar to new heights, we would love to hear from
            you!
          </p>
          <p className="break-words">
            Send your enchanted parchment via owl to: <br />
            <a
              href="mailto:info@dumbledoremedia.com"
              className=" hover:underline"
            >
              ✉️ info@dumbledoremedia.com
            </a>
            <br />
            cc: <br />
            <a
              href="mailto:career.dumbledoremedia@gmail.com"
              className=" hover:underline"
            >
              ✉️ career.dumbledoremedia@gmail.com
            </a>
          </p>
          <p>
            Let us know how your talents can assist us at Dumbledore Media and
            why you would be the perfect addition to our magical team! 🌟
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerContact;
