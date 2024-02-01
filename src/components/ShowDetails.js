import React, { useEffect, useState } from "react";
import { SHOW_URL } from "../utils/Constant";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import logo from "../assets/dummy.png";

function ShowDetails() {
  const [show, setShow] = useState({});
  const [openPopup, setOpenPopup] = useState(false);
  const { showName } = useParams();
  const navigate = useNavigate();
  const HandleRemovePopUp = () => setOpenPopup(false);

  const defaultImagePath = logo;

  useEffect(() => {
    const fetchShowDetails = async () => {
      const response = await axios.get(SHOW_URL + showName);
      setShow(response.data);
    };

    fetchShowDetails();
  }, [showName]);

  const { genres, runtime, image, summary, name, rating, language } =
    show[0]?.show || {};

  // Remove HTML tags using regex
  // Getting HTML TAGs in Response , so that we have to regex the summary
  const plainText = summary?.replace(/<[^>]*>/g, "");

  const handleBookTickets = () => {
    // console.log("object");
    navigate(`book-ticket`);
  };

  return (
    <div>
      <div className="bg-black text-white py-10 w-[100%] flex px-24">
        <div className="flex justify-around items-center w-[35%] m-4">
          <img
            src={image?.original || defaultImagePath}
            alt={name}
            className="rounded-2xl w-72 h-96  "
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-2 w-[65%]">
          <h2 className="font-bold text-4xl pb-4">{name}</h2>
          <p className="font-semibold text-2xl flex items-center gap-4">
            <FaStar />
            {rating?.average}/10
          </p>
          <p className=" text-l text-slate-500 my-4 ">{plainText}</p>
          <div className="flex gap-4 font-bold my-4">
            <p className="flex items-center gap-1">
              <IoIosTimer />
              {runtime} Mins
            </p>
            <p>{genres?.join(", ")}</p>
            <p>{language}</p>
          </div>
          <button
            onClick={() => setOpenPopup(true)}
            className="py-2 px-4 bg-blue-800  rounded-md inline-block text-white"
          >
            Book Tickets
          </button>
        </div>
      </div>

      <BookingForm
        openPopUp={openPopup}
        closePopUp={HandleRemovePopUp}
        showName={name}
      ></BookingForm>
    </div>
  );
}

export default ShowDetails;
