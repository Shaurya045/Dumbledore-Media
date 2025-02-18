import { clientsPhoto } from "../assets/assets"

function ClientLogo({ name, src, aspectRatio = "aspect-[3/2]", containerClass = "" }) {
  return (
    <div className={`w-full sm:w-[150px] h-[100px] sm:h-[150px] flex items-center justify-center ${containerClass}`}>
      <img
        className={`object-contain w-3/4 sm:w-full h-auto ${aspectRatio}`}
        src={src || "/placeholder.svg"}
        alt={`${name} logo`}
      />
    </div>
  )
}

function AboutClients() {
  const clients = [
    { name: "Artmis", src: clientsPhoto.Artmis, aspectRatio: "aspect-[3/2]", containerClass: "sm:w-[150px]" },
    { name: "Artlet", src: clientsPhoto.Artlet, aspectRatio: "aspect-[3/2]", containerClass: "sm:w-[150px]" },
    { name: "Ecofacets", src: clientsPhoto.Ecofacets, aspectRatio: "aspect-square", containerClass: "sm:w-[170px]" },
    { name: "HiraPanna", src: clientsPhoto.HiraPanna, aspectRatio: "aspect-square", containerClass: "sm:w-[150px]" },
    { name: "Ornate", src: clientsPhoto.Ornate, aspectRatio: "aspect-[3/2]", containerClass: "sm:w-[150px]" },
  ]

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">Clients</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
        {clients.map((client, index) => (
          <ClientLogo key={index} {...client} />
        ))}
      </div>
    </div>
  )
}

export default AboutClients

