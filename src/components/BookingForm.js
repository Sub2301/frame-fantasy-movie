import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingForm({ openPopUp, closePopUp, showName }) {
  const [email, setEmail] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [date, setDate] = useState(new Date());

  const handleConfirmBooking = () => {
    const userDetails = {
      showName,
      email,
      numberOfPersons,
      date: date.toISOString(),
    };
    localStorage.setItem(userDetails, JSON.stringify(userDetails));

    closePopUp();
  };

  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full p-3 justify-center items-center">
          <h3 className="text-center font-bold text-xl">Book Ticket</h3>
          <form onSubmit={handleConfirmBooking}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Show Name
              </label>
              <input
                name="showName"
                value={showName}
                readOnly
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                name="Email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4 pl-3">
              <label className="block text-sm font-medium text-gray-700">
                Number of Persons
              </label>
              <select
                name="numberOfPersons"
                value={numberOfPersons}
                onChange={(e) => setNumberOfPersons(parseInt(e.target.value))}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4 pl-3">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="yyyy-MM-dd"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-[#F7BE38] ml-3 text-white px-2 py-1  rounded-md hover:bg-[#F7BE38]/90 focus:outline-none focus:ring-2 focus:ring-[#F7BE38]"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
