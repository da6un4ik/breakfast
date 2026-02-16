import { useBreakfastStore } from "../store/useBreakfastStore";
import { FoodCard } from "./FoodCard";
import "./FoodCarousel.css";

export const FoodCarousel = () => {
  const items = useBreakfastStore((s) => s.items);

  const onDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("foodId", id);
  };

  return (
    <div className="food-carousel">
      {items.filter(i => i.available).map((item) => (
        <FoodCard key={item.id} item={item} onDragStart={onDragStart} />
      ))}
    </div>
  );
};
