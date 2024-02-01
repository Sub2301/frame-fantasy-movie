import axios from "axios";
import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/Constant";
import MovieCard from "./MovieCard";

function Body() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(CDN_URL);
      const data = response?.data;
      
      setShows(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className=" py-8 flex flex-wrap justify-center items-center px-8">
        {shows.map((showList) => (
          <MovieCard show={showList} key={showList?.show?.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
