export interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  availability: boolean;
  category: string;
}

export const products: ProductData[] = [
  {
    id: 1,
    name: "Organic Oatmeal",
    description: "Healthy and nutritious oatmeal made from organic oats.",
    price: 3.99,
    imageUrl: "https://example.com/images/oatmeal.jpg",
    availability: true,
    category: "Breakfast"
  },
  {
    id: 2,
    name: "Almond Butter Toast",
    description: "Creamy almond butter spread on whole grain toast.",
    price: 4.50,
    imageUrl: "https://example.com/images/almond_butter_toast.jpg",
    availability: true,
    category: "Breakfast"
  },
  {
    id: 3,
    name: "Greek Yogurt Parfait",
    description: "Layers of Greek yogurt, honey, and fresh berries.",
    price: 5.25,
    imageUrl: "https://example.com/images/yogurt_parfait.jpg",
    availability: true,
    category: "Dairy"
  }
];
