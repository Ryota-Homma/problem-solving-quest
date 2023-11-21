import {RefObject, createRef, useEffect, useRef, useState} from "react";
import Button from "../../components/button/Button";
import ItemCard from "../../components/itemCard/ItemCard";
import {items} from "../../data/items";
import _ from "lodash";
import s from "./ItemCardArea.module.scss";

type DisplayedItems = {
  item: string;
  img: string;
};

const ItemCardArea: React.FC = () => {
  // 取得したことのあるアイテムを除いた配列を管理するuseState
  const [excludedItems, setExcludedItems] = useState(items);
  // 3つのアイテムを表示するuseState
  const [displayedItems, setDisplayedItems] = useState<DisplayedItems[]>([]);

  // 初回レンダリング時に3つのアイテムを表示する
  useEffect(() => {
    const shuffledArray = _.sampleSize(excludedItems, 3);
    setDisplayedItems(shuffledArray);
  }, []);

  // アイテムを削除する関数
  const deleteItem = (item: DisplayedItems, index: number) => {
    const newArray = _.differenceBy(excludedItems, displayedItems, "item");
    const newItem = _.sampleSize(newArray, 1);
    const newExcludedItems = _.differenceBy(newArray, newItem, "item");
    if (newExcludedItems.length === 0) return alert("アイテムがなくなりました");
    const updatedCards = _.cloneDeep(displayedItems);
    updatedCards[index] = newItem[0];
    setDisplayedItems(updatedCards);
    setExcludedItems(newExcludedItems);
  };

  // シャッフルする関数
  const shuffle = () => {
    const newArray = _.differenceBy(excludedItems, displayedItems, "item");
    const newItem = _.sampleSize(newArray, 3);
    const newExcludedItems = _.differenceBy(newArray, newItem, "item");
    if (newArray.length === 0) return alert("アイテムがなくなりました");
    cardRef.current.forEach((card) => {
      card.current?.classList.add("active");
      card.current?.addEventListener("animationend", () => {
        setDisplayedItems(newItem);
        setExcludedItems(newExcludedItems);
      });
    });
  };

  const cardRef = useRef<RefObject<HTMLInputElement>[]>([]);
  displayedItems.forEach((_, index) => {
    cardRef.current[index] = createRef<HTMLInputElement>();
  });

  return (
    <>
      <div className={s["wrap"]}>
        {displayedItems.map((item, index) => (
          <ItemCard
            key={item.item}
            item={item.item}
            img={item.img}
            onClick={() => deleteItem(item, index)}
            cardRefs={cardRef.current[index]}
          />
        ))}
      </div>
      <Button onClick={() => shuffle()} />
    </>
  );
};

export default ItemCardArea;
