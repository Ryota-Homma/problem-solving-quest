import {useEffect, useState} from "react";
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
  useEffect(() => {
    const shuffledArray = _.sampleSize(excludedItems, 3);
    setDisplayedItems(shuffledArray);
  }, []);

  const deleteItem = (item: DisplayedItems, index: number) => {
    // 選ばれてない配列
    const newArray = _.differenceBy(excludedItems, displayedItems, "item");

    // // newArrayの中からランダムで1つ選ぶ
    const newItem = _.sampleSize(newArray, 1);

    // // 今回選ばれたアイテムを削除
    const newExcludedItems = _.differenceBy(newArray, newItem, "item");

    if (newExcludedItems.length === 0) return alert("アイテムがなくなりました");

    // 選んだアイテムと新しいアイテムを入れ替える
    const updatedCards = _.cloneDeep(displayedItems);
    updatedCards[index] = newItem[0];

    // stateを更新
    setDisplayedItems(updatedCards);
    setExcludedItems(newExcludedItems);
  };

  return (
    <>
      <div className={s["wrap"]}>
        {displayedItems.map((item, index) => (
          <ItemCard
            key={item.item}
            item={item.item}
            img={item.img}
            onClick={() => deleteItem(item, index)}
          />
        ))}
      </div>
      <Button onClick={() => deleteItem(items[0], 0)} />
    </>
  );
};

export default ItemCardArea;
