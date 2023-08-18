export interface ICategories {
  id: number;
  title: string;
  image: string;
}

export interface IProducts {
  id: number;
  title: string;
}

export type TColor = 'pending' | 'in-process' | 'delivery' | 'delivered';

export interface IOrder {
  id: string;
  title: string;
  location: string;
  status: TColor;
}
