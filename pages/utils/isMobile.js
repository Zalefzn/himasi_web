import { useEffect, useState } from "react";

export function isMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // alert(navbarShow)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Menggunakan metode toLocaleString() dengan opsi 'id-ID' untuk format rupiah
  return isMobile;
}
