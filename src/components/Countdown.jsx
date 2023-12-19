import React from 'react'
import { useEffect, useState } from 'react';


export const Countdown = () => {

    // State for countdown time
    const [countdown, setCountdown] = useState('00:00:00');
    const [days, setDays] = useState('00')
    const [hours, setHour] = useState('00')
    const [minutes, setMinute] = useState('00')
    const [seconds, setSecond] = useState('00')





    // Set the target date for the countdown (change this to your desired date)
    const targetDate = new Date('2023-12-31 23:59:59').getTime();

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            const days = (Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
            const hours = String(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');

            // Update the countdown state with the calculated time
            setDays(`${days}`);
            setHour(`${hours}`);
            setMinute(`${minutes}`);
            setSecond(`${seconds}`);


        };

        // Update the countdown every second
        const countdownInterval = setInterval(updateCountdown, 1000);

        // Initial update
        updateCountdown();

        // Cleanup interval on unmount
        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <>

            <div className='bg-bride bg-cover tablet:h-[23rem] w-full bg-center mb-[5rem] shadow-xl tablet:w-[80rem] laptop:w-[100%] mobileS:w-[80rem] mobileS:h-[30rem] mobileM:w-[83rem] '>
                <div className=' tablet:flex items-center justify-center h-[25rem] '>
                    <div className='tablet:flex tablet:flex-col mobileS:ml-[5rem] mobileS:pt-[4rem] tablet:ml-[0rem] tablet:pt-[0rem] '>
                        <h1 className='tablet:text-xl mobileS:text-5xl text-white font-custom'>We are waiting for...</h1>
                        <h1 className='tablet:text-5xl mobileS:text-6xl text-white font-custom '>The adventure</h1>
                    </div>
                    <div className='mobileS:flex mobileS:flex-row mobileS:items-center mobileS:justify-start mobileS:mt-[3rem] mobileS:mr-[9rem] tablet:mr-[0rem]'>
                    <div className='flex flex-col items-center justify-center tablet:h-[6rem] tablet:w-[10rem] mobileS:h-[9rem] mobileS:w-[15rem] border-4 border-gray-300 rounded-sm ml-[6rem] bg-gray-100 shadow-md'>
                        <p className=' text-green-500  tablet:text-3xl mobileS:text-6xl font-serif font-semibold'>{days}</p>
                        <p className=' text-green-500  tablet:text-3xl  font-serif font-semibold'>
                        </p>
                        <p className='text-green-500 font-serif tablet:text-sm mt-[0.1rem] mobileS:text-4xl'>DAYS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center tablet:h-[6rem] tablet:w-[10rem] border-4 border-gray-300 rounded-sm ml-[1rem] bg-gray-100 shadow-md mobileS:h-[9rem] mobileS:w-[15rem]'>
                        <p className=' text-green-500  tablet:text-3xl font-serif font-semibold mobileS:text-6xl'>{hours}</p>
                        <p className='text-green-500 font-serif tablet:text-sm mt-[0.1rem] mobileS:text-4xl'>HOURS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center tablet:h-[6rem] tablet:w-[10rem] border-4 border-gray-300 rounded-sm ml-[1rem] bg-gray-100 shadow-md mobileS:h-[9rem] mobileS:w-[15rem]'>
                        <p className=' text-green-500  tablet:text-3xl font-serif font-semibold mobileS:text-6xl'>{minutes}</p>
                        <p className='text-green-500 font-serif tablet:text-sm mt-[0.1rem] mobileS:text-4xl'>MINS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center tablet:h-[6rem] tablet:w-[10rem] border-4 border-gray-300 rounded-sm ml-[1rem] bg-gray-100 shadow-md mobileS:h-[9rem] mobileS:w-[15rem]'>

                        <p className=' text-green-500  tablet:text-3xl font-serif font-semibold mobileS:text-6xl'>{seconds}</p>
                        <p className='text-green-500 font-serif tablet:text-sm mt-[0.1rem] mobileS:text-4xl'>SECOND</p>
                        <div className="text-4xl font-bold text-center">
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>

    );
};

export default Countdown;

