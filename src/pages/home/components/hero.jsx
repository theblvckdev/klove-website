import React from "react";
import BackdropBlur from "../../../components/backdrop_blur";
import BackdropAbstractLines from "../../../components/backdrop_abstract_lines";
import Button from "../../../components/global_ui_components/button/button";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="h-screen w-screen bg-secondary-0 relative z-10 overflow-hidden">
        {/* backdrop blur effect */}
        <BackdropBlur />

        {/* backdrop abstract lines */}
        <BackdropAbstractLines />
        <div className="relative z-10 h-full w-full">
          <div className="h-full w-full max-w-6xl mx-auto flex items-center gap-y-5 justify-center flex-col lg:px-0 md:px-5 px-3">
            <div
              data-aos="fade-up"
              className="w-fit mx-auto p-2 rounded-full px-5 shadow text-sm text-white bg-gray-50 bg-opacity-15 uppercase font-poppins"
            >
              boost your productivity today!!
            </div>

            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-white lg:text-6xl md:text-4xl text-3xl font-rubik font-bold text-center capitalize"
            >
              elevate your productivity with <br />
              <span className="underline text-primary-0">Klove</span> in your
              projects.
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-white opacity-70 font-poppins text-center lg:text-base text-sm lg:max-w-3xl md:max-w-xl w-full"
            >
              Welcome to Klove, where digital innovation meets strategic
              excellence, we are dedicated tourat creating an organized space
              for you handling your daily tasks and projects.
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex gap-x-4 items-center"
            >
              <Link to={"/"} className="no-underline outline-none">
                <Button variant={"primary"} body={"Start free trial"} />
              </Link>

              <Link to={"/"} className="no-underline outline-none">
                <Button
                  variant={"transparent"}
                  body={
                    <>
                      <div className="flex gap-2 items-center">
                        <div>Learn more</div>
                        <IoArrowForward />
                      </div>
                    </>
                  }
                />
              </Link>
            </div>
          </div>

          {/* scroll down button */}
          <button className="w-5 h-8 rounded-full ring-1 ring-white absolute bottom-0 left-[50%] -translate-x-[50%] my-5 flex items-center justify-center">
            <div className="h-1 w-1 bg-white rounded-full animate-bounce"></div>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
