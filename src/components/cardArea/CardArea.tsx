import s from "./CardArea.module.scss";

type Props = {
  children: React.ReactNode[];
};

const CardArea: React.FC<Props> = (prop) => {
  return (
    <div className={s["container"]}>
      <div className={s["container__event"]}>
        <div className={s["container__warp"]}>{/* event card area */}</div>
      </div>
      <div>
        <div className={s["container__warp"]}>{/* item card area */}</div>
      </div>
    </div>
  );
};

export default CardArea;
