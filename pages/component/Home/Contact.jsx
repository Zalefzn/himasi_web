import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import ButtonGradient from "../Button/ButtonGradient";


function Contact() {
  return (
      <div className="px-6  pt-28 md:pt-44 flex flex-col md:flex-row md:justify-center md:items-center relative" >
           <div className="rounded-[30px] shadow-lg bg-white lg:h-[700px] md:w-[600px] lg:w-[967px] py-11 md:relative" >
              <div className="mb:pr-32 md:pl-48 lg:pl-80 px-4" >
                <h3 className="text-2xl  md:text-4xl font-bold " >Send Message</h3>
                <h6 className="text-base text-gray-300 mb-11" >Kirim Masukan & Saran</h6>
                
                <input type="text" placeholder="Full Name" className="bg-gray-100 rounded-full w-full py-5 px-9 mb-8" />
                <input type="text" placeholder="Email" className="bg-gray-100 rounded-full w-full py-5 px-9 mb-8" />
                <textarea name="" id="" cols="30" rows="5" className="bg-gray-100 rounded-[30px] w-full py-5 px-9 mb-8" placeholder="Send Message Here"></textarea>
                <div className="flex justify-center md:flex-col" >
                  <ButtonGradient
                    className="w-[100px] text-white md:w-[235px] rounded-full md:text-2xl my-2"
                    classNameText="capitalize"
                  >
                    Send
                  </ButtonGradient>
                </div>
              </div>
          </div>
           <div className="mt-20 md:mt-10 md:h-[516px] lg:w-[367px] bg-gradient-to-b from-bgColor to-color3  md:absolute md:top-[180px] lg:top-36 md:left-[20px] lg:left-[100px] rounded-[30px] px-9 flex flex-col justify-between pt-20 pb-6" >
                  <div><h2 className=" text-2xl text-white" >CONTACT <br></br>HIMASI</h2>
                  <p className="flex items-center gap-x-2 text-white mt-12" > <Image src='/assets/icon/wa.svg' width={25} height={35} /> <span>08212332344555</span></p>
                  <p className="flex items-center gap-x-2 text-white mt-4" > <Image src='/assets/icon/wa.svg' width={25} height={35} /> <span>08212332344555</span></p></div>
                  <div className="flex gap-x-2 mt-10" >
                    <Image src='/assets/icon/wa.svg' width={25} height={35} />
                    <Image src='/assets/icon/wa.svg' width={25} height={35} />
                    <Image src='/assets/icon/wa.svg' width={25} height={35} />
                  </div>
              </div>
      </div>
  );
}

export default Contact;
