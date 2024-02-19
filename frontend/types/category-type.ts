export interface ICategory {
  id: string;
  img?: string;
  parent: string;
  children: string[];
  productType: string;
  products: string[];
  status: string;
}