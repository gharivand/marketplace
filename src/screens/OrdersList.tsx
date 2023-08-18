import React, {useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ApplicationScreenProps} from '../Types/navigation';
import {OrdersContext} from '../data/context/OrdersContext';
import {CardOrder} from '../components';
import {Colors} from '../theme/colors';

const OrdersList: React.FC<ApplicationScreenProps> = () => {
  const {orders} = useContext(OrdersContext);

  return (
    <View style={style.wrapper}>
      <FlatList
        data={orders}
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
});

export default OrdersList;
