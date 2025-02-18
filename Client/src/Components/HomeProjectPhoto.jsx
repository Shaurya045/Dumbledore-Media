function HomeProjectPhoto() {
  const projects = [
    {
      title: "Hira Panna Jewellary",
      description:
        "Capturing the essence of luxury with precision and creativity, our photography brings to life the intricate beauty of premium collections like Hira Panna Jewellery. By seamlessly blending artistry with brand identity, we showcase the fine details and craftsmanship that define their exquisite pieces, leaving a lasting impression of elegance and sophistication.",
    },
    {
      title: "Ornate Makeup Studio",
      description:
        "Highlighting the artistry of beauty, our photoshoots for Orante Makeup Studio capture the stunning transformations of bridal and party looks. With a focus on elegance and finesse, we bring out the essence of each makeup style, showcasing the creativity and expertise that define Orante's signature touch.",
    },
  ]

  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 border-b border-[#2b2a2a] p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-[#0e0d0d] transition-colors duration-300"
        >
          <div className="content text-white lg:max-w-[50%] xl:max-w-[40%] flex flex-col gap-4 md:gap-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{project.title}</h1>
            <p className="text-base md:text-lg lg:text-xl text-[#A4A4A4] font-normal">{project.description}</p>
          </div>
          <div className="image-content w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gray-50 rounded-lg lg:ml-auto"></div>
        </div>
      ))}
    </div>
  )
}

export default HomeProjectPhoto

