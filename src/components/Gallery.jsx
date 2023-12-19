import React, { useEffect, useState } from 'react'
import gallery from '../data/gallery'
import Layout from '../common/Layout'

export const Gallery = () => {
  const galleryData = gallery


    const [type, setType] = useState('all')
    const [filteredGallery, setFilteredGallery] = useState([])
  
    useEffect(()=>{
      const data = galleryData.filter(item=>item.type === type)
      setFilteredGallery(data)
    }, [type])
  
    console.log(filteredGallery, "filtered gallery")
  
  return (
    <div id='gallery'>
      <Layout style={{height:'fit-content'}}>
    <div className='flex flex-col items-center justify-center mt-[4rem]'>
    <div className=' flex items-center justify-center translate-x-[20rem] gap-3  tablet:max-w-[20rem] border-2 border-gray-300 tablet:h-[4rem] bg-gray-200 tablet:flex tablet:items-center tablet:justify-center  mobileS:h-[7rem] mobileS:w-[20rem] '>
        <h1 className='font-custom tablet:text-3xl mobileS:text-5xl text-gray-600'>Our gallery</h1>
    </div>
    </div>/

    
    <div className=' flex mt-10 gap-[2rem] '>  
    <button className='  font-semibold tablet:text-lg  text-gray-600 mobileS:text-5xl' onClick={()=>setType('all')}>ALL</button>
  <button className='   font-semibold tablet:text-lg text-gray-600 mobileS:text-5xl' onClick={()=>setType('wedding')}>WEDDING</button>
  <button className=' font-semibold tablet:text-lg text-gray-600 mobileS:text-5xl' onClick={()=>setType('ceremony')}>CEREMONY</button>
  <button className=' font-semibold tablet:text-lg text-gray-600 mobileS:text-5xl ' onClick={()=>setType('party')}>PARTY</button>
  </div>
<div className='tablet:grid tablet:grid-cols-3 tablet:items-center tablet:justify-items-start w-[68rem]   mt-[2rem]  mobileS:grid mobileS:grid-cols-2  mobileS:gap-[2rem] mobileS:pt-[4rem] tablet:pt-[0rem] tablet:gap-[0rem]'>
  {filteredGallery.map((gallery,index)=>{
return <div className=' flex items-center mb-[1rem] '>
  <img className='tablet:w-[22rem] tablet:h-[20rem] mobileS:w-[40rem] mobileS:h-[40rem]  contrast-75 brightness-95 hover:contrast-100 hover:brightness-115' src={gallery?.image}/>
</div>

  })}

</div>
</Layout>
    </div>
  )
}
