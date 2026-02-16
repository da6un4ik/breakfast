import { useState } from "react";
import { BreakfastScreen } from "./screens/BreakfastScreen";
import { ChefScreen } from "./screens/ChefScreen";

type Mode = "guest" | "chef";

export const App = () => {
  const [mode, setMode] = useState<Mode>("guest");

  return (
    <div style={{ 
      fontFamily: "system-ui, -apple-system, sans-serif",
      backgroundColor: "#f4f4f7", // Более современный светлый фон
      minHeight: "100vh",
      color: "#222"
    }}>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          padding: "16px",
          background: "rgba(255, 255, 255, 0.8)", // Стеклянный эффект
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: "1px solid rgba(0,0,0,0.05)"
        }}
      >
        <div style={{ 
          fontSize: "18px", 
          fontWeight: 700, 
          letterSpacing: "-0.5px" 
        }}>
          Breakfast Builder
        </div>

        {/* Современный Segmented Control */}
        <div
          style={{
            display: "flex",
            position: "relative",
            background: "#efeff3",
            padding: "2px",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "280px"
          }}
        >
          <button
            onClick={() => setMode("guest")}
            style={{
              flex: 1,
              border: "none",
              borderRadius: "8px",
              padding: "8px 0",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "0.2s all ease",
              background: mode === "guest" ? "#ffffff" : "transparent",
              boxShadow: mode === "guest" ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
              color: mode === "guest" ? "#000" : "#8e8e93"
            }}
          >
            ГОСТЬ
          </button>
          <button
            onClick={() => setMode("chef")}
            style={{
              flex: 1,
              border: "none",
              borderRadius: "8px",
              padding: "8px 0",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "0.2s all ease",
              background: mode === "chef" ? "#ffffff" : "transparent",
              boxShadow: mode === "chef" ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
              color: mode === "chef" ? "#000" : "#8e8e93"
            }}
          >
            ШЕФ
          </button>
        </div>
      </header>

      <main style={{ padding: "16px" }}>
        {mode === "guest" ? <BreakfastScreen /> : <ChefScreen />}
      </main>
    </div>
  );
};
