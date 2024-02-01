import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-semibold text-slate-400">
      <h1 className="">OPPS!</h1>
      <h2>Something Went Wrong</h2>
      <h3 className="">
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
}

export default Error;
