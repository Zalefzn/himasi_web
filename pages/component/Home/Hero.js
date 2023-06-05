import React from "react";
import Image from "next/image";
import ButtonGradient from "../Button/ButtonGradient";
import styles from "../../../styles/Home.module.css";
function Hero() {
  return (
    <div
      className={`${styles.hero}  md:h-[900px] w-full text-white pt-4 md:pt-0 flex flex-col md:flex-row items-center px-6 md:px-10 lg:gap-x-32 `}
    >
      <div className="mb-2">
        <h1 className="text-3xl md:text-4xl font-bold md:w-[440px]  line leading-[48px] mb-6">
          Himpunan Mahasiswa Sistem Informasi atau HIMASI{" "}
        </h1>
        <h2 className="text-lg md:w-[400px] mb-10 md:mb-20  ">
          HIMASI mempunyai nama yang berbeda-beda tiap masa jabatannya dan masa
          jabatan yang sekarang adalah HIMASI RESILIENCE.
        </h2>
        <div className="flex justify-center md:justify-start">
          <ButtonGradient className=" md:w-[235px] rounded-full md:text-2xl">
            Daftar
          </ButtonGradient>
        </div>
      </div>
      <div className="flex justify-end w-full">
        <Image src="/assets/images/home/siswa.png" width={776} height={609} />
      </div>
    </div>
  );
}

export default Hero;
