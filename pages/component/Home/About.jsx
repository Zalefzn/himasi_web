import React from "react";
import ButtonGradient from "../Button/ButtonGradient";

function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row pt-16 px-6 md:px-10 justify-between md:gap-x-10 lg:gap-x-48">
      {/* gallery foto */}
      <div className=" grid grid-cols-2 gap-2 mt-4 md:w-full lg:w-auto">
        {/* <div className=" bg-gradient-to-b from-bgColor to-color3 md:w-[13rem] h-[10rem] md:h-[13rem] rounded-[30px] " > */}
        <h2 className=" bg-gradient-to-b from-bgColor to-color3 lg:w-[13rem] h-[10rem] md:h-[13rem] rounded-[30px] capitalize flex p-7 fold:p-2">
          <span className="text-2xl text-white font-bold self-end ">
            About <br /> Himasi
          </span>
        </h2>
        {/* </div> */}
        <div className=" bg-[url('/assets/images/about/about1.png')] lg:w-[13rem] h-[10rem] md:h-[13rem] rounded-[30px] bg-cover bg-center overflow-hidden"></div>
        <div className=" bg-[url('/assets/images/about/about2.png')]  h-[10rem] md:h-[13rem] rounded-[30px]  col-span-2  bg-cover bg-center overflow-hidden"></div>
      </div>
      
      {/* text */}
      <div className="flex flex-col  md:w-1/2">
        <h1 className=" text-2xl font-bold md:text-5xl md:mb-4">
          Himpunan Mahasiswa Sistem Informasi atau HIMASI{" "}
        </h1>
        <p className="text-md  md:text-2xl mt-2 md:mb-12">
          HIMASI mempunyai nama yang berbeda-beda tiap masa jabatannya dan masa
          jabatan yang sekarang adalah HIMASI RESILIENCE.
        </p>
        <ButtonGradient
          className="w-[100px] text-white md:w-[235px] rounded-full md:text-2xl my-2"
          classNameText="capitalize"
        >
          Read More
        </ButtonGradient>
      </div>
    </div>
  );
}

export default About;
