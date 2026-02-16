import { useState } from "react";
import { BreakfastScreen } from "./screens/BreakfastScreen";
import { ChefScreen } from "./screens/ChefScreen";

type Mode = "guest" | "chef";

export const App = () => {
  const [mode, setMode] = useState<Mode>("guest");

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 16px",
          background: "#f0e3d8",
          borderBottom: "1px solid rgba(0,0,0,0.05)"
        }}
      >
        <div style={{ fontWeight: 600 }}>Breakfast Builder</div>
        <div
          style={{
            display: "flex",
            gap: 8,
            background: "#ffffff",
            padding: 4,
            borderRadius: 999,
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            fontSize: 13
          }}
        >
          <button
            onClick={() => setMode("guest")}
            style={{
              border: "none",
              borderRadius: 999,
              padding: "6px 10px",
              background: mode === "guest" ? "#ffcf8f" : "transparent",
              cursor: "pointer"
            }}
          >
            ГОСТЬ
          </button>
          <button
            onClick={() => setMode("chef")}
            style={{
              border: "none",
              borderRadius: 999,
              padding: "6px 10px",
              background: mode === "chef" ? "#ffcf8f" : "transparent",
              cursor: "pointer"
            }}
          >
            ШЕФ
          </button>
        </div>
      </header>

      {mode === "guest" ? <BreakfastScreen /> : <ChefScreen />}
    </div>
  );
};
