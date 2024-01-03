import React from "react";
import { images } from "../images/bride.jpg";
import Layout from "../common/Layout";
import Slider from "react-slick";

export const Story = () => {
 

  return (
    <div id="story">
      <div className="flex flex-col items-center justify-center pt-[5rem]">
        <div className=" flex items-center justify-center w-[15rem] border-gray-200 border-[1px] h-[3.5rem] bg-slate-100">
          <h1 className="font-display text-xl">Our Love Story</h1>
        </div>
      </div>
      <Layout style={{ height: "fit-content" }}>
        {/* story-content */}
       <div className="flex tablet:flex-col laptop1:flex-row mobileS:flex-col pt-[3rem] items-center justify-center gap-9 font-display mobileM:flex-col ">
        <div className="flex flex-col tablet:text-right mobileS:text-left mobileM:text-left gap-1">
<h1>FIRST MEET</h1>
<h2 className="">Jan 12 2023</h2>
<p className="max-w-[30rem]">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, 
    and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,</p>
</div>

    <img className="max-h-[20rem] rounded-[1rem] shadow-md" src='https://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/story/img-1.jpg'/>
       </div>
       {/* story content */}
       <div className="flex pt-[3rem] items-center justify-center gap-9 font-display tablet:flex-col laptop1:flex-row mobileS:flex-col mobileM:flex-col">
    <img className="max-h-[20rem] rounded-[1rem] shadow-md" src='https://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/story/img-2.jpg'/>

        <div className="flex flex-col text-left gap-1">
<h1>FIRST DATE</h1>
<h2 className="">FEb 14 2023</h2>
<p className="max-w-[30rem]  ">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, 
    and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,</p>
</div>
 </div>
 {/* story content */}
       <div className="flex pt-[3rem] items-center justify-center gap-9 font-display tablet:flex-col laptop1:flex-row mobileS:flex-col mobileM:flex-col  ">
        <div className="flex flex-col tablet:text-right mobileS:text-left gap-1 mobileM:text-left">
<h1>PROPOSAL</h1>
<h2 className="">May 12 2023</h2>
<p className="max-w-[30rem] ">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, 
    and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,</p>
</div>

    <img className="max-h-[20rem] rounded-[1rem] shadow-md" src='https://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/story/img-7.jpg'/>
       </div>
       {/* story content */}
       <div className="flex pt-[3rem] items-center justify-center gap-9 font-display tablet:flex-col mobileS:flex-col laptop1:flex-row mobileM:flex-col ">
    <img className="max-h-[20rem] rounded-[1rem] shadow-md" src='https://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/story/img-8.jpg'/>

        <div className="flex flex-col text-left gap-1">
<h1>ENGAGEMENT</h1>
<h2 className="">Nov 12 2023</h2>
<p className="max-w-[30rem]  ">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, 
    and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,</p>
</div>

       </div>
      </Layout>
    </div>
  );
};
