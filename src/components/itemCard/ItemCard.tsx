import {useEffect, useRef, useState} from "react";
import s from "./ItemCard.module.scss";

type Props = {
  item: string;
  img: string;
};

const ItemCard: React.FC<Props> = (props) => {
  const {item, img} = props;

  const [isAnimated, setIsAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsAnimated(true);
  };

  useEffect(() => {
    const cardElement = cardRef.current!;

    if (!cardElement) return;
    const handleAnimationEnd = () => {
      setIsAnimated(false);
    };

    cardElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      cardElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className={s["wrap"]}>
      <span className={s["deleteButton"]} onClick={handleClick}></span>
      <div
        className={`${s["cardContainer"]} ${isAnimated ? s["active"] : ""}`}
        ref={cardRef}
      >
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
