import {useCallback, useEffect, useState} from "react";
import BgImage from "./components/bgImage/BgImage";
import Title from "./components/title/Title";
import Layout from "./components/layout/Layout";
import CardArea from "./components/cardArea/CardArea";
import EventCard from "./components/eventCard/EventCard";
import ItemCard from "./components/itemCard/ItemCard";
import {events} from "./data/events";
import {items} from "./data/items";
import Button from "./components/button/Button";

const App: React.FC = () => {
  const [isFontSet, setIsFontSet] = useState(false);

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

  useEffect(() => {
    setIsFontSet(true);
  }, []);

  const divStyle = {
    display: "flex",
    gap: "24px",
  };

  return isFontSet ? (
    <>
      <BgImage />

      <Layout>
        <Title />
        <CardArea>
          <EventCard major={events[0].major} situation={events[0].situation} />
          <Button onClick={() => console.log(1)} />
          <div style={divStyle}>
            {items.map((item) => (
              <ItemCard key={item.item} item={item.item} img={item.img} />
            ))}
          </div>
          <Button onClick={() => console.log(1)} />
        </CardArea>
      </Layout>
    </>
  ) : null;
};

export default App;
