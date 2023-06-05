import React from "react";

function ButtonGradient({
  link = "",
  text,
  gradient = "bg-gradient-to-b from-bgColor to-color2",
  className = "",
  classNameText = "",
  children = null,
  bgColor = "",
}) {
  if (link == "") {
    return (
      <button
        className={`uppercase font-medium  ${gradient} w-[235px] h-[56px] rounded-full ${className}`}
      >
        <div
          // className={`h-full w-full bg-bgColor py-4 rounded-[20px] text-[30px] hover:${gradient.replace(/\s+/g, " hover:")}`}
          className={`h-full w-full ${bgColor} py-4 w-[235px] h-[56px] align-middle rounded-full hover:bg-gradient-to-r font-bold flex justify-center items-center ${classNameText}`}
        >
          <span>{children != null ? children : text}</span>
        </div>
      </button>
    );
  }

  if (link != "") {
    return (
      <a
        href="#"
        className={`uppercase font-medium text-3xl w-[29rem] p-[2px] ${gradient} rounded-[20px] ${className}`}
      >
        <div
          className={`h-full w-full ${bgColor} py-4 rounded-[20px] text-[30px] hover:bg-gradient-to-r`}
        >
          <span>{children != null ? children : text}</span>
        </div>
      </a>
    );
  }
}

export default ButtonGradient;
