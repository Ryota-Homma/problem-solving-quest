import s from "./ExplanationArea.module.scss";

const ExplanationArea: React.FC = () => {
  return (
    <ul className={s["container"]}>
      <li className={s["container__list"]}>
        <p
          className={`${s["container__heading"]} ${s["container__heading-m"]}`}
        >
          anagement
        </p>
        <p className={s["container__text"]}>
          【経営目線】チームの目的と自分の役割を適合し実行できること
        </p>
      </li>
      <li className={s["container__list"]}>
        <p
          className={`${s["container__heading"]} ${s["container__heading-a"]}`}
        >
          ssociate
        </p>
        <p className={s["container__text"]}>
          【仲間】自分も相手も成長できる真の関係を築けること
        </p>
      </li>
      <li className={s["container__list"]}>
        <p
          className={`${s["container__heading"]} ${s["container__heading-j"]}`}
        >
          udgment
        </p>
        <p className={s["container__text"]}>
          【判断力】経験と失敗を積み重ね、勇気と自信を持って実行できること
        </p>
      </li>
      <li className={s["container__list"]}>
        <p
          className={`${s["container__heading"]} ${s["container__heading-o"]}`}
        >
          penness
        </p>
        <p className={s["container__text"]}>
          【寛容さ】心ある率直な意見を伝え、またそれを聞く姿勢を持つこと
        </p>
      </li>
      <li className={s["container__list"]}>
        <p
          className={`${s["container__heading"]} ${s["container__heading-r"]}`}
        >
          ecruitment
        </p>
        <p className={s["container__text"]}>
          【採用】全員人事、自分たちの仲間は自分たちで見つけること
        </p>
      </li>
    </ul>
  );
};

export default ExplanationArea;
