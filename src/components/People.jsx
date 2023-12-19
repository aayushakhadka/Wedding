import React, { useEffect, useState } from "react";
import people from "../data/people";

export const People = () => {
  const peopleData = people;

  const [gender, setGender] = useState("male");
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    const data = peopleData.filter((item) => item.gender === gender);
    setFilteredPeople(data);
  }, [gender]);

  console.log(filteredPeople, "filtered people");

  return (
    <div id='people'>
    <div className="bg-gray-50 tablet:h-[80rem] mt-[5rem] flex flex-col items-center justify-center tablet:w-[170%] laptop:w-[100%] mobileS:w-[80rem]">
      <div className=" flex items-center justify-center gap-3   tablet:w-[25rem] border-2 tablet:h-[4rem] bg-gray-200 mobileS:h-[7rem] mobileS:w-[40rem]">
        <h1 className="font-custom tablet:text-3xl text-gray-600 mobileS:text-5xl">
          Groomsmen & Bridesmaid
        </h1>
      </div>
      <div className="mt-10 ">
        <button
          className="tablet:h-[2.5rem] tablet:w-[8rem] bg-gray-200 mr-[2rem] font-sm tablet:text-sm text-gray-600 rounded -sm hover:bg-green-700 hover:text-white mobileS:h-[5rem] mobileS:w-[18rem] mobileS:text-4xl"
          onClick={() => setGender("male")}
        >
          Groomsmen
        </button>
        <button
          className=" tablet:h-[2.5rem] tablet:w-[8rem] bg-gray-200 rounded-sm font-sm tablet:text-sm text-gray-600 hover:bg-green-700 hover:text-white mobileS:h-[5rem] mobileS:w-[18rem] mobileS:text-4xl"
          onClick={() => setGender("female")}
        >
          Bridesmaid
        </button>
      </div>

      <div className="tablet:grid tablet:grid-cols-3 mobileS:grid mobileS:grid-cols-2 w-full">
        {filteredPeople.map((people, index) => {
          return (
            <div className="group flex flex-col mr-[1rem] mt-[4rem] tablet:ml-[1rem] laptop:ml-[2rem] laptop:mr-[2rem] mobileS:ml-[1rem] mobileS:mb-[2rem]">
              <div className="relative contrast-75 tablet:h-[20rem] overflow-hidden duration-150">
                <img
                  className="absolute group-hover:rotate-6 group-hover:scale-125 duration-150"
                  src={people?.img}
                />
              </div>
              <div className="flex flex-col items-center justify-center tablet:h-[10rem] w-full   tablet:mr-[1rem] bg-white mobileS:h-[15rem]">
                <h1 className="tablet:text-lg font-semibold text-gray-800 mobileS:text-4xl">
                  {people?.name}
                </h1>
                <h1 className="tablet:text-lg text-gray-500 tracking-[0.1px] mobileS:text-4xl">
                  {people?.groomman}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};
