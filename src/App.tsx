import {useEffect} from "react";
import s from "./App.module.scss";
import BgImage from "./components/bgImage/BgImage";
import Title from "./components/title/Title";

const App: React.FC = () => {
  useEffect(() => {
    const handleResize = () => {
      fontSet();
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  const fontSet = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;
    const htmlElement = document.querySelector("html");
    console.log(
      (htmlElement!.style.fontSize = Math.floor((1 / width) * 1000000) / 10000 + "vw")
    );

    if (ratio > 1.6) {
      htmlElement!.style.fontSize = Math.floor((1 / width) * 1000000) / 10000 + "vw";
    } else if (ratio < 1.6) {
      htmlElement!.style.fontSize =
        Math.floor((1 / (height * 0.016)) * 10000) / 10000 + "vw";
    }
  };

  return (
    <div className="square">
      <div className={s.wrap}>
        <BgImage />
        <Title />
      </div>
    </div>
  );
};

export default App;
