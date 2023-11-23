import s from "./TopArea.module.scss";
import ExplanationArea from "../explanationArea/ExplanationArea";
import RuleArea from "../ruleArea/RuleArea";

const TopArea: React.FC = () => {
  return (
    <div className={s["container"]}>
      <ExplanationArea />
      <RuleArea />
    </div>
  );
};

export default TopArea;
