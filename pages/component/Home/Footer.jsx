import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-bgColor py-2 md:pt-4 mt-24 md:mt-52">
      <div className="flex items-center justify-between px-6 md:px-28">
        <div className="flex gap-x-4 items-center text-white font-bold text-md md:text-2xl" >
          <Image
            alt=""
            src="/assets/icon/logo.png"
            width={77}
            height={88}
          />
          <h2>Himpunan Mahasiswa Sistem Informasi</h2>
        </div>
        <Image
          alt=""
          src="/assets/icon/ars.png"
          width={77}
          height={88}
        />
      </div>
    </div>
  );
}

export default Footer;
