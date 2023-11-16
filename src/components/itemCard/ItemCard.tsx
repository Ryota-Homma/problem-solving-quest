import s from "./ItemCard.module.scss";

type Props = {
  item: string;
  img: string;
};

const ItemCard: React.FC<Props> = (props) => {
  const {item, img} = props;
  return (
    <div className={s["wrap"]}>
      <span className={s["deleteButton"]}></span>
      <p className={s["img"]}>
        <img src={img} />
      </p>
      <p className={s["text"]}>
        <span>{item}</span>
      </p>
    </div>
  );
};

export default ItemCard;
