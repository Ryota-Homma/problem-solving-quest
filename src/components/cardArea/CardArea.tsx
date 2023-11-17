import s from "./CardArea.module.scss";

type Props = {
  children: React.ReactNode[];
};

const CardArea: React.FC<Props> = ({children}) => {
  return (
    <div className={s["container"]}>
      <div className={s["container__event"]}>
        <div className={s["container__warp"]}>
          {children[0]}
          {children[1]}
          {/* event card area */}
        </div>
      </div>
      <div>
        <div className={s["container__warp"]}>
          {children[2]}
          {children[3]}
          {/* item card area */}
        </div>
      </div>
    </div>
  );
};

export default CardArea;
