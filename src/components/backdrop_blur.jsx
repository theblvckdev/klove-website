import React from "react";

const BackdropBlur = () => {
  return (
    <>
      <div className="absolute top-0 right-0 mx-24 my-10 rounded-full blur-[200px] h-96 w-96 bg-primary-0 -z-10"></div>
      <div className="absolute bottom-0 left-0 mx-24 my-10 rounded-full blur-[200px] h-80 w-80 bg-primary-0 -z-10"></div>
    </>
  );
};

export default BackdropBlur;
