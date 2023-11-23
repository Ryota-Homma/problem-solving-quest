import s from "./RuleArea.module.scss";

const RuleArea: React.FC = () => {
  return (
    <ul className={s["container"]}>
      <li className={`${s["container__list"]} ${s["container__list-1"]}`}>
        解決したい問題が表示される
      </li>
      <li className={`${s["container__list"]} ${s["container__list-2"]}`}>
        3つあるアイテムの中から1つ選び、そのアイテムを使ってどう問題を解決するか考えて発表する
      </li>
      <li className={`${s["container__list"]} ${s["container__list-3"]}`}>
        選んだアイテムカードは×ボタンを押して入れ替える
      </li>
      <li className={`${s["container__list"]} ${s["container__list-4"]}`}>
        ①~③の流れを全員行う
      </li>
      <li className={`${s["container__list"]} ${s["container__list-5"]}`}>
        どの人の問題解決が良かったかを全員投票する
      </li>
      <li className={`${s["container__list"]} ${s["container__list-6"]}`}>
        投票順によってポイントが入る
      </li>
    </ul>
  );
};

export default RuleArea;
