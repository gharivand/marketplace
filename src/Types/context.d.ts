import React from 'react';

import {IOrder, IProducts} from './products';

export interface IOrdersContext {
  orders: IOrder[];
  addOrder: (location: string) => void;
  updateChoseProduct: (data: IProducts) => void;
}

export interface IPropsOrdersContext {
  children: React.ReactNode;
}
