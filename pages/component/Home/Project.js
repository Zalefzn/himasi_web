import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeadingSection from "../HeadingSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Card = ({ title, desc, img }) => {
  return (
    <div className="cardProject flex flex-col items-center">
      <div className="hover:text-color4 hover:cursor-pointer">
        <Image
          alt=""
          className="hover:border-color4 hover:border-[3px] rounded-[25px]"
          src={img}
          width={417}
          height={515}
        />
        <h5 className="mt-6 text-2xl font-medium ">{title}</h5>
        <h6 className="mt-2 text-[#9A9A9A]">{desc}</h6>
      </div>
    </div>
  );
};

function Project() {
  const projects = [
    {
      title: "Personal Portfolio Landing page",
      desc: "UI/UX Design",
      img: "/assets/images/project/project-1.png",
    },
    {
      title: "3D Agency Landing page",
      desc: "3D Agency Landing page",
      img: "/assets/images/project/project-2.png",
    },
    {
      title: "Coffee Shop Landing page",
      desc: "Web Development",
      img: "/assets/images/project/project-3.png",
    },
    {
      title: "3D Agency Landing page",
      desc: "3D Agency Landing page",
      img: "/assets/images/project/project-2.png",
    },
    {
      title: "Personal Portfolio Landing page",
      desc: "UI/UX Design",
      img: "/assets/images/project/project-1.png",
    },
    {
      title: "3D Agency Landing page",
      desc: "3D Agency Landing page",
      img: "/assets/images/project/project-2.png",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // alert(navbarShow)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 px-6">
      <HeadingSection
        text="Latest Projects"
        textDesc="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />

      <div className="flex items-center justify-center">
        <div className="w-full md:w-[37.5rem] h-16 md:h-20 bg-[#EBEBEB] mt-8 rounded-[40px] p-1 flex items-center text-center justify-between">
          <div className="w-36 md:w-40 h-full flex items-center justify-center md:text-2xl hover:bg-white hover:text-color4 hover:cursor-pointer rounded-[40px] text-[#9A9A9A]">
            <span>All</span>
          </div>
          <div className="w-36 md:w-40 h-full flex items-center justify-center md:text-2xl hover:bg-white hover:text-color4 hover:cursor-pointer  rounded-[40px] text-[#9A9A9A]">
            <span>Website</span>
          </div>
          <div className="w-36 md:w-40 h-full flex items-center justify-center md:text-2xl hover:bg-white hover:text-color4 hover:cursor-pointer  rounded-[40px] text-[#9A9A9A]">
            <span>Apps</span>
          </div>
        </div>
      </div>
      <div className="mt-16 flex md:justify-between">
        <Swiper spaceBetween={50} slidesPerView={isMobile ? 1 : 3}>
          {projects.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {" "}
                <Card title={item.title} desc={item.desc} img={item.img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Project;
