import Button from "../../components/button/Button";
import EventCard from "../../components/eventCard/EventCard";
import useEventCard from "../../hooks/useEventCard";
import s from "./EventCardArea.module.scss";

const EventCardArea = () => {
  const [displayedItems, {cardRef, shuffle}] = useEventCard();

  return (
    <>
      {displayedItems.map((item) => (
        <div key={item.situation} className={s["wrap"]}>
          <EventCard major={item.major} situation={item.situation} ref={cardRef} />
          <Button onClick={shuffle} />
        </div>
      ))}
    </>
  );
};

export default EventCardArea;
