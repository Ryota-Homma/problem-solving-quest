import Button from "../../components/button/Button";
import ItemCard from "../../components/itemCard/ItemCard";
import useItemCard from "../../hooks/useItemCard";
import s from "./ItemCardArea.module.scss";

const ItemCardArea: React.FC = () => {
  const [displayedItems, {cardRef, deleteItem, shuffle}] = useItemCard();

  return (
    <>
      <div className={s["wrap"]}>
        {displayedItems.map((item, index) => (
          <ItemCard
            key={item.item}
            item={item.item}
            img={item.img}
            onClick={() => deleteItem(index)}
            ref={cardRef.current[index]}
          />
        ))}
      </div>
      <Button onClick={shuffle} />
    </>
  );
};

export default ItemCardArea;
