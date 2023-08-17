import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import ProductsStackScreen from './Products';
import OrdersStackScreen from './Orders';
import {ApplicationStackParamList} from '../Types/navigation';

const Tab = createBottomTabNavigator<ApplicationStackParamList>();

const simpleStyle = StyleSheet.create({
  safeArea: {flex: 1},
});

const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={simpleStyle.safeArea}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Categories" component={ProductsStackScreen} />
          <Tab.Screen name="Orders" component={OrdersStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
