import BgImage from "./components/bgImage/BgImage";
import Title from "./components/title/Title";
import Layout from "./components/layout/Layout";
import CardArea from "./components/cardArea/CardArea";
import ItemCardArea from "./features/itemCardArea/ItemCardArea";
import EventCardArea from "./features/eventCardArea/EventCardArea";
import useFontSet from "./hooks/useFontSet";
import {useLayoutEffect} from "react";

const App: React.FC = () => {
  const fontSet = useFontSet();
  useLayoutEffect(() => {
    fontSet();
  }, [fontSet]);

  return (
    <>
      <BgImage />

      <Layout>
        <Title />
        <CardArea>
          <EventCardArea />
          <ItemCardArea />
        </CardArea>
      </Layout>
    </>
  );
};

export default App;
