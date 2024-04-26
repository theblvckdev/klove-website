import React from "react";
import BackdropBlur from "../../../components/backdrop_blur";
import BackdropAbstractLines from "../../../components/backdrop_abstract_lines";
import Button from "../../../components/global_ui_components/button/button";
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <section className="h-screen w-screen bg-secondary-0 relative z-10 overflow-hidden">
        {/* backdrop blur effect */}
        <BackdropBlur />

        {/* backdrop abstract lines */}
        <BackdropAbstractLines />

        <div className="h-full w-full max-w-6xl mx-auto flex items-center gap-y-5 justify-center flex-col lg:px-0 md:px-5 px-3">
          <div className="w-fit mx-auto p-2 rounded-full px-5 shadow text-sm text-white bg-gray-50 bg-opacity-15 uppercase font-poppins">
            expertise you can trust
          </div>

          <h1 className="text-white lg:text-6xl md:text-4xl text-3xl font-rubik font-bold text-center capitalize">
            elevate your productivity with <br />
            <span className="underline text-primary-0">Klove</span> in your
            projects.
          </h1>

          <p className="text-white opacity-70 font-poppins text-center lg:text-base text-sm lg:max-w-3xl md:max-w-xl w-full">
            Welcome to Klove, where digital innovation meets strategic
            excellence, we are dedicated tourat propelling an organized way of
            handling your daily tasks.
          </p>

          <div className="flex gap-x-4 items-center">
            <Button variant={"primary"} body={"Start free trial"} />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
