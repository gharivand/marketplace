import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {ApplicationStackParamList} from '../Types/navigation';
import {OrdersList} from '../screens';

const OrdersStack = createNativeStackNavigator();

const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator screenOptions={{headerShown: false}}>
      <OrdersStack.Screen name="OrdersList" component={OrdersList} />
    </OrdersStack.Navigator>
  );
};

export default OrdersStackScreen;
