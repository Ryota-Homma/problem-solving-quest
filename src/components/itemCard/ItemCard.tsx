import {useEffect, useRef, useState} from "react";
import s from "./ItemCard.module.scss";
import "./ItemCard.css";

type Props = {
  item: string;
  img: string;
  onClick: () => void;
};

const ItemCard: React.FC<Props> = (props) => {
  const {item, img, onClick} = props;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const cardElement = cardRef.current!;
    if (cardRef.current) {
      cardRef.current.classList.add("active");
    }
    cardElement.addEventListener("animationend", onClick);
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
};

export default ItemCard;
