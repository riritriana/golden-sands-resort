import { useState, useEffect } from "react";

export default function Admin() {
  const [hotel, setHotel] = useState([]);
  const [currentHotel, setCurrentHotel] = useState(null);

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

  function handleSave() {
    const method = currentHotel.id ? "PUT" : "POST";
    const url = currentHotel.id
      ? `http://localhost:8080/api/hotel/${currentHotel.id}`
      : "http://localhost:8080/api/hotel";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentHotel),
    })
      .then((response) => response.text())
      .then(() => {
        fetch("http://localhost:8080/api/hotel")
          .then((response) => response.json())
          .then((data) => setHotel(data));
        setCurrentHotel(null); // Clear the form
      });
  }

  function handleDelete(id) {
    fetch(`http://localhost:8080/api/hotel/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then(() => {
        setHotel((prevHotel) => prevHotel.filter((h) => h.id !== id));
      });
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 ">Admin Page</h1>
      <div className="flex gap-2 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() =>
            setCurrentHotel({
              image: "",
              roomType: "",
              description: "",
              capasity: "",
              roomFacilities: "",
              price: "",
            })
          }
        >
          Add
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Datas Customers
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {hotel.map((htl) => (
          <div
            key={htl.id}
            className="border p-4 rounded shadow-md flex flex-col lg:flex-row items-start"
          >
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0 flex flex-col items-center">
              <img
                src={htl.image}
                alt=""
                className="rounded w-full h-48 object-cover"
              />
              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={() => setCurrentHotel(htl)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(htl.id)}
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="flex-1 lg:pl-6">
              <p className="font-semibold mb-2">Room Type: {htl.roomType}</p>
              <p className="mb-2">
                <span className="font-semibold">Description:</span>{" "}
                {htl.description}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Capacity:</span> {htl.capasity}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Room Facilities:</span>{" "}
                {htl.roomFacilities}
              </p>
              <p className="font-semibold">
                Price:
                <span className="text-red-500"> Rp. {htl.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {currentHotel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-2xl max-h-[80%] p-6 rounded-lg shadow-lg overflow-auto">
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              <div>
                <label className="block font-semibold">Image URL</label>
                <input
                  type="text"
                  id="image"
                  value={currentHotel.image}
                  onChange={(e) =>
                    setCurrentHotel({ ...currentHotel, image: e.target.value })
                  }
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label htmlFor="roomType" className="block font-semibold">
                  Room Type
                </label>
                <input
                  type="text"
                  id="roomType"
                  value={currentHotel.roomType}
                  onChange={(e) =>
                    setCurrentHotel({
                      ...currentHotel,
                      roomType: e.target.value,
                    })
                  }
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label htmlFor="description" className="block font-semibold">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  value={currentHotel.description}
                  onChange={(e) =>
                    setCurrentHotel({
                      ...currentHotel,
                      description: e.target.value,
                    })
                  }
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label htmlFor="capasity" className="block font-semibold">
                  Capacity
                </label>
                <input
                  type="number"
                  id="capasity"
                  value={currentHotel.capasity}
                  onChange={(e) =>
                    setCurrentHotel({
                      ...currentHotel,
                      capasity: parseInt(e.target.value),
                    })
                  }
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label htmlFor="roomFacilities" className="block font-semibold">
                  Room Facilities
                </label>
                <input
                  type="text"
                  id="roomFacilities"
                  value={currentHotel.roomFacilities}
                  onChange={(e) =>
                    setCurrentHotel({
                      ...currentHotel,
                      roomFacilities: e.target.value,
                    })
                  }
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label htmlFor="price" className="block font-semibold">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  value={currentHotel.price}
                  onChange={(e) =>
                    setCurrentHotel({
                      ...currentHotel,
                      price: parseInt(e.target.value),
                    })
                  }
                  className="border p-2 rounded w-full"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {currentHotel.id ? "Update" : "Save"}
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setCurrentHotel(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
