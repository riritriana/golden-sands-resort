import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [booking, setBooking] = useState(null);
  const [hotel, setHotel] = useState([]);
  const [currentBooking, setCurrentBooking] = useState({
    idHotel: booking,
    checkIn: "",
    checkOut: "",
    idUser: {
      id: null,
    },
  });
  const token = Cookies.get("token");
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    await fetch("http://localhost:8080/api/hotel/" + id)
      .then((response) => response.json())
      .then((data) => {
        setHotel([data]);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    currentBooking.idHotel = hotel[0];
    currentBooking.idUser.id = jwtDecode(token);
    console.log(currentBooking);

    fetch("http://localhost:8080/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("token"),
      },
      body: JSON.stringify(currentBooking),
    })
      .then((response) => response.text())
      .then((res) => {
        console.log(res); // Clear the form or give feedback
        navigate("/payment"); // Navigate to the payment page after booking
      })
      .catch((error) => {
        console.error("Error booking room:", error);
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  if (!token) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-auto">
        <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Booking Rooms
        </h1>
        <form onSubmit={handleSubmit}>
          {hotel.map((h) => (
            <div key={h.id} className="mb-4">
              <img
                src={h.image}
                alt={h.roomType}
                className="w-full h-40 object-cover rounded-md shadow-sm mb-4"
              />
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-700">
                  {h.roomType}
                </p>
                <p className="text-gray-500">Price: Rp.{h.price}</p>
                <p className="text-gray-600">{h.description}</p>
                <p className="text-gray-500">Capacity: {h.capasity}</p>
                <p className="text-gray-500">Facilities: {h.roomFacilities}</p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Check In
              </label>
              <input
                type="date"
                name="checkIn"
                value={currentBooking.checkIn}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Check Out
              </label>
              <input
                type="date"
                name="checkOut"
                value={currentBooking.checkOut}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition ease-in-out"
            >
              Book Now
            </button>
            <button
              type="button"
              onClick={() => navigate("/")} // Navigate to home when Cancel is clicked
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-400 transition ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
