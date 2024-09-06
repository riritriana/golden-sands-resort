export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="text-3xl font-bold mb-8 mt-2">About Us</div>
      <div className="w-3/4 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row w-full mb-8">
          <img
            src="https://i.pinimg.com/originals/40/5d/22/405d224f6a9d991e11bc0c11b334d239.jpg"
            alt="Golden Sands Resort"
            className="w-full lg:w-1/3 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer mb-4 lg:mb-0"
          />
          <div className="ml-0 lg:ml-8 p-4 text-gray-700 flex-1">
            <p className="text-lg leading-relaxed">
              Welcome to the Golden Sands Resort, a luxurious retreat nestled
              along the pristine shores of Crystal Bay. Established in 1985 by
              renowned hospitality expert, John D. Carmichael, our resort offers
              an unparalleled experience of relaxation and adventure.
              <br />
              <br />
              Located at 123 Ocean Breeze Lane, Crystal Bay, our resort boasts
              stunning views, world-class amenities, and a dedicated staff
              committed to making your stay unforgettable. Whether youre here to
              unwind on the golden sands or explore the vibrant marine life,
              Golden Sands Resort is your ultimate getaway destination.
            </p>
          </div>
        </div>
        <div className="w-full max-w-screen-xl h-[350px]">
          <p className="text-xl font-semibold">Our location</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.966329199656!2d107.56659577736549!3d-6.894630975324971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5ebd97d2b3f%3A0x897b4aaa652028b6!2sUniversitas%20Nasional%20PASIM%20Bandung!5e0!3m2!1sid!2sid!4v1725500555025!5m2!1sid!2sid"
              width="100%"
              height="75%"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
