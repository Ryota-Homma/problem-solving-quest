import {forwardRef} from "react";
import s from "./EventCard.module.scss";
import "./EventCard.css";

type Props = {
  major: string;
  situation: string;
};

const EventCard = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {major, situation} = props;

  return (
    <>
      <div className={s["wrap"]}>
        <div className={s["cardContainer"]} ref={ref}>
          <div className={s["card"]}>
            <p className={s["card__title"]}>{major}</p>
            <p className={s["card__text"]}>{situation}</p>
          </div>
          <div className={s["revers"]}></div>
        </div>
      </div>
    </>
  );
});

export default EventCard;
