import { FoodItem } from "../models/FoodItem";
import "./FoodCard.css";

interface Props {
  item: FoodItem;
  onDragStart: (e: React.DragEvent, id: string) => void;
}

export const FoodCard = ({ item, onDragStart }: Props) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, item.id)}
      className="food-card"
    >
      <div className="food-card-icon">
        <span className="food-emoji">{item.emoji}</span>
      </div>

      <p className="food-card-title">{item.name}</p>
      <p className="food-card-subtitle">{item.calories} kcal</p>
    </div>
  );
};
