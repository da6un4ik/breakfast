import { useEffect } from "react";
import { useBreakfastStore } from "../store/useBreakfastStore";

export const PlateDropHandler = () => {
  const addToPlate = useBreakfastStore((s) => s.addToPlate);
  const items = useBreakfastStore((s) => s.items);

  useEffect(() => {
    const plate = document.getElementById("plate");
    if (!plate) return;

    plate.ondragover = (e) => e.preventDefault();

    plate.ondrop = (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("foodId");
      const item = items.find((i) => i.id === id);
      if (!item) return;

      const rect = plate.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      addToPlate(item, x, y);
    };
  }, [items, addToPlate]);

  return null;
};
