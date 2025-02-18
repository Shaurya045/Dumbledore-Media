import { Link } from "react-router-dom"

function JobListing({ title, description, link }) {
  return (
    <div className="flex flex-col gap-2">
      <Link to={link} className="group">
        <h3 className="font-bold text-base sm:text-lg md:text-xl text-white group-hover:text-[#A4A4A4] transition-colors">
          {title}
        </h3>
      </Link>
      <p className="text-sm sm:text-base italic pl-4 text-[#A4A4A4]">{description}</p>
    </div>
  )
}

function Careercareers() {
  const jobListings = [
    {
      title: "📸 Illuminating Image Conjurer (Photographer) | 1-3 Years of Experience",
      description: "Master of capturing moments in time, turning fleeting glimpses into everlasting memories",
      link: "photographer",
    },
    {
      title: "🎥 Sorcerer of Motion (Videographer) | 1-3 Years of Experience",
      description: "Caster of cinematic spells, crafting moving stories that captivate the audience 🎬",
      link: "videographer",
    },
    {
      title: "✨ Visual Effects Enchanter (VFX Artist) | 1-3 Years of Experience",
      description: "Architect of illusions, bringing extraordinary visions to life with magical effects ✨",
      link: "vfx",
    },
    {
      title: "🧙‍♂️ Three-Dimensional Artificer (3D Designer) | 0-2 Years of Experience",
      description: "Creator of fantastical realms, conjuring designs that leap off the page and into reality 🪄",
      link: "3d",
    },
    {
      title: "💻 Web Wizard | 0-2 Years of Experience",
      description: "Master of the digital realm, weaving spells of code to create enchanting websites 🌐",
      link: "web",
    },
    {
      title: "📱 App Alchemist (App Developer) | 0-2 Years of Experience",
      description: "Potion master of mobile magic, crafting applications that enhance the wizarding experience 📲",
      link: "app",
    },
    {
      title: "🏰 Interior Design Sorceress/Sorcerer | 1-3 Years of Experience",
      description: "Guardian of enchanting spaces, transforming ordinary environments into magical havens 🏡",
      link: "interior",
    },
  ]

  return (
    <div className="self-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-8 sm:mt-12 md:mt-16 flex flex-col gap-8 sm:gap-12">
      <div className="flex flex-col gap-4 sm:gap-6">
        <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
          We Are Seeking Wizards for INTERNSHIP 🧙‍♂️
        </h2>
        <div className="text-[#A4A4A4] flex flex-col gap-6 sm:gap-8">
          {jobListings.map((job, index) => (
            <JobListing key={index} {...job} />
          ))}
        </div>
        <p className="text-[#A4A4A4] mt-6 sm:mt-8 text-sm sm:text-base">
          We're offering magical compensation, far beyond ordinary Muggle standards. 🏆 Your job may begin remotely and
          stay flexible depending on your role and preference.
        </p>
      </div>
    </div>
  )
}

export default Careercareers

