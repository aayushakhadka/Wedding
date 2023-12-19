import React, { useEffect, useState } from 'react'
import event from '../data/event'
import people from '../data/people'

export const Event = () => {

  const peopleData = people


  const [gender, setGender] = useState('male')
  const [filteredPeople, setFilteredPeople] = useState([])

  useEffect(()=>{
    const data = peopleData.filter(item=>item.gender === gender)
    setFilteredPeople(data)
  }, [gender])

  console.log(filteredPeople, "filtered people")

  return (
    <div id='event'>
    <div className='flex flex-col items-center tablet:ml-[35rem] laptop:ml-[0rem] laptop1:ml-[50rem] mobileM:ml-[42rem] mobileS:ml-[40rem] mobileS:mt-[10rem] tablet:mt-[0rem]' >
       <div className='border-2 h-[3rem] bg-black mt-[5rem] '>

</div>
      <div className=' flex items-center justify-center mb-[2rem]  bg-gray-100 tablet:h-[4rem] tablet:w-[20rem] border-2 mobileS:h-[7rem] mobileS:w-[40rem] '>
       
      <h1 className='tablet:w-[20rem]  tablet:text-2xl  text-center font-custom text-gray-400 mobileS:text-5xl mobileS:w-[30rem]'>Wedding Event</h1>
      </div>
{event?.map((event,index)=>{
return<div className='tablet:flex tablet:items-center tablet:justify-center'>
  <img className='tablet:h-[16rem] mt-[3rem] mobileS:h-[30rem] mobileS:w-[90rem] tablet:w-[20rem] ' src={event?.img}/>
  <div className='ml-[2rem]'>
    <h1 className='font-serif tablet:text-xl mobileS:text-5xl font-semibold mb-[1rem] tablet:mt-[3rem] mobileS:mt-[2rem]'>{event?.heading}</h1>
    <p className='text-gray-600 tablet:text-sm mobileS:text-4xl mb-[0.2rem] '>{event?.location}</p>
    <p className='text-gray-600 tablet:text-sm mobileS:text-4xl '>{event?.time}</p>
    <p className='tablet:w-[20rem] mt-[1rem] text-gray-500 leading-[1.8rem] tablet:text-sm mobileS:text-4xl mobileS:w-[55rem]  '>{event?.paragraph}</p>
    <p className='mt-[1rem] tablet:text-lg  text-green-700 font-semibold mobileS:text-5xl '>See location</p>
    </div>
  </div>
})}





    </div>
    </div>
  )
}
