import React, {createContext, useEffect, useRef, useState} from 'react';

import {IOrder, IProducts} from '../../Types/products';
import {IOrdersContext, IPropsOrdersContext} from '../../Types/context';
import {generate_random_id, update_status} from '../../utils/helper';

export const OrdersContext = createContext<Partial<IOrdersContext>>({});

export const OrdersContextComponent = (props: IPropsOrdersContext) => {
  const intervalRef: any = useRef(0);
  const [choseProduct, setChoseProduct] = useState<IProducts | null>(null);
  const [orders, setOrders] = useState<IOrder[]>([]);

  const updateChoseProduct = (product: IProducts) => {
    setChoseProduct(product);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const changed_orders: IOrder[] = orders.map(v => {
        return {...v, status: update_status(v.status)};
      });
      setOrders(changed_orders);
    }, 30000);
    return () => clearInterval(intervalRef.current);
  }, [orders]);

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
