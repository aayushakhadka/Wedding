import React, { useEffect, useState } from "react";
import people from "../data/people";
import Layout from "../common/Layout";

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
    <div id='people' className="flex flex-col items-center justify-center pt-[5rem] gap-6">
        <div className="flex items-center justify-center w-[15rem] border-gray-200 border-[1px] h-[3.5rem] bg-gray-100">
          <h1 className="font-display">Groomsmen & Bridesmaid</h1>
          </div>
      <div className="flex gap-6">    

        <button className="h-[2.5rem] w-[8rem] font-display bg-gray-300"
         onClick={() => setGender("male")}
        >
          Groomsmen
        </button>
        <button className="h-[2.5rem] w-[8rem] font-display bg-gray-300"
          onClick={() => setGender("female")}
        >
          Bridesmaid
        </button>
        </div>
<Layout style={{height:'fit-content'}}>

<div className="grid laptop1:grid-cols-3 gap-7 pt-[3rem] tablet:grid-cols-2">
         {filteredPeople.map((people, index) => {
          return (<div className="group">
            <div className=" overflow-hidden rounded-t-[1rem]">
                <img
                  className="group-hover:scale-125 duration-150 rounded-t-[1rem] contrast-75 group-hover:contrast-125"
                  src={people?.img}
                />
                </div>
                <div className="h-[8rem] flex flex-col items-center justify-center bg-gray-400 rounded-b-[1rem]">
                <h1 className=" font-display text-black ">
                  {people?.name}
                </h1>
                <h1 className="font-display text-black tracking-[0.1px]">
                  {people?.groomman}
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
