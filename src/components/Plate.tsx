import { useRef } from "react";
import { useBreakfastStore } from "../store/useBreakfastStore";

export const Plate = () => {
  const plateRef = useRef<HTMLDivElement>(null);
  const plateItems = useBreakfastStore((s) => s.plateItems);

  return (
    <div
      ref={plateRef}
      id="plate"
      style={{
        width: 260,
        height: 260,
        borderRadius: "50%",
        background: "#ffffff",
        margin: "0 auto",
        position: "relative",
        boxShadow: "0 10px 24px rgba(0,0,0,0.12)"
      }}
    >
      {plateItems.map((item, index) => (
        <div
          key={item.id + index}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            fontSize: 40,
            transform: "translate(-50%, -50%)"
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};
