import { useBreakfastStore } from "../store/useBreakfastStore";

export const DrinkCup = () => {
  const drink = useBreakfastStore((s) => s.drink);
  const setDrink = useBreakfastStore((s) => s.setDrink);

  const colors: Record<string, string> = {
    coffee: "#6f4e37",
    tea: "#c8a951",
    juice: "#f7a531"
  };

  const handleClick = () => {
    const choice = window.prompt("Выберите напиток: coffee / tea / juice");
    if (!choice) return;
    if (!["coffee", "tea", "juice"].includes(choice)) return;
    setDrink(choice);
  };

  return (
    <div style={{ position: "absolute", right: 32, top: 120 }}>
      <div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          borderRadius: 24,
          background: "#ffffff",
          boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
          position: "relative",
          cursor: "pointer",
          overflow: "hidden"
        }}
      >
        {drink && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "60%",
              background: colors[drink],
              borderRadius: "0 0 24px 24px"
            }}
          />
        )}
      </div>
    </div>
  );
};
