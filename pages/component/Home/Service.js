import React from "react";

import styles from "../../../styles/Home.module.css";
import Image from "next/image";

const Card = ({ name, description, image }) => {
  return (
    <div className={` p-6 ${styles.cardBox} flex flex-col`}>
      <div className="flex-1">
        <Image alt="" src={image} width={83} height={83} />
        <h5 className="mt-7 font-bold">{name}</h5>
        <p className="mt-3 text-sm">{description}</p>
      </div>
      <div className="h-8 flex items-center arrowButton">
        <a className="hover:cursor-pointer ">
          <Image alt="" src="/assets/icon/arrow.svg" width={21} height={0} />
        </a>
      </div>
    </div>
  );
};

function Service() {
  return (
    <section className="py-20" id="service">
      <h2 className="text-center text-base text-color3">Our Services</h2>
      <h2 className="text-center text-2xl md:text-4xl font-bold text-bgColor mt-4">
        Services Provide By Us
      </h2>

      {/* card */}

      <div className="flex mt-20 items-center justify-center md:gap-x-6 lg:gap-x-14 gap-y-6 md:gap-y-0 flex-col md:flex-row px-6">
        <Card
          name="Creative Solution"
          image="/assets/icon/lamp.svg"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <Card
          name="UI/UX Design"
          image="/assets/icon/pen.svg"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <Card
          name="Development"
          image="/assets/icon/ligthing.svg"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
      </div>
    </section>
  );
}

export default Service;
