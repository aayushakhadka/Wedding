import React from "react";
import Layout from "../common/Layout";
import { useApiData } from "./ApiDataProvider";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import isValidNumber from "libphonenumber-js";
import QRCode from "react-qr-code";

export const Rsvp = () => {
  const [inputValue, setInputvalue] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const { eventId } = useApiData();

  console.log(eventId, "event iod");

  const inputChange = (event) => {
    const { name, value } = event.target;
    setInputvalue((prev) => ({
      ...prev,
      [name]: value,
      ...inputValue,
      [name]: value,
    }));
  };

  const acceptInvitation = async () => {
    console.log(inputValue, "input value");

    try {
      setLoading(true);
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/guest/accept-invitation/${eventId}`,
        inputValue
      );
      setLoading(false);

      Swal.fire({
        title: "Invitation Success",
        text: "You have accepted the invitation",
        icon: "success",
      });

      setInputvalue({
        email: "",
        name: "",
        address: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);

      Swal.fire({
        title: "Error",
        text: error.response.data.message || error.response.data.error,
        icon: "error",
      });
    }

    //     let valid = true;
    //     const newErrors = {};
    //     if (!inputValue.name || inputValue.confirmname) {
    //       newErrors.name = "required your name*";
    //       valid = false;
    //     }
    //     if (
    //       !inputValue.email ||
    //       !inputValue.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    //     ) {
    //       newErrors.email = "Please enter a valid email address";
    //       valid = false;
    //     }

    // if(!inputValue.number||!inputValue.number.match(/^\+(?:[0-9] ?){6,14}[0-9]$/i))
    // {
    //      newErrors.number='Please provide valid phone number';
    //      valid=false;
    // }

    //     if (!inputValue.address || inputValue.confirmaddress) {
    //       newErrors.address = "required your address*";
    //       valid = false;
    //     }
    //     if (!inputValue.message || inputValue.confirmmessage) {
    //       newErrors.message = "required your message*";
    //       valid = false;
    //     }
    //     setErrors(newErrors);
    //     return valid;

    //   };
  };

  return (
    <div id="rsvp">
      <div className=" bg-marriage bg-cover bg-center max-w-full mt-[5rem]">
        <div className="bg-black opacity-80 max-w-full pt-[3rem] ">
          <div className=" w-[100%] flex flex-col items-center pt-[3rem]  ">
            <div className="flex items-center justify-center w-[15rem] h-[3rem] border-2 text-white font-display text-xl">
              <h1 className=" font-display">Join Our Party</h1>
            </div>

            <Layout style={{ height: "fit-content" }}>
              <div className=" flex flex-row mobileS:flex-col items-center justify-center pt-[3rem] gap-5 mobileM:flex-col">
                <div className="flex flex-col flex-[1]">
                  <h1 className="font-display flex p-[0.5rem] text-white">
                    Name
                  </h1>

                  <input
                    type="text"
                    placeholder="Your Name*"
                    onChange={inputChange}
                    name="name"
                    value={inputValue.name}
                    className="min-h-[3.5rem] rounded-[1rem] flex-[1] min-w-[18rem] pl-[1rem]"
                  />
                  {errors.name && (
                    <span className=" flex flex-col text-red-600 text-left text-5xl font-display text-[0.7rem] ">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-[1]">
                  <h1 className="font-display flex p-[0.5rem] text-white">
                    Email
                  </h1>

                  <input
                    type="text"
                    placeholder="Your Email*"
                    onChange={inputChange}
                    name="email"
                    value={inputValue.email}
                    className="min-h-[3.5rem] rounded-[1rem] flex-[1] min-w-[18rem] pl-[1rem]"
                  />
                  {errors.email && (
                    <span className="text-red-600 text-left text-5xl font-display text-[0.7rem] ">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className=" flex flex-row items-center justify-center pt-[1rem] gap-5 mobileS:flex-col mobileM:flex-col">
                {/* <select className="min-h-[3.5rem] rounded-[1rem] flex-[1] min-w-[18rem] pl-[1rem]">
                  <option>phone of cars*</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select> */}
                {/* <select className="min-h-[3.5rem] rounded-[1rem] flex-[1] min-w-[18rem] pl-[1rem]">
                  <option>I am Attending*</option>
                  <option>AI events</option>
                  <option>Wedding ceremony</option>
                  <option>Reception Party</option>
                </select> */}
                <div className="flex flex-col flex-[1]">
                  <h1 className="font-display flex p-[0.5rem] text-white">
                    Address
                  </h1>
                  <input
                    type="text"
                    placeholder="Your address*"
                    onChange={inputChange}
                    name="address"
                    value={inputValue.address}
                    className="min-h-[3.5rem] rounded-[1rem] flex-[1] min-w-[18rem] pl-[1rem]"
                  />
                  {errors.address && (
                    <span className="text-red-600 text-left text-5xl font-display text-[0.7rem] ">
                      {errors.address}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-[1]">
                  <h1 className="font-display flex p-[0.5rem] text-white">
                    Phone Number
                  </h1>

                  <input
                    type="text"
                    placeholder="Your phone*"
                    onChange={inputChange}
                    name="phone"
                    value={inputValue.phone}
                    className="min-h-[3.5rem] rounded-[1rem] flex-[1] min-w-[18rem] pl-[1rem]"
                  />
                  {errors.number && (
                    <span className="text-red-600 text-left text-5xl font-display text-[0.7rem] ">
                      {errors.number}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center gap-5 flex-wrap ">
                <div className="flex flex-col flex-[1]">
                  <h1 className="font-display items-center text-left flex p-[0.5rem] text-white pt-[1rem]">
                    Message
                  </h1>

                  <input
                    type="text"
                    placeholder="If any query right here..."
                    name="message"
                    value={inputValue.message}
                    onChange={inputChange}
                    className="min-h-[10rem] rounded-[1rem] min-w-[18rem] flex-[1] text-black pl-[1rem] pb-[6rem] "
                  />
                  <div className="flex flex-col">
                    {errors.message && (
                      <span className="text-red-600 text-left font-display text-[0.7rem] ">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center pt-[3rem] pb-[3rem] ">
                <button
                  className="text-white bg-teal-800 h-[3rem] w-[15rem] font-display rounded-[1rem] "
                  onClick={acceptInvitation}
                >
                  {loading ? "Sending..." : "Accept Invitation"}
                </button>
              </div>
            </Layout>
          </div>
        </div>
      </div>
    </div>
  );
};
