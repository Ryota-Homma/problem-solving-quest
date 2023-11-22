import s from "./EventCard.module.scss";

type Props = {
  major: string;
  situation: string;
};

const EventCard: React.FC<Props> = (props) => {
  const {major, situation} = props;
  return (
    <div className={s["wrap"]}>
      <p className={s["title"]}>{major}</p>
      <p className={s["text"]}>{situation}</p>
    </div>
  );
};

export default EventCard;
