import React from "react";

const Button = ({ body, variant }) => {
  return (
    <>
      {variant === "primary" ? (
        <button
          data-test-id="button"
          className="py-3 px-5 bg-primary-0 rounded-md flex items-center justify-center font-rubik text-white hover:bg-black-0"
        >
          {body}
        </button>
      ) : (
        <button
          data-test-id="button"
          className="py-3 px-5 rounded-md bg-transparent flex items-center justify-center font-rubik text-white"
        >
          {body}
        </button>
      )}
    </>
  );
};

export default Button;
