import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RoomSuites() {
  const [hotel, setHotel] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/hotel")
      .then((response) => response.json())
      .then((data) => {
        setHotel(data);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
      });
  }, []);

  function handleShowMore(index) {
    setExpandedIndex(index === expandedIndex ? null : index);
  }

  function handleBookingNow() {
    navigate("/booking");
  }

  return (
    <div className="h-screen">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotel.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{item.roomType}</h2>
                <p className="text-red-600 font-semibold mb-4">
                  Rp. {item.price}
                </p>
                {expandedIndex === index && (
                  <div className="text-gray-700">
                    <p className="mb-2">{item.description}</p>
                    <p className="mb-2">Capacity: {item.capasity}</p>
                    <p className="mb-2">Facilities: {item.roomFacilities}</p>
                  </div>
                )}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleShowMore(index)}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
                  >
                    {expandedIndex === index ? "Show Less" : "Show More"}
                  </button>
                  <button
                    onClick={handleBookingNow}
                    className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
                  >
                    Booking Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
