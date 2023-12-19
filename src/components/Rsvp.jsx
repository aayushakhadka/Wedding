import React from "react";
import weddingImage from "../images/wedding-couple.jpg";

export const Rsvp = () => {
  return (
    <div id='rsvp'>
    <div className="bg-wedding bg-cover mt-[8rem] bg-center tablet:h-[50rem] tablet:w-[170%] laptop:w-[100%] mobileS:w-[80rem] mobileS:h-[70rem] mobileM:w-[83rem]">
      {/* <img className="absolut/e opacity-80" src={weddingImage} /> */}
      <div className="bg-black opacity-80 tablet:h-[50rem] mobileS:h-[70rem] relative ">
        <div className="  h-[50rem] w-[100%] flex flex-col  ">
          <div className="flex flex-col items-center justify-center mt-[8rem]">
            <div className="bg-white h-[2px] w-[21%] "></div>
            <div className="bg-gray-800 border-3 border-gray-100 tablet:h-[4rem] tablet:w-[20rem] flex items-center justify-center mobileS:h-[5rem] mobileS:w-[30rem]">
              <h1 className="text-white tablet:text-4xl font-custom mobileS:text-5xl">
                Join Our Party
              </h1>
            </div>
            <div className="bg-white h-[1.9px] w-[21%] "></div>
          </div>

          <div className="mt-[3rem] flex flex-col items-center justify-center">
            <h1 className="tablet:mr-[30rem] text-gray-300 mobileS:text-4xl tablet:text-md laptop:text-sm mobileS:mr-[10rem]">
              Please reserve before December 16th,2017
            </h1>
            <div className=" flex ">
              <input
                className="pl-5 mt-[4rem] tablet:w-[35rem] laptop:w-[24rem] laptop:h-[3rem] tablet:h-[4rem] tablet:text-lg laptop:text-sm rounded-md mobileS:h-[7rem] mobileS:w-[35rem] mobileS:text-5xl "
                placeholder="Your Name"
                type="text"
              />
              <input
                className=" pl-5 mt-[4rem] ml-[1rem] tablet:w-[35rem] laptop:w-[24rem] laptop:h-[3rem] tablet:text-lg laptop:text-sm  tablet:h-[4rem] rounded-md mobileS:h-[7rem] mobileS:w-[35rem] mobileS:text-5xl"
                placeholder="Your Email"
                type="text"
              />
            </div>
            <div>
              <select className=" pl-5 mt-[1rem] mr-[1rem] tablet:w-[35rem] tablet:h-[4rem] laptop:w-[24rem] rounded-md tablet:text-lg laptop:text-sm mobileS:h-[7rem] mobileS:w-[35rem] mobileS:text-5xl">
                <option value="0">Number of Guest</option>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
              </select>
              <select className=" pl-5 tablet:w-[35rem] tablet:h-[4rem] tablet:text-lg laptop:text-sm rounded-md mobileS:h-[7rem] laptop:w-[24rem] laptop:h-[3rem] mobileS:w-[35rem] mobileS:text-5xl">
                <option value="0">I am Attending *</option>
                <option value="0">AI Events</option>
                <option value="0">Wedding Ceremony</option>
                <option value="0">Reception Party</option>
                <option value="0">4</option>
              </select>
            </div>
            <input
              className="tablet:h-[12rem] tablet:w-[70rem] laptop:w-[49rem] rounded-md mt-[1rem] pb-40 pt-5 pl-5 text-black mobileS:h-[20rem] mobileS:w-[70rem] mobileS:text-5xl tablet:text-lg laptop:text-sm"
              type="text"
              placeholder="Your Message*"
            />
            <button className="tablet:w-[10rem] tablet:h-[2.5rem] text-white tablet:text-sm bg-green-300 mt-[2rem] font-semibold rounded-md mobileS:h-[8rem] mobileS:w-[25rem] text-4xl">
              SEND INVITATION
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
