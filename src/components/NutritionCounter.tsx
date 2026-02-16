import { useBreakfastStore } from "../store/useBreakfastStore";

export const NutritionCounter = () => {
  const plateItems = useBreakfastStore((s) => s.plateItems);

  const totals = plateItems.reduce(
    (acc, item) => {
      acc.calories += item.calories;
      acc.protein += item.protein;
      acc.fat += item.fat;
      acc.carbs += item.carbs;
      return acc;
    },
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 16,
        right: 16,
        background: "#ffffff",
        padding: "10px 14px",
        borderRadius: 14,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        fontSize: 13
      }}
    >
      <div><b>Калории:</b> {totals.calories}</div>
      <div>Б: {totals.protein} г</div>
      <div>Ж: {totals.fat} г</div>
      <div>У: {totals.carbs} г</div>
    </div>
  );
};
