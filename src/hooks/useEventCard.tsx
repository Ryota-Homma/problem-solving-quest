import {useEffect, useRef, useState} from "react";
import {events} from "../data/events";
import differenceBy from "lodash/differenceBy";
import sampleSize from "lodash/sampleSize";

type EventCardState = {
  major: string;
  situation: string;
};

type CardRef = {
  cardRef: React.RefObject<HTMLDivElement>;
  shuffle: () => void;
};

const useEventCard = (): [EventCardState[], CardRef] => {
  const [deck, setDeck] = useState<EventCardState[]>(events);
  const [displayedCards, setDisplayedCards] = useState<EventCardState[] | []>([]);

  useEffect(() => {
    const shuffledArray = sampleSize(deck, 1);
    setDisplayedCards(shuffledArray);
  }, [deck]);

  const cardRef = useRef<HTMLDivElement>(null);
  const shuffle = () => {
    const newArray = differenceBy(deck, displayedCards, "situation");
    if (!newArray.length) return alert("イベントカードがなくなりました");
    if (cardRef.current!) cardRef.current.classList.add("active");
    cardRef.current!.addEventListener("animationend", () => setDeck(newArray));
  };
  return [displayedCards, {cardRef, shuffle}];
};

export default useEventCard;
