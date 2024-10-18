function HomeProjectPhoto() {
  return (
    <div className="flex flex-col">
      <div className="project1 flex flex-row gap-[40px] border-t-0 border-l-0 border-r-0 border-b-[#2b2a2a] border-[1px] p-[50px] hover:bg-[#0e0d0d] ">
        <div className="left-content text-white max-w-[40%] flex flex-col gap-[20px] ">
          <h1 className="text-[30px] font-bold">Hira Panna Jewellary</h1>
          <p className="text-[20px] text-[#A4A4A4] font-normal">
            Capturing the essence of luxury with precision and creativity, our
            photography brings to life the intricate beauty of premium
            collections like Hira Panna Jewellery. By seamlessly blending
            artistry with brand identity, we showcase the fine details and
            craftsmanship that define their exquisite pieces, leaving a lasting
            impression of elegance and sophistication.
          </p>
        </div>
        <div className="right-content w-[600px] h-[500px] bg-gray-50 rounded-[10px] ml-auto "></div>
      </div>
      <div className="project1 flex flex-row gap-[40px] border-t-0 border-l-0 border-r-0 border-b-[#2b2a2a] border-[1px] p-[50px] hover:bg-[#0e0d0d] ">
        <div className="left-content text-white max-w-[40%] flex flex-col gap-[20px] ">
          <h1 className="text-[30px] font-bold">Ornate Makeup Studio</h1>
          <p className="text-[20px] text-[#A4A4A4] font-normal">
            Highlighting the artistry of beauty, our photoshoots for Orante
            Makeup Studio capture the stunning transformations of bridal and
            party looks. With a focus on elegance and finesse, we bring out the
            essence of each makeup style, showcasing the creativity and
            expertise that define Orante’s signature touch.
          </p>
        </div>
        <div className="right-content w-[600px] h-[500px] bg-gray-50 rounded-[10px] ml-auto "></div>
      </div>
    </div>
  );
}

export default HomeProjectPhoto;
