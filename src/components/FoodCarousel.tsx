import React from "react";
import { useBreakfastStore } from "../store/useBreakfastStore";

export const FoodCarousel: React.FC = () => {
  const items = useBreakfastStore((s) => s.items);

  const onDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("foodId", id);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 18,
        overflowX: "auto",
        padding: "16px 20px",
        marginTop: 24
      }}
    >
      {items.filter((i) => i.available).map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={(e) => onDragStart(e, item.id)}
          style={{
            fontSize: 40,
            cursor: "grab",
            background: "#ffffff",
            borderRadius: 16,
            padding: "8px 12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.06)"
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};
