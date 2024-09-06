// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Payment = () => {
//   const token = Cookies.get("token");
//   const [paymentData, setPaymentData] = useState(null);
//   const navigate = useNavigate();

//   const fetchData = () => {
//     fetch("http://localhost:8080/api/booking/user/" + jwtDecode(token))
//       .then((response) => response.json())
//       .then((res) => {
//         console.log(res);
//         setPaymentData(res);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDoneClick = () => {
//     alert("Terimakasih telah registrasi");
//     setTimeout(() => {
//       navigate("/");
//     }, 2000); // Delay of 2 seconds before navigating
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Booking Details</h1>
//       <ul className="space-y-4">
//         {paymentData &&
//           paymentData.map((payment) => (
//             <li
//               key={payment.id}
//               className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
//             >
//               <div className="flex flex-col space-y-2">
//                 <p className="text-lg font-semibold">
//                   Email:{" "}
//                   <span className="font-normal">{payment.idUser.email}</span>
//                 </p>
//                 <p className="text-lg font-semibold">
//                   Phone:{" "}
//                   <span className="font-normal">{payment.idUser.noHp}</span>
//                 </p>
//                 <p className="text-lg font-semibold">
//                   Room Type:{" "}
//                   <span className="font-normal">
//                     {payment.idHotel.roomType}
//                   </span>
//                 </p>
//                 <p className="text-lg font-semibold">
//                   Room Price:{" "}
//                   <span className="font-normal">
//                     Rp. {payment.idHotel.price}
//                   </span>
//                 </p>
//                 <p className="text-lg font-semibold">
//                   Check-In:{" "}
//                   <span className="font-normal">{payment.checkIn}</span>
//                 </p>
//                 <p className="text-lg font-semibold">
//                   Check-Out:{" "}
//                   <span className="font-normal">{payment.checkOut}</span>
//                 </p>
//               </div>
//               <button
//                 onClick={handleDoneClick}
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Done
//               </button>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Payment;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function Payment() {
  const token = Cookies.get("token");
  const [paymentData, setPaymentData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(`http://localhost:8080/api/booking/user/${jwtDecode(token)}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setPaymentData(res);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDoneClick = () => {
    if (selectedOption) {
      alert("Terimakasih telah memilih pembayaran");
      setTimeout(() => {
        navigate("/");
      }, 2000); // Delay of 2 seconds before navigating
    } else {
      alert("Please select a payment option");
    }
  };

  const handleCancel = () => {
    navigate("/"); // Navigate to home or a different page on cancel
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Booking Details
        </h1>
        <ul className="space-y-4 mb-6">
          {paymentData &&
            paymentData.map((payment) => (
              <li
                key={payment.id}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
              >
                <div className="flex flex-col space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    Email:{" "}
                    <span className="font-normal text-gray-600">
                      {payment.idUser.email}
                    </span>
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Phone:{" "}
                    <span className="font-normal text-gray-600">
                      {payment.idUser.noHp}
                    </span>
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Room Type:{" "}
                    <span className="font-normal text-gray-600">
                      {payment.idHotel.roomType}
                    </span>
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Room Price:{" "}
                    <span className="font-normal text-gray-600">
                      Rp. {payment.idHotel.price}
                    </span>
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Check-In:{" "}
                    <span className="font-normal text-gray-600">
                      {payment.checkIn}
                    </span>
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Check-Out:{" "}
                    <span className="font-normal text-gray-600">
                      {payment.checkOut}
                    </span>
                  </p>
                </div>
              </li>
            ))}
        </ul>
        <div className="mb-6">
          <p className="text-2xl font-semibold mb-4 text-center text-gray-700">
            Choose Payment
          </p>
          <div className="flex flex-col space-y-4">
            <label className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-sm">
              <input
                type="radio"
                name="paymentOption"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <img
                src="https://i.pinimg.com/236x/f2/7d/e0/f27de0e4a01ba9dfe8607ac03a4f7aae.jpg"
                alt="Payment Option 1"
                className="w-24 h-24 object-cover"
              />
            </label>
            <label className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-sm">
              <input
                type="radio"
                name="paymentOption"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <img
                src="https://i.pinimg.com/236x/04/62/6d/04626d8f419bb651188bfc3c88b55516.jpg"
                alt="Payment Option 2"
                className="w-24 h-24 object-cover"
              />
            </label>
            <label className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-sm">
              <input
                type="radio"
                name="paymentOption"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <img
                src="https://i.pinimg.com/236x/ed/a9/aa/eda9aabed661a98d62c5df2df6879258.jpg"
                alt="Payment Option 3"
                className="w-24 h-24 object-cover"
              />
            </label>
            <label className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-sm">
              <input
                type="radio"
                name="paymentOption"
                value="option4"
                checked={selectedOption === "option4"}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <img
                src="https://i.pinimg.com/236x/aa/0e/67/aa0e67d2e759af6d677088e9160784d1.jpg"
                alt="Payment Option 4"
                className="w-24 h-24 object-cover"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleDoneClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Payment
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
