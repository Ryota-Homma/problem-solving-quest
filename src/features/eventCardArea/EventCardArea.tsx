import Button from "../../components/button/Button";
import EventCard from "../../components/eventCard/EventCard";
import useEventCard from "../../hooks/useEventCard";
import s from "./EventCardArea.module.scss";

const EventCardArea = () => {
  const {displayedCard, cardRef, shuffle} = useEventCard();

  return (
    <div className={s["wrap"]}>
      <EventCard
        major={displayedCard.major}
        situation={displayedCard.situation}
        ref={cardRef}
      />
      <Button onClick={shuffle} />
    </div>
  );
};

export default EventCardArea;
