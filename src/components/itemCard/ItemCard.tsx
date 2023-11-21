import {forwardRef} from "react";
import s from "./ItemCard.module.scss";
import "./ItemCard.css";

type Props = {
  item: string;
  img: string;
  onClick: () => void;
  cardRefs: React.RefObject<HTMLDivElement>;
};

const ItemCard: React.FC<Props> = forwardRef((props) => {
  const {item, img, onClick, cardRefs} = props;
  const cardRef = cardRefs as React.MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    if (cardRef.current!) cardRef.current.classList.add("active");
    cardRef.current.addEventListener("animationend", onClick);
  };

  return (
    <div className={s["wrap"]}>
      <span className={s["deleteButton"]} onClick={handleClick}></span>
      <div className={s["cardContainer"]} ref={cardRef}>
        <div className={s["card"]}>
          <p className={s["card__img"]}>
            <img src={img} />
          </p>
          <p className={s["card__text"]}>
            <span>{item}</span>
          </p>
        </div>
        <div className={s["revers"]}></div>
      </div>
    </div>
  );
});

export default ItemCard;
