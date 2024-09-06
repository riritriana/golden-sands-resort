import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [paymentData, setPaymentData] = useState(null);

  const fetchData = () => {
    fetch("http://localhost:8080/api/booking/user/" + jwtDecode(token))
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setPaymentData(res);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleBack() {
    navigate("/admin");
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button onClick={handleBack} className="p-2 bg-slate-200">
        back
      </button>
      <h1 className="text-3xl font-bold mb-6 text-center">Costumers Data</h1>
      <ul className="space-y-4">
        {paymentData &&
          paymentData.map((payment) => (
            <li
              key={payment.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex flex-col space-y-2">
                {/* <p className="text-lg font-semibold">
                  Name:{" "}
                  <span className="font-normal">{payment.idUser.name}</span>
                </p> */}
                <p className="text-lg font-semibold">
                  Email:{" "}
                  <span className="font-normal">{payment.idUser.email}</span>
                </p>
                <p className="text-lg font-semibold">
                  Phone:{" "}
                  <span className="font-normal">{payment.idUser.noHp}</span>
                </p>
                <p className="text-lg font-semibold">
                  Room Type:{" "}
                  <span className="font-normal">
                    {payment.idHotel.roomType}
                  </span>
                </p>
                <p className="text-lg font-semibold">
                  Room Price:{" "}
                  <span className="font-normal">
                    Rp. {payment.idHotel.price}
                  </span>
                </p>
                <p className="text-lg font-semibold">
                  Check-In:{" "}
                  <span className="font-normal">{payment.checkIn}</span>
                </p>
                <p className="text-lg font-semibold">
                  Check-Out:{" "}
                  <span className="font-normal">{payment.checkOut}</span>
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Details;
