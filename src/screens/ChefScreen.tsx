import { useBreakfastStore } from "../store/useBreakfastStore";

export const ChefScreen = () => {
  const items = useBreakfastStore((s) => s.items);
  const toggleAvailability = useBreakfastStore((s) => s.toggleAvailability);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f7f3ef",
        padding: "40px 20px",
        boxSizing: "border-box"
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: 16 }}>Режим ШЕФ</h2>
      <p style={{ marginTop: 0, marginBottom: 20, fontSize: 14 }}>
        Отметь, какие продукты есть в холодильнике.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}
      >
        {items.map((item) => (
          <label
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 12px",
              borderRadius: 12,
              background: "#ffffff",
              boxShadow: "0 3px 8px rgba(0,0,0,0.06)",
              fontSize: 15
            }}
          >
            <span>
              <span style={{ fontSize: 22, marginRight: 8 }}>{item.emoji}</span>
              {item.name}
            </span>
            <input
              type="checkbox"
              checked={item.available}
              onChange={() => toggleAvailability(item.id)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
