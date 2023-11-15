import s from "./Title.module.scss";
import Logo from "/assets/logo/logo.svg?react";

const Title: React.FC = () => {
  return (
    <div className={s.titleWrap}>
      <p className={s.svg}>
        <Logo />
      </p>
      <p className={s["text"]}>問題解決クエスト</p>
    </div>
  );
};

export default Title;
