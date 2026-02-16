import { Plate } from "../components/Plate";
import { FoodCarousel } from "../components/FoodCarousel";
import { NutritionCounter } from "../components/NutritionCounter";
import { DrinkCup } from "../components/DrinkCup";
import { PlateDropHandler } from "../components/PlateDropHandler";
import { useBreakfastStore } from "../store/useBreakfastStore";

export const BreakfastScreen = () => {
  const resetPlate = useBreakfastStore((s) => s.resetPlate);

  const handleFinish = () => {
    alert("Завтрак зафиксирован!");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#f7f3ef",
        paddingTop: 40,
        position: "relative",
        boxSizing: "border-box"
      }}
    >
      <NutritionCounter />
      <DrinkCup />
      <Plate />
      <PlateDropHandler />
      <FoodCarousel />

      <div style={{ marginTop: 24, padding: "0 20px" }}>
        <button
          style={{
            width: "100%",
            padding: "14px 0",
            borderRadius: 14,
            background: "#ffcf8f",
            border: "none",
            fontSize: 17,
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            marginBottom: 10
          }}
          onClick={handleFinish}
        >
          Завтрак готов!
        </button>
        <button
          style={{
            width: "100%",
            padding: "10px 0",
            borderRadius: 12,
            background: "#ffffff",
            border: "none",
            fontSize: 14,
            boxShadow: "0 3px 8px rgba(0,0,0,0.06)"
          }}
          onClick={resetPlate}
        >
          Очистить тарелку
        </button>
      </div>
    </div>
  );
};
