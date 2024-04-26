import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

const Logo = () => {
  return (
    <>
      <Link to="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Klove logo</span>
        <img className="h-8 w-auto" src={logo} alt="klove logo" />
      </Link>
    </>
  );
};

export default Logo;
