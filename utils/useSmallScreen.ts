import { useState, useEffect } from "react";

export function useSmallScreen() {
  const width = useWidth();
  return width < 640; // Tailwind small size
}

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};
