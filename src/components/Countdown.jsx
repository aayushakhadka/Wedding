// import React from "react";
// import { useEffect, useState } from "react";
// import { useApiData } from "./ApiDataProvider";

// export const Countdown = () => {
//   const { data } = useApiData();

//   console.log(data?.startDateTime);

//   // State for countdown time
//   const [countdown, setCountdown] = useState("00:00:00");
//   const [days, setDays] = useState("00");
//   const [hours, setHour] = useState("00");
//   const [minutes, setMinute] = useState("00");
//   const [seconds, setSecond] = useState("00");

//   // Set the target date for the countdown (change this to your desired date)
//   const targetDate = new Date(data?.startDateTime).getTime();

//   useEffect(() => {
//     const updateCountdown = () => {
//       const now = new Date().getTime();
//       const timeRemaining = targetDate - now;

//       const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//       const hours = String(
//         Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       );
//       const minutes = String(
//         Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
//       ).padStart(2, "0");
//       const seconds = String(
//         Math.floor((timeRemaining % (1000 * 60)) / 1000)
//       ).padStart(2, "0");

//       // Update the countdown state with the calculated time
//       setDays(`${days}`);
//       setHour(`${hours}`);
//       setMinute(`${minutes}`);
//       setSecond(`${seconds}`);
//     };

//     // Update the countdown every second
//     const countdownInterval = setInterval(updateCountdown, 1000);

//     // Initial update
//     updateCountdown();

//     // Cleanup interval on unmount
//     return () => clearInterval(countdownInterval);
//   }, []);

//   return (
//     <div className=" flex items-center">
//       <div className="bg-bride bg-cover w-[100%] bg-center rounded-[1rem] relative mt-[5rem] ">
//         <div className="rounded-[1rem]">
//         <div className=" flex laptop1:flex-row mobileS:flex-col mobileM:flex-col tablet:flex-col min-h-[20rem] gap-4 items-center justify-center">
//           <div className="flex flex-col items-center">
//              <h1 className=" text-3xl text-white font-display">
//               We are waiting for...
//             </h1>

//             <h1 className=" text-3xl text-white font-display">The adventure</h1>
//           </div>
//           <div className=" grid laptop1:grid-cols-4 mobileS:grid-cols-2 mobileM:grid-cols-2 tablet:grid-cols-2 gap-6 z-auto">
//             <div className="flex flex-col items-center border-4 w-[8rem] h-[4rem] bg-gray-300 shadow rounded-[1rem]">
//               <p className=" text-green-500 font-display ">{days}</p>
//               <p className="text-green-500 font-display">DAYS</p>
//             </div>
//             <div className="border-4  bg-slate-50 flex flex-col items-center w-[8rem] h-[4rem] bg-gray-300 shadow rounded-[1rem]">
//               <p className="text-green-500  font-display">{hours}</p>
//               <p className="text-green-500">HOURS</p>
//             </div>
//             <div className="border-4 w-[8rem] h-[4rem] bg-slate-50 flex flex-col items-center bg-gray-300 shadow rounded-[1rem]">
//               <p className="text-green-500 font-display">{minutes}</p>
//               <p className="text-green-500 font-display">MINS</p>
//             </div>
//             <div className="border-4 w-[8rem] h-[4rem] bg-slate-50 flex flex-col items-center bg-gray-300 shadow rounded-[1rem]">
//               <p className="text-green-500 ">{seconds}</p>
//               <p className="text-green-500">SECOND</p>
//               <div className="text-4xl font-bold text-center"></div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Countdown;

import React, { useEffect, useState } from "react";
import moment from "moment";
import { useApiData } from "./ApiDataProvider";

export const Countdown = () => {
  const { data } = useApiData();

  // State for countdown time
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (data?.startDateTime) {
      const targetDate = moment(data.startDateTime);

      const updateCountdown = () => {
        const now = moment();
        const duration = moment.duration(targetDate.diff(now));

        const days = duration.days().toString().padStart(2, "0");
        const hours = duration.hours().toString().padStart(2, "0");
        const minutes = duration.minutes().toString().padStart(2, "0");
        const seconds = duration.seconds().toString().padStart(2, "0");

        setCountdown({ days, hours, minutes, seconds });
      };

      // Update the countdown every second
      const countdownInterval = setInterval(updateCountdown, 1000);

      // Initial update
      updateCountdown();

      // Cleanup interval on unmount
      return () => clearInterval(countdownInterval);
    }
  }, [data]);

  return (
    <div className="flex items-center">
      <div className="bg-bride bg-cover w-[100%] bg-center rounded-[1rem] relative mt-[5rem] ">
        <div className="rounded-[1rem]">
          <div className="flex laptop1:flex-row mobileS:flex-col mobileM:flex-col tablet:flex-col min-h-[20rem] gap-4 items-center justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl text-white font-display">
                We are waiting for...
              </h1>
              <h1 className="text-3xl text-white font-display">
                The adventure
              </h1>
            </div>
            <div className="grid laptop1:grid-cols-4 mobileS:grid-cols-2 mobileM:grid-cols-2 tablet:grid-cols-2 gap-6 z-auto">
              <div className="flex flex-col items-center border-4 w-[8rem] h-[4rem] bg-gray-300 shadow rounded-[1rem]">
                <p className="text-teal-800 font-display">{countdown.days}</p>
                <p className="text-teal-800 font-display">DAYS</p>
              </div>
              <div className="border-4 bg-slate-50 flex flex-col items-center w-[8rem] h-[4rem] bg-gray-300 shadow rounded-[1rem]">
                <p className="text-teal-800 font-display">{countdown.hours}</p>
                <p className="text-teal-800">HOURS</p>
              </div>
              <div className="border-4 w-[8rem] h-[4rem] bg-slate-50 flex flex-col items-center bg-gray-300 shadow rounded-[1rem]">
                <p className="text-teal-800 font-display">
                  {countdown.minutes}
                </p>
                <p className="text-teal-800 font-display">MINS</p>
              </div>
              <div className="border-4 w-[8rem] h-[4rem] bg-slate-50 flex flex-col items-center bg-gray-300 shadow rounded-[1rem]">
                <p className="text-teal-800">{countdown.seconds}</p>
                <p className="text-teal-800">SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>     
    
    </div>
  );
};

export default Countdown;
