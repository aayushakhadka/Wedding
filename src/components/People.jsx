import React, { useEffect, useState } from "react";
import people from "../data/people";
import Layout from "../common/Layout";
import { useApiData } from "./ApiDataProvider";

export const People = () => {
  const {data}=useApiData();
  console.log(data,'data')
  const peopleData = people;

  const [gender, setGender] = useState("male");
  const [filteredPeople, setFilteredPeople] = useState([]);

  const contact=data?.closeFriends.map((friend)=>({
    image:friend?.image?.image?.fileUrl,
    name:friend?.name,
    relation:friend?.relation
  }))

  useEffect(() => {
    const data = peopleData.filter((item) => item.gender === gender);
    setFilteredPeople(data);
  }, [gender]);

  console.log(filteredPeople, "filtered people");

  return (
    <div
      id="people"
      className="flex flex-col items-center justify-center pt-[5rem] gap-6"
    >
      <div className="flex items-center justify-center w-[15rem] border-gray-200 border-[1px] h-[3.5rem] bg-gray-100">
        <h1 className="font-display">EMERGENCY CONTACT</h1>
      </div>
      {/* <div className="flex gap-6">
        <button
          className="h-[2.5rem] w-[8rem] font-display bg-gray-300"
          onClick={() => setGender("male")}
        >
          Groomsmen
        </button>
        <button
          className="h-[2.5rem] w-[8rem] font-display bg-gray-300"
          onClick={() => setGender("female")}
        >
          Bridesmaid
        </button>
      </div> */}
      <Layout style={{ height: "fit-content" }}>
        <div className="grid laptop1:grid-cols-3 gap-7 pt-[3rem] tablet:grid-cols-2">
          {contact?.map((friend, index) => {
            return (
              <div className="group">
                <div className=" overflow-hidden rounded-t-[1rem]">
                  <img
                    className="group-hover:scale-125 duration-150 rounded-t-[1rem] contrast-75 group-hover:contrast-125"
                    src={friend?.image}
                  />
                </div>
                <div className="h-[8rem] flex flex-col items-center justify-center bg-gray-400 rounded-b-[1rem]">
                  <h1 className=" font-display text-black ">{people?.name}</h1>
                  <h1 className="font-display text-black tracking-[0.1px]">
                    {friend?.name}
                  </h1>
                  <h1 className="font-display text-black tracking-[0.1px]">
                    {friend?.relation}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};
