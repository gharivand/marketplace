import React, {createContext, useState} from 'react';
import {IOrder, IProducts} from '../../Types/products';
import {IOrdersContext, IPropsOrdersContext} from '../../Types/context';

export const OrdersContext = createContext<Partial<IOrdersContext>>({});

const generate_random_id = () => {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randLetter + Date.now();
};

export const OrdersContextComponent = (props: IPropsOrdersContext) => {
  const [choseProduct, setChoseProduct] = useState<IProducts | null>(null);
  const [orders, setOrders] = useState<IOrder[]>([]);

  const updateChoseProduct = (product: IProducts) => {
    setChoseProduct(product);
  };

  const addOrder = (location: string) => {
    if (choseProduct?.title) {
      const order: IOrder = {
        id: generate_random_id(),
        title: choseProduct.title,
        location,
        status: 'pending',
      };
      setOrders(state => [...state, order]);
    }
  };

  return (
    <OrdersContext.Provider value={{orders, addOrder, updateChoseProduct}}>
      {props.children}
    </OrdersContext.Provider>
  );
};
