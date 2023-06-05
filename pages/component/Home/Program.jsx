import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "../../utils/isMobile";

import "swiper/css";
import cssSwiper from "../../../styles/Swipper.module.css";
import Image from "next/image";
const Card = ({ title, desc, img }) => {
  return (
    <div className="cardProject flex flex-col items-center ">
      <div className="hover:text-color4 hover:cursor-pointer ">
        <Image
          alt=""
          className="hover:border-color4 hover:border-[3px] rounded-[25px] "
          src={img}
          width={isMobile() ? 200 : 297}
          height={isMobile() ? 50 : 467}
        />
      </div>
    </div>
  );
};
function Program() {
  const projects = [
    {
      title: "Personal Portfolio Landing page",
      desc: "UI/UX Design",
      img: "/assets/images/program/program1.png",
    },
    {
      title: "3D Agency Landing page",
      desc: "3D Agency Landing page",
      img: "/assets/images/program/program1.png",
    },
    {
      title: "Coffee Shop Landing page",
      desc: "Web Development",
      img: "/assets/images/program/program1.png",
    },
    {
      title: "3D Agency Landing page",
      desc: "3D Agency Landing page",
      img: "/assets/images/program/program1.png",
    },
    {
      title: "Personal Portfolio Landing page",
      desc: "UI/UX Design",
      img: "/assets/images/program/program1.png",
    },
    {
      title: "3D Agency Landing page",
      desc: "3D Agency Landing page",
      img: "/assets/images/program/program1.png",
    },
  ];

  return (
    <div className="flex pt-20  items-center gap-x-2 md:gap-x-4 lg:gap-x-36">
      <div className="w-1/3 md:w-1/2">
        <Swiper spaceBetween={20} slidesPerView={isMobile() ? 1 : 3}>
          {projects.map((item, index) => {
            return (
              <SwiperSlide className="relative" key={index}>
                {" "}
                <Card title={item.title} desc={item.desc} img={item.img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="bg-gradient-to-b from-bgColor to-color3 w-auto md:w-1/2 fold:w-full md:h-[467px] flex flex-col items-center justify-center rounded-tl-full rounded-bl-full px-6 py-6 md:py-10 lg-py-0">
        <h1 className="text-white font-bold mb-2 text-center sm:text-lg md:text-3xl lg:text-4xl  " >PROGRAM HIMASI</h1>
        <p className="text-xs text-center text-white  sm:inline-block sm:text-xl" >
          Program himasi bertujuan untuk mendekatkan mahasiswa sistem informasi
          dengan mahasiswa lainya serta kakak tingkat agar saling mengenal satu
          sama lain sehingga memperkokoh relasi di setiap programnya
        </p>
      </div>
    </div>
  );
}

export default Program;
