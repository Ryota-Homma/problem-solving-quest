import {useEffect, useRef, useState} from "react";
import Button from "../../components/button/Button";
import EventCard from "../../components/eventCard/EventCard";
import {events} from "../../data/events";
import s from "./EventCardArea.module.scss";
import _ from "lodash";

type Item = {
  major: string;
  situation: string;
};

const EventCardArea = () => {
  // 取得したことのあるイベントを除いた配列を管理するuseState
  const [excludedItems, setExcludedItems] = useState(events);
  // イベントカードを表示するuseState
  const [displayedItems, setDisplayedItems] = useState<Item[]>([]);

  // 初回レンダリング時に3つのアイテムを表示する
  useEffect(() => {
    const shuffledArray = _.sampleSize(excludedItems, 1);
    setDisplayedItems(shuffledArray);
  }, []);

  const cardRef = useRef<HTMLDivElement>(null);
  const shuffle = () => {
    const newArray = _.differenceBy(excludedItems, displayedItems, "situation");
    const newItem = _.sampleSize(newArray, 1);
    const newExcludedItems = _.differenceBy(newArray, newItem, "situation");
    if (newExcludedItems.length === 0) return alert("イベントがなくなりました");
    if (cardRef.current!) cardRef.current.classList.add("active");
    cardRef.current!.addEventListener("animationend", () => {
      setDisplayedItems(() => newItem);
      setExcludedItems(() => newExcludedItems);
    });
  };

  return (
    <>
      {displayedItems.map((item) => (
        <div key={item.situation} className={s["wrap"]}>
          <EventCard major={item.major} situation={item.situation} ref={cardRef} />
          <Button onClick={shuffle} />
        </div>
      ))}
    </>
  );
};

export default EventCardArea;
