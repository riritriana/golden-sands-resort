import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    image:
      "https://i.pinimg.com/564x/5f/30/0d/5f300dc30d3c384ad78c40415c8b56c0.jpg",
  },
  {
    image:
      "https://i.pinimg.com/564x/47/b6/b5/47b6b5ea53c574347f8bb171a8f520c2.jpg",
  },
  {
    image:
      "https://i.pinimg.com/564x/e9/0b/28/e90b28b8690c34e53ae521bd0e72ae3b.jpg",
  },
];

export default function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function handlePrevious() {
    setCount((count - 1 + images.length) % images.length);
  }

  function handleNext() {
    setCount((count + 1) % images.length);
  }

  function handleNavigate() {
    navigate("/galery");
  }

  return (
    <div className="font-serif">
      <div className="flex w-full justify-center items-center gap-2 p-4">
        <div className="w-1/2 ml-8">
          <h1 className="text-2xl font-bold text-black text-shadow-md">
            Welcome To Golden Sands Resort
          </h1>
          <h2 className="text-xl">Book Your Dream Away</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            numquam a commodi ipsam consequuntur dolor maiores. Rem dignissimos
            quasi distinctio ullam, repellendus nesciunt. Dignissimos labore id
            sapiente quos, porro nostrum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae, numquam! Totam, est! Blanditiis,
            consectetur ducimus! Nulla inventore in recusandae laborum, ipsam
            eveniet nisi quia autem dolore beatae ut! Illum, nesciunt. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Neque, quidem
            corporis? Nisi reiciendis asperiores itaque quae similique delectus,
            odio labore distinctio error at veniam earum, non ipsum repellendus
            architecto incidunt.
          </p>
          <button
            className="p-3 mt-4 bg-blue-200 hover:bg-blue-400 font-semibold rounded-lg"
            onClick={handleNavigate}
          >
            EXPLORE OUR HOTEL
          </button>
        </div>
        <div className="relative p-10 flex flex-col items-center">
          <div className="flex gap-4">
            <img
              className="rounded-lg w-48 h-48 object-cover border-2 border-black transform transition duration-500 hover:scale-105 hover:rotate-3 cursor-pointer active:scale-95"
              src="https://i.pinimg.com/564x/5f/30/0d/5f300dc30d3c384ad78c40415c8b56c0.jpg"
              alt="Image 1"
            />
            <img
              className="rounded-lg w-48 h-48 object-cover border-2 border-black transform transition duration-500 hover:scale-105 hover:rotate-3 cursor-pointer active:scale-95"
              src="https://i.pinimg.com/564x/47/b6/b5/47b6b5ea53c574347f8bb171a8f520c2.jpg"
              alt="Image 2"
            />
          </div>
          <img
            className="rounded-lg w-56 h-56 object-cover mt-[-24px] border-2 border-black transform transition duration-500 hover:scale-105 hover:rotate-3 cursor-pointer active:scale-95"
            src="https://i.pinimg.com/564x/e9/0b/28/e90b28b8690c34e53ae521bd0e72ae3b.jpg"
            alt="Image 3"
          />
        </div>
      </div>
      <div className="mt-8 mb-10">
        <h1 className="flex justify-center items-center mb-4 text-3xl font-bold text-blue-300 text-shadow-md">
          View Resort
        </h1>
        <div className="flex items-center justify-between max-w-[90%] mx-auto">
          <button
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8 text-gray-500" />
          </button>
          <img
            src={images[count].image}
            alt=""
            className="w-full h-[400px] object-cover rounded-lg border-2 border-black transform transition duration-500 hover:scale-105 cursor-pointer active:scale-95"
          />
          <button
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
