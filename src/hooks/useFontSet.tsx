import {useCallback, useEffect} from "react";

type FontSet = () => void;

const useFontSet = (): FontSet => {
  const fontSet = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;
    const htmlElement = document.querySelector("html")!;
    if (ratio > 1.6) {
      htmlElement.style.fontSize = Math.floor((1 / width) * 1000000) / 10000 + "vw";
    }
    if (ratio <= 1.6) {
      htmlElement.style.fontSize =
        Math.floor((1 / (height * 0.016)) * 10000) / 10000 + "vw";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", fontSet);
    window.addEventListener("load", fontSet);
    return () => {
      window.removeEventListener("resize", fontSet);
      window.removeEventListener("load", fontSet);
    };
  }, [fontSet]);

  return fontSet;
};

export default useFontSet;
