import {MutableRefObject, RefObject, createRef, useEffect, useRef, useState} from "react";
import {items} from "../data/items";
import differenceBy from "lodash/differenceBy";
import sampleSize from "lodash/sampleSize";

type DisplayedItems = {
  item: string;
  img: string;
};

type UseItemCard = {
  displayedCards: DisplayedItems[];
  cardRef: MutableRefObject<RefObject<HTMLInputElement>[]>;
  deleteItem: (index: number) => void;
  shuffle: () => void;
};

const useItemCard = (): UseItemCard => {
  const [deck, setDeck] = useState<DisplayedItems[]>(items);
  const [displayedCards, setDisplayedCards] = useState<DisplayedItems[] | []>([]);

  const calculateDeck = (
    displayed: DisplayedItems[],
    deck: DisplayedItems[],
    num: number
  ) => {
    const RemainingDeck = differenceBy(deck, displayed, "item");
    const newCard = sampleSize(RemainingDeck, num);
    const newDeck = differenceBy(RemainingDeck, newCard, "item");
    return {RemainingDeck, newCard, newDeck};
  };

  const handleAnimationEnd = (
    card: RefObject<HTMLInputElement>,
    newCard: DisplayedItems[],
    newDeck: DisplayedItems[]
  ) => {
    card.current!.addEventListener("animationend", () => {
      setDisplayedCards(newCard);
      setDeck(newDeck);
    });
  };

  const deleteItem = (index: number) => {
    const {RemainingDeck, newCard, newDeck} = calculateDeck(displayedCards, deck, 1);
    if (!RemainingDeck.length) return;
    displayedCards[index] = newCard[0];
    setDisplayedCards(displayedCards);
    setDeck(newDeck);
  };

  const shuffle = () => {
    const {RemainingDeck, newCard, newDeck} = calculateDeck(displayedCards, deck, 3);
    if (RemainingDeck.length === 0) {
      confirm("アイテムカードがなくなりました。もう一度シャッフルしますか？");
      cardRef.current.forEach((card) => {
        if (!card.current!.classList.contains("active")) {
          card.current!.classList.add("active");
        }
        card.current!.addEventListener("animationend", () => {
          const resetDeck = differenceBy(items, displayedCards, "item");
          const resetDisplayedCards = sampleSize(resetDeck, 3);
          setDeck(resetDeck);
          return setDisplayedCards(resetDisplayedCards);
        });
      });
      return;
    }
    cardRef.current.forEach((card, index) => {
      card.current!.classList.add("active");
      if (!newCard[index]) return newCard.push(displayedCards[index]);
      handleAnimationEnd(card, newCard, newDeck);
    });
  };

  const cardRef = useRef<RefObject<HTMLInputElement>[]>([]);
  displayedCards.forEach((_, index) => {
    cardRef.current[index] = createRef<HTMLInputElement>();
  });

  useEffect(() => {
    const shuffledArray = sampleSize(deck, 3);
    setDisplayedCards(shuffledArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {displayedCards, cardRef, deleteItem, shuffle};
};

export default useItemCard;
