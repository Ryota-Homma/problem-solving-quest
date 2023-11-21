import {useCallback, useEffect} from "react";
import BgImage from "./components/bgImage/BgImage";
import Title from "./components/title/Title";
import Layout from "./components/layout/Layout";
import CardArea from "./components/cardArea/CardArea";
import ItemCardArea from "./features/itemCardArea/ItemCardArea";
import EventCardArea from "./features/eventCardArea/EventCardArea";

const App: React.FC = () => {
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
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", fontSet);
      window.removeEventListener("load", fontSet);
    };
  }, [fontSet]);

  return (
    <>
      <BgImage />

      <Layout>
        <Title />
        <CardArea>
          <EventCardArea />
          <ItemCardArea />
        </CardArea>
      </Layout>
    </>
  );
};

export default App;
