import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const ItemTestimonial = ({ className = "", refParsing }) => {
  return (
    <div>
      <div
        ref={refParsing}
        className={` border-l-[21px] border-color4 px-9 ${className}  `}
      >
        <div className="flex items-center gap-x-2 text-base mb-3">
          <Image
            alt=""
            src="/assets/images/home/person.png"
            width={40}
            height={40}
          />
          <div>
            <h4 className="font-extralight">Hikmal Pramudya</h4>
            <p className="text-xs">
              <span className="bg-gradient-to-r from-color to-color5 text-transparent bg-clip-text">
                Account Manager
              </span>
            </p>
          </div>
        </div>
        <p className="text-xs font-extralight text-justify">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s.
        </p>
      </div>
    </div>
  );
};

function Testimonial() {
  const [isMobile, setIsMobile] = useState(false);

  const refFocused = useRef(false);

  useEffect(() => {
    // alert(navbarShow)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFocused = () => {
    console.log("focusec");
    refFocused.current.classList.add("focused");
  };

  const handleBlur = () => {
    refFocused.current.classList.remove("focused");
    console.log("remove");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-20 px-6 text-center md:text-left md:px-24 gap-x-10">
      <div className="md:w-[50%]">
        <h3 className="text-2xl uppercase text-color font-light mb-4">
          Testimonial
        </h3>
        <h2
          className="text-5xl max-w-[388px] mb-7"
          style={{ lineHeight: "57px" }}
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-color to-color3 text-transparent bg-clip-text ">
            Clients
          </span>{" "}
          Say
        </h2>
        <p className="text-lg max-w-[410px]">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s.
        </p>
      </div>

      <div className="md:w-[50%] flex md:flex-col gap-y-7 flex-wrap md:mt-0 mt-6 md:max-h-[30rem] max-w-full">
        <Swiper
          direction={isMobile ? "horizontal" : "vertical"}
          slidesPerView={isMobile ? 1 : 3}
          // onFocus={handleFocused}
          // onBlur={handleBlur}
          centeredSlides={true}
          pagination={{
            el: "",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <ItemTestimonial className={isActive ? "" : "opacity-25"} />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
