//TODO: Add more categories
export type Category = "home" | "food" | "office" | "transport";

export interface CategoryColors {
  textColor: {
    light: string;
    dark: string;
  };
  bgColor: {
    light: string;
    dark: string;
  };
}
