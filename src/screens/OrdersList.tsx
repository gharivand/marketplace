import React, {useContext, useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {ApplicationScreenProps} from '../Types/navigation';
import {OrdersContext} from '../data/context/OrdersContext';
import {CardOrder} from '../components';
import {Colors} from '../theme/colors';
import {IOrder} from '../Types/products';

const OrdersList: React.FC<ApplicationScreenProps> = () => {
  const intervalRef: any = useRef(0);
  const [ordersList, setOrdersList] = useState<IOrder[]>();
  const {orders} = useContext(OrdersContext);

  useEffect(() => {
    setOrdersList(orders);
    intervalRef.current = setInterval(() => {
      setOrdersList(orders);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [orders]);

  return (
    <View style={style.wrapper}>
      <FlatList
        data={ordersList}
        contentContainerStyle={style.flatList}
        keyExtractor={v => v.id.toString()}
        renderItem={({item}) => <CardOrder {...item} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flatList: {
    paddingVertical: 4,
  },
});

export default OrdersList;
