import React from "react";
import patner from "../data/patner";
import Countdown from "./Countdown";
export const Couple = () => {
  return (
    <div id="couple">
      <div className=" ml-[11rem] tablet:mt-[10rem] tablet:ml-[8rem] laptop:ml-[12rem] w-[75%] mb-[4rem] mt-[7rem] tablet:h-[45rem]  laptop1:ml-[21rem] mobileS:mb-[15rem] tablet:mb-[5rem] mobileM:ml-[13rem]">
        {patner?.map((patner, index) => {
          return (
            <div className="tablet:flex tablet:flex-row mobileS:flex mobileS:flex-col bg-gray-300 tablet:w-[70rem] laptop:w-[70rem] tablet:ml-[0rem] mobileS:ml-[-6rem] laptop1:w-[70rem] mobileS:w-[70rem] mobileS:mb-[2rem] tablet:mb-[0rem] rounded-2xl shadow-md">
              <img
                className={`tablet:h-[22rem] ${
                  index === 0
                    ? "rounded-tl-2xl rounded-tr-2xl"
                    : "rounded-bl-2xl rounded-br-2xl"
                }  mobileS:w-[70rem]`}
                src={patner?.img}
              />
              <div className="tablet:flex tablet:flex-col ml-[3rem] mt-[2rem]  ">
                <h1 className="tablet:text-2xl text-gray-700  tablet:font-semibold mobileS:font-semibold mobileS:text-5xl">
                  {patner?.intro}
                </h1>
                <p className="tablet:w-[29rem] pt-[1rem] text-gray-600 tablet:text-sm tablet:leading-7 font-serif mobileS:text-4xl mobileS:w-[60rem] mobileS:leading-[3rem] ">
                  {patner?.description}
                </p>
                <h1 className="pt-[2rem] tablet:text-2xl font-custom mobileS:text-5xl ">
                  {patner?.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
