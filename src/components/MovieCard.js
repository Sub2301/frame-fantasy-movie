import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/dummy.png";

function MovieCard({ show }) {
  const { genres, image, name, rating, language } = show?.show;

  const defaultImagePath = logo;

  return (
    <div className="m-4">
      <div className="transform hover:scale-110 transition-transform duration-300">
        <div className="w-64 bg-black rounded-lg text-white">
          <div>
            <img
              src={image?.original || defaultImagePath}
              alt={name}
              className="w-64 h-80 rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <hr />
          <div className="flex justify-evenly p-2">
            <p className="pl-4">{rating.average || "N.A"}/10</p>
            <p>{language}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center my-4">
        <div>
          <h2 className="font-semibold text-lg tracking-wide">{name}</h2>
          <h4 className="text-sm text-gray-500 font-medium">
            {genres?.join(", ")}
          </h4>
        </div>

        <NavLink to={"/show/" + name}>
          <button
            type="button"
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 px-2 py-2"
          >
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default MovieCard;
