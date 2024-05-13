import { Category } from "./categories";
export interface Transaction {
  date: string;
  description: string;
  category: Category;
  price: number;
  categoryEmoji?: string;
}
