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
        if (Array.isArray(data)) {
          setHotel(data);
        } else {
          console.error("Expected an array, got:", data);
          setHotel([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
        setHotel([]);
      });
  }, []);

  function handleShowMore(index) {
    setExpandedIndex(index === expandedIndex ? null : index);
  }

  function handleBookingNow(id) {
    navigate("/booking/" + id);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-screen-lg mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hotel.length > 0 ? (
            hotel.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="font-bold text-2xl mb-2">{item.roomType}</h2>
                  {/* Harga tampil di bawah tipe kamar */}
                  <p className="text-red-600 font-semibold text-lg mb-4">
                    Rp. {item.price}
                  </p>
                  {/* Bagian deskripsi muncul jika show more */}
                  {expandedIndex === index && (
                    <div className="text-gray-700 text-base">
                      <p className="mb-2">{item.description}</p>
                      <p className="mb-2">Capacity: {item.capasity}</p>
                      <p className="mb-2">Facilities: {item.roomFacilities}</p>
                    </div>
                  )}
                  {/* Tombol Show More dan Booking Now */}
                  <div className="flex justify-between items-center mt-6">
                    <button
                      onClick={() => handleShowMore(index)}
                      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                      {expandedIndex === index ? "Show Less" : "Show More"}
                    </button>
                    <button
                      onClick={() => handleBookingNow(item.id)}
                      className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
                    >
                      Booking Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No rooms available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
