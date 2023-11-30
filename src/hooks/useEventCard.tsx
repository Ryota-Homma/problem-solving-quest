import {useEffect, useRef, useState} from "react";
import {events} from "../data/events";
import differenceBy from "lodash/differenceBy";
import sampleSize from "lodash/sampleSize";

type EventCardState = {
  major: string;
  situation: string;
};

type UseEventCard = {
  displayedCards: EventCardState[];
  cardRef: React.RefObject<HTMLDivElement>;
  shuffle: () => void;
};

const useEventCard = (): UseEventCard => {
  const [deck, setDeck] = useState<EventCardState[]>(events);
  const [displayedCards, setDisplayedCards] = useState<EventCardState[] | []>([]);

  const cardRef = useRef<HTMLDivElement>(null);
  const shuffle = () => {
    const newDeck = differenceBy(deck, displayedCards, "situation");
    if (!cardRef.current) return;
    if (!newDeck.length) {
      confirm("イベントカードがなくなりました。もう一度シャッフルしますか？");
      cardRef.current.classList.add("active");
      const resetDeck = differenceBy(events, displayedCards, "situation");
      return cardRef.current!.addEventListener("animationend", () => setDeck(resetDeck));
    }
    cardRef.current.classList.add("active");
    cardRef.current!.addEventListener("animationend", () => setDeck(newDeck));
  };

  useEffect(() => {
    const shuffledCard = sampleSize(deck, 1);
    setDisplayedCards(shuffledCard);
  }, [deck]);

  return {displayedCards, cardRef, shuffle};
};

export default useEventCard;
