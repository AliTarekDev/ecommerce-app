export interface Product {
  id: number;
  price: number;
  quantity: number;
  discount: number;
  name: string;
  brand: string;
  type: string;
  status: string;
  featured: number;
  created_at: Date;
  updated_at: Date;
  image_url: string;
}
