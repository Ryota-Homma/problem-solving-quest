import {useEffect, useRef, useState} from "react";
import {events} from "../data/events";
import differenceBy from "lodash/differenceBy";
import sample from "lodash/sample";

type EventCardState = {
  major: string;
  situation: string;
};

type UseEventCard = {
  displayedCard: EventCardState;
  cardRef: React.RefObject<HTMLDivElement>;
  shuffle: () => void;
};

const initialCardState = {
  major: "",
  situation: "",
};

const useEventCard = (): UseEventCard => {
  const [deck, setDeck] = useState<EventCardState[]>(events);
  const [displayedCard, setDisplayedCard] = useState<EventCardState>(initialCardState);

  const cardRef = useRef<HTMLDivElement>(null);
  const shuffle = () => {
    const newDeck = differenceBy(deck, [displayedCard], "situation");
    if (!cardRef.current) return;
    if (!newDeck.length) {
      const confirmResult = confirm(
        "イベントカードがなくなりました。もう一度シャッフルしますか？"
      );
      if (!confirmResult) return;
      cardRef.current.classList.add("active");
      const resetDeck = differenceBy(events, [displayedCard], "situation");
      return cardRef.current!.addEventListener("animationend", () => setDeck(resetDeck));
    }
    cardRef.current.classList.add("active");
    cardRef.current.addEventListener("animationend", () => setDeck(newDeck));
  };

  useEffect(() => {
    const shuffledCard = sample(deck);
    if (!cardRef.current) return;
    cardRef.current.classList.remove("active");
    setDisplayedCard(shuffledCard!);
  }, [deck]);

  return {displayedCard, cardRef, shuffle};
};

export default useEventCard;
