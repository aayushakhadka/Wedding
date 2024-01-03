import React from "react";
import patner from "../data/patner";
import Countdown from "./Countdown";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
export const Couple = () => {
  return (
    <div id="couple">
      <div className="w-[80%] mx-auto flex flex-col mobileS:gap-4 tablet:gap-0 pt-[5rem] pb-[5rem]">
        {patner?.map((patner, index) => {
          return (
            // {/* <img
            //   className={`tablet:h-[22rem] min-w-[50%] ${
            //     index === 0
            //       ? "rounded-tl-2xl rounded-tr-2xl"
            //       : "rounded-bl-2xl rounded-br-2xl"
            //   } `}
            //   src={patner?.img}
            // />
            // <div className="tablet:flex tablet:flex-col ml-[3rem] mt-[2rem]  ">
            //   <h1 className="tablet:text-2xl text-gray-700  tablet:font-semibold mobileS:font-semibold mobileS:text-5xl">
            //     {patner?.intro}
            //   </h1>
            //   <p className="tablet:w-[29rem] pt-[1rem] text-gray-600 tablet:text-sm tablet:leading-7 font-serif mobileS:text-4xl mobileS:w-[60rem] mobileS:leading-[3rem] ">
            //     {patner?.description}
            //   </p>
            //   <h1 className="pt-[2rem] tablet:text-2xl font-custom mobileS:text-5xl ">
            //     {patner?.name}
            //   </h1>
            // </div> */}

            <div
              className={`flex flex-row ${
                index === 1 && "tablet:flex-row-reverse"
              } tablet:gap-14 tablet:flex-row
              bg-slate-100  mobileS:flex-col mobileM:flex-col `}
            >
              <img src={patner?.img} className="mobileS:w-[100%] tablet:w-[50%] object-cover rounded-[1rem] shadow" />

              <div className=" flex flex-col tablet:pt-[3rem] gap-3">
                <h1 className=" font-display text-2xl flex tablet:justify-end items-end">{patner?.intro}</h1>
                <h1 className=" font-display text-2xl">{patner?.introduction}</h1>

                <p className="font-display text-sm max-w-[30rem] leading-6">{patner?.description}</p>
                <h1 className=" font-display">{patner?.name}</h1>
                <div className="flex gap-4">
                <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem]">
              <FaFacebookF className=" flex items-center translate-x-3 translate-y-3 text-white" />
          </span>
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem] ">
              <FaTwitter className=" flex items-center translate-x-3 translate-y-3 text-white " />
          </span>
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem] ">

              <FaGooglePlusG className=" flex items-center translate-x-3 translate-y-3 text-white " />
          </span>
          <span className="bg-cyan-600 rounded-full h-[2.5rem] w-[2.5rem]">
           
              <FaLinkedinIn className="flex items-center translate-x-3 translate-y-3 text-white " />
          </span>
          </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};
