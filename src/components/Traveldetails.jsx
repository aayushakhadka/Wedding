import React, { useState } from "react";
import Layout from "../common/Layout";
import { FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";
import { useApiData } from "./ApiDataProvider";

export const Traveldetails = () => {
  const formData = new FormData();

  const [travelDetailImage, setTravelDetailImage] = useState();
  const [loading, setLoading] = useState(false);
  const [travelDetail, setTravelDetail] = useState({
    airline: "",
    flightNumber: "",
    arrivalDateTime: "",
    departureDateTime: "",
    arrivalPlace: "",
    departurePlace: "",
    email: "",
  });
  const [errors,setErrors]=useState();

  const handleSetTravelDetailImage = (event) => {
    setTravelDetailImage(event.currentTarget.files[0]);
  };
  const handleSetTravelDetail = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTravelDetail({ ...travelDetail, [name]: value });
  };

  formData.append("email", travelDetail.email);
  formData.append("airline", travelDetail.airline);
  formData.append("flightNumber", travelDetail.flightNumber);
  formData.append("arrivalDateTime", travelDetail.arrivalDateTime);
  formData.append("departureDateTime", travelDetail.departureDateTime);
  formData.append("arrivalPlace", travelDetail.arrivalPlace);
  formData.append("departurePlace", travelDetail.departurePlace);

  formData.append("ticketImage", travelDetailImage);

  const { eventId } = useApiData();

  console.log(eventId, "eventId");

  const sendDetails = async () => {
    // console.log(detailValue, "detail value");

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/travel/${eventId}`,
        formData
      );
      setLoading(false);

      Swal.fire({
        title: "Detail Sent",
        text: "Your detail has been sent ",
        icon: "success",
      });
      setTravelDetail({
        airline: "",
    flightNumber: "",
    arrivalDateTime: "",
    departureDateTime: "",
    arrivalPlace: "",
    departurePlace: "",
    email: "",
      })

      setTravelDetailImage([])
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: error.response.data.message || error.response.data.error,
        icon: "error",
      });

    }
    // let valid = true;
    // const newErrors = {};
    // if (!travelDetail.airline || travelDetail.confirmairline) {
    //   newErrors.name = "required*";
    //   valid = false;
    // }
    // if (!travelDetail.flightNumber|| travelDetail.confirmflightNumber) {
    //   newErrors.name = "required*";
    //   valid = false;
    // }
    // if (!travelDetail.arrivalDateTime|| travelDetail.confirmarrivalDateTime) {
    //   newErrors.name = "required*";
    //   valid = false;
    // }
    // if (!travelDetail.departureDateTime|| travelDetail.confirmdepatureDateTime) {
    //   newErrors.name = "required*";
    //   valid = false;
    // }
    // if (!travelDetail.arrivalPlace|| travelDetail.confirmdeparturePlace) {
    //   newErrors.name = "required*";
    //   valid = false;
    // }
    // if (!travelDetail.departurePlace|| travelDetail.confirmdeparturePlace) {
    //   newErrors.name = "required*";
    //   valid = false;
    // }
    // if (
    //   !travelDetail.email ||
    //   !travelDetail.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    // ) {
    //   newErrors.email = "Please enter a valid email address";
    //   valid = false;
    // }
   
    // setErrors(newErrors);
    // return valid;
   
  };
  console.log(errors,'errors')

  return (
    <div className="flex flex-col items-center justify-center bg-brown-100 pb-[1rem]">
      <h1 className="text-2xl font-display font-semibold pt-[3rem]">
        Travel Details
      </h1>
      <div className="flex justify-center bg-gray-300 mobileS:w-[95vw] w-[80vw] rounded-[1rem] m-auto shadow pb-[1rem] mt-[3rem]">
        <Layout style={{ height: "fit-content" }}>
          <div className=" flex flex-row mobileS:flex-col items-center justify-center pt-[1.5rem] gap-5 mobileM:flex-col ">
            <div className="flex flex-col flex-[1] w-full">
              <h1 className="font-display flex p-[0.5rem]">Airlines</h1>
              <input
                type="text"
                placeholder="Airlines"
                onChange={handleSetTravelDetail}
                value={travelDetail.airline}
                name="airline"
                className="min-h-[3.5rem] rounded-[1rem] flex-[1] pl-[1rem]"
              />
              {/* {errors.name && (
                <span className=" flex flex-col text-red-600 text-left text-5xl font-display text-[0.7rem] ">
                  {errors.name}
                </span>
              )} */}
            </div>

            <div className="flex flex-col flex-[1] w-full">
            <h1 className="font-display flex p-[0.5rem]">Flight Number</h1>

              <input
                type="text"
                placeholder="Flight Number"
                onChange={handleSetTravelDetail}
                name="flightNumber"
                value={travelDetail.flightNumber}
                className=" min-h-[3.5rem] rounded-[1rem] flex-[1] pl-[1rem]"
              />
              {/* {errors.email && (
                <span className="text-red-600 text-left text-5xl font-display text-[0.7rem] ">
                  {errors.email}
                </span>
              )} */}
            </div>
          </div>
          <div className=" flex flex-row items-center justify-center pt-[1rem] gap-5 mobileS:flex-col mobileM:flex-col">
            <div className="flex flex-col flex-[1] w-full">
            <h1 className="font-display flex p-[0.5rem]">Arrival Date Time</h1>

              <input
                type="datetime-local"
                placeholder="Arrival Date Time"
                onChange={handleSetTravelDetail}
                name="arrivalDateTime"
                value={travelDetail.arrivalDateTime}
                className="min-h-[3.5rem] rounded-[1rem] flex-[1] pl-[1rem]"
              />
              {/* {errors.address && (
                <span className="text-red-600 text-left text-5xl font-display text-[0.7rem] ">
                  {errors.address}
                </span>
              )} */}
            </div>
            <div className="flex flex-col flex-[1] w-full">
            <h1 className="font-display flex p-[0.5rem]">Departure Date Time</h1>

              <input
                type="datetime-local"
                placeholder="Depature Date Time"
                onChange={handleSetTravelDetail}
                name="departureDateTime"
                value={travelDetail.departureDateTime}
                className="min-h-[3.5rem] rounded-[1rem] flex-[1] pl-[1rem]"
              />
              {/* {errors.number && (
                <span className="text-red-600 text-left text-5xl font-display text-[0.7rem] ">
                  {errors.number}
                </span>
              )} */}
            </div>
          </div>
          <div className="flex items-center justify-center pt-[1rem] gap-5 mobileS:flex-col mobileM:flex-col  ">
            <div className="flex flex-col flex-[1] w-full">
            <h1 className="font-display flex p-[0.5rem]">Arrival Place</h1>

              <input
                type="text"
                placeholder="Arrival Place"
                onChange={handleSetTravelDetail}
                name="arrivalPlace"
                value={travelDetail.arrivalPlace}
                className="min-h-[3.5rem] rounded-[1rem] flex-[1] pl-[1rem]"
              />
            </div>
            <div className="flex flex-col flex-[1] w-full">
            <h1 className="font-display flex p-[0.5rem]">Departure Place</h1>

              <input
                type="text"
                placeholder="Depature  Place"
                onChange={handleSetTravelDetail}
                name="departurePlace"
                value={travelDetail.departurePlace}
                className="min-h-[3.5rem] rounded-[1rem] flex-[1] pl-[1rem]"
              />
            </div>
          </div>
          <div className="flex items-center justify-center pt-[1rem] gap-5 flex-wrap ">
            <div className="flex flex-col flex-[1] w-full">
            <h1 className="font-display flex p-[0.5rem]">Email</h1>

              <input
                type="email"
                placeholder="Email"
                onChange={handleSetTravelDetail}
                name="email"
                value={travelDetail.email}
                className="min-h-[3.5rem] rounded-[1rem] flex-[1] pl-[1rem]"
              />
            </div>
          </div>
          

          <div className="flex items-center justify-center gap-5 flex-wrap ">

            {travelDetailImage && (
              <img
                src={URL.createObjectURL(travelDetailImage)}
                style={{ height: 200, width: 300 }}
                className="flex-[1] object-contain"
              />
            )}
            <div className="flex flex-col flex-[1]">
          <h1 className=" font-display p-[0.5rem] pt-[1rem]">Image</h1>

              <label
                htmlFor="file"
                className="flex flex-col items-center px-4 py-6 w-full bg-white text-gray-700 rounded-[1rem] shadow tracking-wide cursor-pointer"
              >
                <FiPlus />
                <span className="text-base leading-normal">Select a file</span>
                <input
                  onChange={handleSetTravelDetailImage}
                  type="file"
                  className="hidden "
                  id="file"
                />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center pt-[2rem] ">
            <button
              disabled={loading}
              onClick={sendDetails}
              className='font-display h-[3rem] bg-teal-300 px-10 rounded-[1rem] text-white mobileS:w-full'
            >
              {loading ? "Sending..." : "Send Details"}
            </button>
          </div>
        </Layout>
      </div>
    </div>
  );
};
