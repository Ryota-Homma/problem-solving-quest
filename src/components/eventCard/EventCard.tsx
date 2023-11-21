import {forwardRef} from "react";
import s from "./EventCard.module.scss";
import "./EventCard.css";

type Props = {
  major: string;
  situation: string;
  cardRef: React.RefObject<HTMLDivElement>;
};

const EventCard: React.FC<Props> = forwardRef((props) => {
  const {major, situation, cardRef} = props;

  return (
    <>
      <div className={s["wrap"]}>
        <div className={s["cardContainer"]} ref={cardRef}>
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
