import React from "react";
import HeadingSection from "../HeadingSection";
import Image from "next/image";

function Technology() {
  const listCategory = [
    { name: "TypeScript", image: "/assets/icon/typeScript.svg" },
    { name: "Javascript", image: "/assets/icon/js.svg" },
    { name: "React", image: "/assets/icon/react.svg" },
    { name: "React Native", image: "/assets/icon/react.svg" },
    { name: "Next Js", image: "/assets/icon/nextjs.svg" },
    { name: "Gatsby", image: "/assets/icon/gatsby.svg" },
    { name: "Django", image: "/assets/icon/django.svg" },
    { name: "Html/Css", image: "/assets/icon/html.svg" },
  ];
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <HeadingSection
        text="Our Tech"
        textGradient="Stack"
        classNameGradient="bg-gradient-to-r from-color to-color3 "
        textDesc="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
      />

      {/* list category */}
      <div className=" flex text-center items-center mt-8 gap-x-8 flex-wrap justify-center gap-y-4">
        <a href="#" className="hover:text-red-500 hover:underline">
          Frontend
        </a>
        <a href="#" className="hover:text-red-500 hover:underline">
          Backend
        </a>
        <a href="#" className="hover:text-red-500 hover:underline">
          Cloud
        </a>
        <a href="#" className="hover:text-red-500 hover:underline">
          Messaging
        </a>
        <a href="#" className="hover:text-red-500 hover:underline">
          Database
        </a>
      </div>
      <div className="flex items-center md:gap-x-20 mt-14 flex-wrap justify-center gap-y-8">
        {listCategory.map((item, index) => {
          return (
            <div
              key={index}
              className="text-center flex flex-col items-center w-[100px] justify-center"
            >
              <Image alt="" src={item.image} width={48} height={48} />
              <p className="mt-6">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technology;
