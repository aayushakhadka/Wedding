import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="mb-10 shadow-md sticky top-0 z-[1000] tablet:w-[170%] laptop:w-[100%] mobileS:w-[80rem] mobileM:w-[83rem]">
      <div className="flex tablet:h-[6rem] gap-[25rem] mobileS:h-[10rem] bg-gray-100  ">
        <div className="flex justify-start">
          <img
            className="h-[6rem] ml-[10rem] mobileS:ml-[0rem] mobileS:hidden tablet:block tablet:ml-[8rem]"
            src="https://img.freepik.com/free-vector/minimal-line-heart-background-with-text-space_1017-23287.jpg?size=626&ext=jpg&ga=GA1.1.1576147280.1699251837&semt=sph"
          />
        </div>
        <div className="flex justify-end items-center gap-8 mobileS:ml-[-21rem] tablet:ml-[-2rem] ">
          <a href={"#home"}>
            <h1 className="font-semibold tablet:text-gray-800 tablet:text-sm laptop:text-md mobileS:text-4xl mobileS:text-gray-900 font-sans">
              HOME
            </h1>
          </a>
          <a href={"#couple"}>
            <h1 className="font-semibold  tablet:text-gray-800 tablet:text-sm laptop:text-md mobileS:text-4xl mobileS:text-gray-900  font-sans">
              COUPLE
            </h1>
          </a>

          <a href={"#story"}>
          <h1 className="font-semibold   tablet:text-gray-800 tablet:text-sm laptop:text-md mobileS:text-4xl mobileS:text-gray-900 font-sans">
            STORY
          </h1>
          </a>

          <a href={"#event"}>
          <h1 className="font-semibold   tablet:text-gray-800 tablet:text-sm laptop:text-md mobileS:text-4xl mobileS:text-gray-900  font-sans">
            EVENTS
          </h1>
          </a>

          <a href={"#people"}>
          <h1 className="font-semibold   tablet:text-gray-800 tablet:text-sm laptop:text-md  mobileS:text-4xl mobileS:text-gray-900 font-sans">
            PEOPLE
          </h1>
          </a>

          <a href={"#gallery"}>
          <h1 className="font-semibold   tablet:text-gray-800 tablet:text-sm laptop:text-md mobileS:text-4xl mobileS:text-gray-900 font-sans">
            GALLERY
          </h1>
          </a>

          <a href={"#rsvp"}>
          <h1 className="font-semibold    tablet:text-gray-800 tablet:text-sm laptop:text-md  mobileS:text-4xl mobileS:text-gray-900 font-sans">
            RSVP
          </h1>
          </a>

          <h1 className="font-semibold  tablet:text-gray-800 tablet:text-sm laptop:text-md  mobileS:text-4xl mobileS:text-gray-900  font-sans">
            BLOG
          </h1>
        </div>
      </div>
      <div className="w-[100%] h-[5px] border-2 color-black"></div>
    </div>
  );
};
