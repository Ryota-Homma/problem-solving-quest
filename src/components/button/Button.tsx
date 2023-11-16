import s from "./Button.module.scss";

type Props = {
  onClick: () => void;
};

const Button: React.FC<Props> = ({onClick}) => {
  return (
    <>
      <button className={s["button"]} onClick={onClick}>
        Shuffle
      </button>
    </>
  );
};

export default Button;
