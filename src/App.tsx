import {useLayoutEffect} from "react";
import BgImage from "./components/bgImage/BgImage";
import Title from "./components/title/Title";
import Layout from "./components/layout/Layout";
import ExplanationArea from "./components/explanationArea/ExplanationArea";
import CardArea from "./components/cardArea/CardArea";
import ItemCardArea from "./features/itemCardArea/ItemCardArea";
import EventCardArea from "./features/eventCardArea/EventCardArea";
import useFontSet from "./hooks/useFontSet";

const App: React.FC = () => {
  // FOUC対策
  const fontSet = useFontSet();
  useLayoutEffect(() => {
    fontSet();
  }, [fontSet]);

  return (
    <>
      <BgImage />

      <Layout>
        <Title />
        <ExplanationArea />
        <CardArea>
          <EventCardArea />
          <ItemCardArea />
        </CardArea>
      </Layout>
    </>
  );
};

export default App;
