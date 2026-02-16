import { useBreakfastStore } from "../store/useBreakfastStore";
import "./Plate.css";

export const Plate = () => {
  const plateItems = useBreakfastStore((s) => s.plateItems);

  return (
    <div id="plate" className="plate">
      {plateItems.map((item, index) => (
        <div
          key={item.id + index}
          className="plate-item"
          style={{
            left: item.x,
            top: item.y,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};
