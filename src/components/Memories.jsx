import React, { useState } from "react";
import Layout from "../common/Layout";
import { useApiData } from "./ApiDataProvider";
import { AiOutlineUpload } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import axios from "axios";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

export const Memories = () => {
  const { data } = useApiData();

  const formData = new FormData();
  const [memories, setMemories] = useState({
    email: "",
    day: "",
  });
  const [loading, setLoading] = useState(false);
  const [memoriesImage, setMemoriesImage] = useState([]);

  const handleSetMemoriesImage = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setMemoriesImage((prev) => [...prev, file]);
    }

    console.log(memoriesImage);
  };

  console.log(memoriesImage);
  const handleSetMemories = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMemories({ ...memories, [name]: value });
  };

  formData.append("email", memories.email);
  formData.append("day", memories.day);

  for (const file of memoriesImage) {
    formData.append("images", file);
  }

  const days = data?.days?.map((day) => ({
    id: day?._id,
    heading: day?.title,
  }));

  const { eventId } = useApiData();
  const sendMemories = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/memories/${eventId}`,
        formData
      );
      setLoading(false);
      Swal.fire({
        title: "Memories Added",
        text: "Your memory has been added ",
        icon: "success",
      });
      setMemories({
        email: "",
        day: "",
      });

      setMemoriesImage([]);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: error.response.data.message || error.response.data.error,
        icon: "error",
      });
    }
  };

  console.log(memoriesImage, "dat");
  const handleRemoveImage = (indexToRemove) => {
    setMemoriesImage((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="flex flex-col items-center pb-[1rem]">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-display font-semibold flex items-center justify-center pt-[3rem] ">
          Memories
        </h1>
      </div>
      <div className="flex justify-center bg-gray-300 w-[80vw] rounded-[1rem] m-auto shadow pb-[4rem] mt-[3rem]">
        <Layout style={{ height: "fit-content" }}>
          <div className=" flex flex-row mobileS:flex-col items-center justify-center pt-[3rem] gap-5 mobileM:flex-col ">
            <div className="flex flex-col flex-[1] w-full">
              <h1 className="font-display flex p-[0.5rem]">Email</h1>
              <input
                type="text"
                placeholder="Email"
                onChange={handleSetMemories}
                value={memories.email}
                name="email"
                className="min-h-[3.5rem] rounded-[1rem] flex-[1] pl-[1rem] font-display"
              />
            </div>
            <div className="flex flex-col flex-[1] w-full">
              <h1 className="font-display flex p-[0.5rem]">Days</h1>

              <select
                className="min-h-[3.5rem] rounded-[1rem] flex-[1]  pl-[1rem] shadow px-[1rem] font-display  "
                onChange={handleSetMemories}
                value={memories.day}
                name="day"
              >
                <option value={undefined}>Select event's day</option>
                {days?.map((event, index) => {
                  return (
                    <option value={event?.id} key={index}>
                      {event?.heading}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap ">
            <div className="flex gap-5 flex-wrap">
              {memoriesImage.length > 0 && (
                <>
                  {memoriesImage?.map((file, index) => (
                    <div className="relative">
                      <img
                        // height={200}
                        // width={200}
                        key={index}
                        src={URL.createObjectURL(file)}
                        // style={{ height: "200px", width: "300px" }}
                        className="flex-[1] object-cover w-72 h-72 font-display mt-[2rem]"
                      />

                      <button
                        className="absolute px-4 mt-9 py-1 shadow-lg rounded-lg bg-red-400 text-white z-50 top-0 left-5 font-display "
                        onClick={() => handleRemoveImage(index)}
                      >
                        <MdDelete />

                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 flex-wrap ">
            <div className="flex flex-col flex-[1] ">
              <h1 className="font-display flex p-[0.5rem] pt-[1.5rem]">
                Photos
              </h1>

              <label
                htmlFor="file"
                className="flex flex-col items-center px-4 py-6 w-full bg-white text-gray-700 rounded-[1rem] shadow tracking-wide cursor-pointer"
              >
                <FiPlus />
                <span className="text-base leading-normal font-display">Upload Photo</span>
                <input
                  onChange={handleSetMemoriesImage}
                  type="file"
                  className="hidden font-display"
                  id="file"
                />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center pt-[2.5rem]">
            <button
              onClick={sendMemories}
              className="font-display h-[3rem] bg-teal-300 px-16 rounded-[1rem] text-white mobileS:w-full "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </Layout>
      </div>
    </div>
  );
};
