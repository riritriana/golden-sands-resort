export default function About() {
  return (
    <div className="h-screen flex flex-col  items-center">
      <div className="text-3xl font-bold mb-8 mt-2">About Us</div>
      <div className="flex justify-evenly items-center w-3/4">
        <img
          src="https://i.pinimg.com/originals/40/5d/22/405d224f6a9d991e11bc0c11b334d239.jpg"
          alt="Golden Sands Resort"
          className="w-1/3 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
        />
        <div className="ml-8 p-4 text-gray-700">
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
    </div>
  );
}
