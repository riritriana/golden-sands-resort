import { Instagram, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <div className="w-full bg-blue-600 text-white py-8 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>Email: goldensandsresort@gmail.com</p>
          <p>Phone: +6289723764893</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Address</h3>
          <p>123 Street Name</p>
          <p>City, State, Country</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a className="text-white hover:text-gray-200">
              <i>
                <Instagram />
              </i>
            </a>
            <a className="text-white hover:text-gray-200">
              <i>
                {" "}
                <Youtube />
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p> Copyright&copy; 2024 All Rights Reserved - Riri Triana</p>
      </div>
    </div>
  );
}
