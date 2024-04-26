import React from "react";

const Button = ({ body, variant }) => {
  return (
    <>
      {variant === "primary" ? (
        <button
          data-testid="button"
          className="py-3 px-5 text-sm bg-primary-0 rounded-md flex items-center justify-center font-rubik text-white hover:bg-white hover:text-gray-900 duration-300 ease-in shadow-lg capitalize tracking-wide"
        >
          {body}
        </button>
      ) : variant === "white" ? (
        <button
          data-testid="button"
          className="py-3 px-5 text-sm rounded-md bg-white flex items-center justify-center font-rubik text-gray-900 hover:bg-primary-0 hover:text-white duration-300 ease-in capitalize tracking-wide"
        >
          {body}
        </button>
      ) : (
        <button
          data-testid="button"
          className="py-3 px-5 text-sm rounded-md bg-transparent flex items-center justify-center font-rubik text-white capitalize tracking-wide"
        >
          {body}
        </button>
      )}
    </>
  );
};

Button.default = {
  body: "button text",
  variant: "primary",
};

export default Button;
