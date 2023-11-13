import s from "./BgImage.module.scss";

const BgImage: React.FC = () => {
  return (
    <div className={s.bg}>
      <div className={`${s.bgItem} ${s.bgItem01}`}>
        <img src="../../assets/bg/bg-item01.svg" />
      </div>
      <div className={`${s.bgItem} ${s.bgItem02}`}>
        <img src="../../assets/bg/bg-item02.svg" />
      </div>
      <div className={`${s.bgItem} ${s.bgItem03}`}>
        <img src="../../assets/bg/bg-item03.svg" />
      </div>
      <div className={`${s.bgItem} ${s.bgItem04}`}>
        <img src="../../assets/bg/bg-item04.svg" />
      </div>
      <div className={`${s.bgItem} ${s.bgItem05}`}>
        <img src="../../assets/bg/bg-item05.svg" />
      </div>
      <div className={`${s.bgItem} ${s.bgItem06}`}>
        <img src="../../assets/bg/bg-item06.svg" />
      </div>
    </div>
  );
};

export default BgImage;
