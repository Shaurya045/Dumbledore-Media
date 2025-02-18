import { teamsPhoto } from "../assets/assets";

function TeamMember({ name, title, image }) {
  return (
    <div className="w-full sm:w-[270px] h-[320px] bg-white relative">
      <div className="absolute bottom-0 w-full h-[70px] bg-[#000000b0] flex flex-col justify-center z-10">
        <h3 className="text-white text-sm sm:text-[15px] font-semibold px-4 sm:px-[20px]">
          {name}
        </h3>
        <h3 className="text-white text-xs sm:text-[13px] font-light px-4 sm:px-[20px]">
          {title}
        </h3>
      </div>
      <img
        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
        src={image || "/placeholder.svg"}
        alt={`${name} - ${title}`}
      />
    </div>
  );
}

function AboutTeams() {
  const teamMembers = [
    { name: "Sunny Singh", title: "Headmaster & CEO", image: teamsPhoto.sunny },
    {
      name: "Shaurya Pratap Singh",
      title: "Web Wizard",
      image: teamsPhoto.shaurya,
    },
    {
      name: "Aditya Singh",
      title: "Interior Design Sorcerer",
      image: teamsPhoto.aditya,
    },
    {
      name: "Swapnil",
      title: "3D Motion Graphics Artisan",
      image: teamsPhoto.sunny,
    },
    { name: "Prakash", title: "Creative Conjurer", image: teamsPhoto.prakash },
    { name: "Rishi", title: "Marketing Sorcerer", image: teamsPhoto.sunny },
    {
      name: "Sandeep Singh",
      title: "Visual Effects Enchanter",
      image: teamsPhoto.sandeep,
    },
    {
      name: "Swarn pratap Singh",
      title: "UI/UX Alchemist",
      image: teamsPhoto.swarn,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        Our Wizards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default AboutTeams;
