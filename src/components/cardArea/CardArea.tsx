import s from "./CardArea.module.scss";

const CardArea: React.FC = () => {
  return (
    <div className={s["container"]}>
      <div className={s["container__event"]}>{/* event card area */}</div>
      <div>{/* item card area */}</div>
    </div>
  );
};

export default CardArea;
