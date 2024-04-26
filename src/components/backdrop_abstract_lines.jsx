import React from "react";
import abstractLines from "../assets/svg/backdrop_abstrackt_line.svg";

const BackdropAbstractLines = () => {
  return (
    <>
      <div className="absolute h-full w-full -z-10 md:opacity-15 opacity-35">
        <img
          src={abstractLines}
          className="h-full w-full object-cover"
          alt="abstrackt lines"
        />
      </div>
    </>
  );
};

export default BackdropAbstractLines;
