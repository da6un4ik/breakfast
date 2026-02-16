import { Plate } from "../components/Plate";
import { FoodCarousel } from "../components/FoodCarousel";
import { BottomActionBar } from "../components/BottomActionBar";
import { BottomNav } from "../components/BottomNav";
import { PlateDropHandler } from "../components/PlateDropHandler";

export const BreakfastScreen = () => {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", paddingBottom: "120px" }}>
      <Plate />
      <PlateDropHandler />
      <FoodCarousel />
      <BottomActionBar onClick={() => alert("Plate preview")} />
      <BottomNav />
    </div>
  );
};
