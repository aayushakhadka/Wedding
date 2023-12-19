import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="bg-newlyweds bg-center bg-cover h-[33rem] mb-[0rem]  tablet:w-[170%] laptop:w-[100%] mobileS:w-[80rem] mobileM:w-[83rem]">
        <div className="bg-black h-[33rem] opacity-75">
          <div className=" flex flex-col justify-center items-center h-[30rem]">
            <h1 className="text-white text-5xl font-custom w-[30rem] text-center tracking-wide">
              Forever and always Our Love
            </h1>
            <h3 className="text-white mt-[3rem] mobileS:text-4xl tablet:text-md tracking-wider">
              -Mick[The Groom]
            </h3>
          </div>
        </div>
      </div>
      <div className="laptop:h-[5rem] mobileS:h-[15rem] flex flex-row items-center justify-between ">
        <div className="ml-[3rem]">
          <span className="text-black mobileS:text-5xl laptop:text-lg mobileS:w-[30rem] tablet:text-xl ">
            Copyright © 2019 All Rights Reserved by
          </span>
          <a
            className="text-lg font-semibold ml-[0.5rem] text-sky-700 mobileS:text-5xl laptop:text-lg mobileS:mr-[20rem] laptop:mr-[0rem] tablet:text-xl "
            target="_blank"
            href="https://apptechnologies.co/"
          >
            App Technologies
          </a>
        </div>
        <div className="flex items-center relative  ">
          <span className="laptop:h-[2rem] laptop:w-[2rem] mobileS:h-[7rem] mobileS:w-[7rem] bg-sky-600 rounded-full flex items-center justify-center mr-[1rem] mobileS:ml-[4rem]  laptop1:ml-[50rem] tablet:ml-[25rem] laptop:ml-[0rem] tablet:h-[4rem] tablet:w-[4rem]">
            <a 
            target="_blank"
            href="https://www.facebook.com/apptechnologies1">
              <FaFacebookF className="laptop:h-[1rem] laptop:w-[1rem] mr-[1rem] mobileS:h-[3rem] mobileS:w-[3rem] text-white rounded-full ml-[1rem] flex items-center justify-center tablet:h-[2rem] tablet:w-[2rem] " />
            </a>
          </span>
          <span className=" laptop:h-[2rem] laptop:w-[2rem] mobileS:h-[7rem] mobileS:w-[7rem] bg-sky-600 rounded-full flex items-center justify-center mr-[1rem] tablet:h-[4rem] tablet:w-[4rem]">
            <a 
            target="_blank"
            href="https://twitter.com/AppTechnologies">
              <FaTwitter className=" laptop:ml-[-0.4rem] laptop:mt-[-0.5rem] laptop:h-[1rem] laptop:w-[1rem]  mobileS:h-[3rem] mobileS:w-[3rem] mobileS:ml-[-1rem] mobileS:mt-[-1rem] text-white absolute tablet:h-[2rem] tablet:w-[2rem] " />
            </a>
          </span>
          <span className=" laptop:h-[2rem] laptop:w-[2rem] mobileS:h-[7rem] mobileS:w-[7rem] bg-sky-600 rounded-full flex items-center justify-center mr-[1rem] tablet:h-[4rem] tablet:w-[4rem]">
            <a
            target="_blank"
            href="https://www.instagram.com/apptechnologies1/">
              <FaInstagram className="laptop:h-[1rem] laptop:w-[1rem]  mobileS:h-[3rem] mobileS:w-[3rem] mr-[rem] text-white tablet:h-[2rem] tablet:w-[2rem]  " />
            </a>
          </span>
          <span className="laptop:h-[2rem] laptop:w-[2rem] mobileS:h-[7rem] mobileS:w-[7rem] bg-sky-600 rounded-full flex items-center justify-center  laptop:mr-[10rem] tablet:h-[4rem] tablet:w-[4rem]">
            <a
            target="_blank"
            href="https://www.linkedin.com/company/app-technologies-pvt-ltd/">
              <FaLinkedinIn className="laptop:h-[1rem] laptop:w-[1rem] mobileS:h-[3rem] mobileS:w-[3rem] text-white tablet:h-[2rem] tablet:w-[2rem] " />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
