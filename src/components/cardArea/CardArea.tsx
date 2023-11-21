import s from "./CardArea.module.scss";

type Props = {
  children: React.ReactNode[];
};

const CardArea: React.FC<Props> = ({children}) => {
  return (
    <div className={s["container"]}>
      <div className={s["container__event"]}>
        <div className={s["container__warp"]}>{children[0]}</div>
      </div>
      <div>
        <div className={s["container__warp"]}>{children[1]}</div>
      </div>
    </div>
  );
};

export default CardArea;
