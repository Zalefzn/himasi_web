import React from "react";

function HeadingSection({
  className,
  text,
  textGradient,
  classNameGradient = "",
  textDesc,
  classNameDesc,
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2
        className={`text-center text-2xl md:text-4xl font-bold text-bgColor mt-4 ${className}`}
      >
        {text}{" "}
        <span className={`text-transparent bg-clip-text ${classNameGradient}`}>
          {textGradient}
        </span>
      </h2>
      <p
        className={`text-sm text-center mt-6 text-bgColor max-w-[550px] ${classNameDesc}`}
      >
        {textDesc}
      </p>
    </div>
  );
}

export default HeadingSection;
