import React, { useEffect, useState } from "react";
import event from "../data/event";
import people from "../data/people";
import Layout from "../common/Layout";
import { useApiData } from "./ApiDataProvider";
import moment from "moment/moment";

export const Event = () => {
  const { data } = useApiData();

  const days = data?.days?.map((day) => ({
    id: day?._id,
    img: day?.image?.image?.fileUrl,
    heading: day?.title,
    location: day?.location,
    time: day?.dateTime,
    paragraph: day?.description,
  }));


  const peopleData = people;

  const [gender, setGender] = useState("male");
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    const data = peopleData.filter((item) => item.gender === gender);
    setFilteredPeople(data);
  }, [gender]);


  return (
    <div
      id="event"
      className="flex flex-col items-center justify-center pt-[6rem] overflow-hidden"
    >
      <div className=" flex items-center justify-center w-[15rem] border-gray-400 border-[1px] h-[3.5rem] ">
        <h1 className="text-xl font-display ">WEDDING EVENT</h1>
      </div>
      <Layout style={{ height: "fit-content" }}>
        {days?.map((event, index) => {
          return (
            <div key={index} className=" flex tablet:flex-row mobileS:flex-col mobileM:flex-col gap-5 pt-[3rem] items-center justify-center ">
              <img
                data-aos="fade-right"
                data-aos-duration="1500"
                src={event?.img}
                className="max-h-[20rem] w-[20rem] rounded-[1rem] shadow-md object-cover  "
              />
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex flex-col justify-center"
              >
                <h1 className="font-display text-emerald-900 font-semibold">
                  {event?.heading}
                </h1>
                <h1 className="font-display pt-[0.5rem] text-sm text-gray-800">
                  {event?.location}
                </h1>
                <div className="flex items-center gap-3">
                  <h1 className="font-display text-sm text-gray-800">
                    {moment(event?.time).format("YYYY-MM-DD")}
                  </h1>
                  <h1 className="font-display text-sm text-gray-800">
                    {moment(event?.time).format("HH:mm A")}
                  </h1>
                </div>
                <h1 className="font-display pt-[1rem] max-w-[30rem] text-gray-800">
                  {event?.paragraph}
                </h1>
              </div>
            </div>
          );
        })}
      </Layout>
    </div>
  );
};
