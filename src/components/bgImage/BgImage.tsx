import s from "./BgImage.module.scss";
import Bg1 from "/assets/bg/bg-item01.svg?react";
import Bg2 from "/assets/bg/bg-item02.svg?react";
import Bg3 from "/assets/bg/bg-item03.svg?react";
import Bg4 from "/assets/bg/bg-item04.svg?react";
import Bg5 from "/assets/bg/bg-item05.svg?react";
import Bg6 from "/assets/bg/bg-item06.svg?react";

const BgImage: React.FC = () => {
  return (
    <div className={s.bg}>
      <div className={`${s["bg__item"]} ${s["bg__item-01"]}`}>
        <Bg1 />
      </div>
      <div className={`${s["bg__item"]} ${s["bg__item-02"]}`}>
        <Bg2 />
      </div>
      <div className={`${s["bg__item"]} ${s["bg__item-03"]}`}>
        <Bg3 />
      </div>
      <div
        className={`${s["bg__item"]} ${s["bg__item-04"]} ${s["bg__item-animationReverse"]}`}
      >
        <Bg4 />
      </div>
      <div
        className={`${s["bg__item"]} ${s["bg__item-05"]} ${s["bg__item-animationReverse"]}`}
      >
        <Bg5 />
      </div>
      <div
        className={`${s["bg__item"]} ${s["bg__item-06"]} ${s["bg__item-animationReverse"]}`}
      >
        <Bg6 />
      </div>
    </div>
  );
};

export default BgImage;
