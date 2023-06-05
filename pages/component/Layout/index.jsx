import React from "react";
function Layout({ children, heightNavbar }) {
  return (
    heightNavbar > 0 && (
      <div
        className={`pt-[${heightNavbar}px] md:pt-0`}
      >
        {children}
      </div>
    )
  );
}

export default Layout;
