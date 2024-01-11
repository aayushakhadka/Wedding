import React, { useEffect, useRef, useState } from "react";
import gallery from "../data/gallery";
import Layout from "../common/Layout";
import { useApiData } from "./ApiDataProvider";
import Slider from "react-slick";

export const Gallery = () => {
  const { data } = useApiData();

  const daysTitle = data?.days.map((d) => d?.title);

  const galleryData = gallery;

  const [type, setType] = useState("all");
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    const data = galleryData.filter((item) => item.type === type);
    setFilteredGallery(data);
  }, [type]);

  // const memories = data?.memories?.map((memory) => ({
  //   id: memory?._id,
  //   img: memory?.images?.[0]?.image?.fileUrl,
  //   by: memory?.guest?.name,
  //   event: memory?.day?.title,
  // }));
  const handleRemoveImage = (indexToRemove) => {
    setActive((prev) => prev.filter((_, index) => index !== indexToRemove));
  };
  const memories = data?.memories
    ?.filter((memory) => (type === "all" ? true : memory.day.title === type))
    ?.map((memory) => ({
      id: memory?._id,
      img: memory?.images,
      by: memory?.guest?.name,
      event: memory?.day?.title,
    }));

  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
  };

  const handleTimelineChange = (e) => {
    const video = videoRef.current;
    video.currentTime = e.target.value;
    setCurrentTime(video.currentTime);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      {data?.memories?.length >= 1 && (
        <div
          id="gallery"
          className="flex flex-col items-center justify-center pt-[6rem] gap-6"
        >
          <div className="flex items-center justify-center w-[15rem] border-gray-400 border-[1px] h-[3.5rem]">
            <h1 className="font-display text-xl">OUR GALLERY</h1>
          </div>

          <div className=" flex mobileS:flex-col  mobileS: pt-[1rem] gap-2 font-display text-left items-baseline justify-start">
            <button
              className={`bg-gray-300 w-[3rem] h-[2.5rem] border-[1px] rounded-[1rem] ${
                type === "all"
                  ? "bg-teal-300 text-white"
                  : " text-black bg-gray-300"
              }`}
              onClick={() => setType("all")}
            >
              ALL
            </button>
            {daysTitle?.map((title, index) => {
              return (
                <button
                  key={index}
                  className={`px-3 border-[1px] rounded-[1rem]  h-[2.5rem]  ${
                    type === title
                      ? " text-white bg-teal-300"
                      : " text-black bg-gray-300"
                  }`}
                  onClick={() => setType(title)}
                >
                  {title}
                </button>
              );
            })}
          </div>

          <div className="grid mobileS:grid-cols-1 mobileM:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 pt-[1rem] gap-3 w-[80%] flex-wrap">
            {memories?.map((gallery, index) => {
              return (
                <div
                  key={index}
                  className=" flex flex-[1] w-full items-center justify-center relative"
                >
                  <Slider {...settings} className="slider">
                    {gallery?.img?.map((img, index) => {
                      return (
                        <div key={index} className="">
                          {img?.image?.fileUrl?.split(".")?.[
                            img?.image?.fileUrl?.split(".")?.length - 1
                          ] === "mp4" ? (
                            <div
                              className=" w-full"
                              onMouseEnter={() => setShowControls(true)}
                              onMouseLeave={() => setShowControls(false)}
                            >
                              <video
                                className="w-full"
                                autoPlay={true}
                                loop={true}
                              >
                                <source
                                  src={img?.image?.fileUrl}
                                  type="video/mp4"
                                />
                              </video>
                            </div>
                          ) : (
                            <img
                              className="w-full h-96 object-contain grid grid-cols-2"
                              src={img?.image?.fileUrl}
                            />
                          )}
                        </div>
                      );
                    })}
                  </Slider>
                  <div className="absolute flex bg-gray-200 flex-col items-center justify-center bottom-0 w-full opacity-100 p-[0.5rem]">
                    <div className=" text-black px-[1rem] font-display text-sm  ">
                      Posted By: {gallery?.by}
                    </div>
                    <div className=" text-black px-[1rem] font-display text-sm ">
                      Event: {gallery?.event}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
