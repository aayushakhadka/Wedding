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
    relation:friend?.relation,
    phone:friend?.phone
  }))

  useEffect(() => {
    const data = peopleData.filter((item) => item.gender === gender);
    setFilteredPeople(data);
  }, [gender]);

  console.log(filteredPeople, "filtered people");

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center pt-[6rem] gap-6"
    >
      <div className="flex items-center justify-center w-[15rem] border-gray-400 border-[1px] h-[3.5rem]">
        <h1 className="font-display text-xl">EMERGENCY CONTACT</h1>
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
              <div className="group  border-gray-400 border-[1px] shadow-md  "
              data-aos='zoom-in'
              data-aos-duration='1500'>
                <div className=" overflow-hidden  ">
                  <img
                    className="group-hover:scale-125 duration-150 group-hover:border-red-400 group-hover:rounded-t-[1rem] contrast-75 group-hover:contrast-125 w-full h-[20rem]"
                    src={friend?.image}
                  />
                </div>
                <div className="p-[1.2rem] border-gray-400 border-b-[1px] ">
                  <h1 className="flex font-display tracking-[1px] leading-7">Name: {friend?.name}</h1>
                 
                  {/* <h1 className="font-display text-black tracking-[0.1px]">
                    {friend?.name}
                  </h1> */}
                  <h1 className="font-display text-black tracking-[1px] leading-7">
                    Desgination: {friend?.relation}
                  </h1>
                  <h1 className="font-display text-black tracking-[1px] leading-7">
                    Number: {friend?.phone}
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
