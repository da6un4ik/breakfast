import { create } from "zustand";
import { FoodItem } from "../models/FoodItem";

interface BreakfastState {
  items: FoodItem[];
  plateItems: FoodItem[];
  drink: string | null;

  toggleAvailability: (id: string) => void;
  addToPlate: (item: FoodItem, x: number, y: number) => void;
  setDrink: (drink: string | null) => void;
  resetPlate: () => void;
}

export const useBreakfastStore = create<BreakfastState>((set) => ({
  items: [
    { id: "egg", name: "Яичница", emoji: "🍳", calories: 70, protein: 6, fat: 5, carbs: 0.5, available: true },
    { id: "bacon", name: "Бекон", emoji: "🥓", calories: 45, protein: 3, fat: 4, carbs: 0, available: true },
    { id: "avocado", name: "Авокадо", emoji: "🥑", calories: 160, protein: 2, fat: 15, carbs: 9, available: true },
    { id: "toast", name: "Тост", emoji: "🍞", calories: 80, protein: 3, fat: 1, carbs: 15, available: true }
  ],

  plateItems: [],
  drink: null,

  toggleAvailability: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, available: !i.available } : i
      )
    })),

  addToPlate: (item, x, y) =>
    set((state) => ({
      plateItems: [...state.plateItems, { ...item, x, y }]
    })),

  setDrink: (drink) => set({ drink }),

  resetPlate: () => set({ plateItems: [], drink: null })
}));
