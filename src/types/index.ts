export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}


export type BSColors = 
  | "primary" 
  | "success" 
  | "warning" 
  | "danger" 
  | "info" 
  | "secondary" 
  | "dark" 
  | "light";


export interface StandardButtonProps {
  BGcolor: BSColors;
  icon: string;
  title: string;
  btnType: "textButton" | "iconButton";
  onClick: () => void;
  className?: string;
}


export interface ProductCardProps {
  product: Product;
}
