import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import ProductsStackScreen from './Products';
import OrdersStackScreen from './Orders';
import {ApplicationStackParamList} from '../Types/navigation';
import IconTabBar from '../components/IconTabBar';

const Tab = createBottomTabNavigator<ApplicationStackParamList>();

const simpleStyle = StyleSheet.create({
  safeArea: {flex: 1},
});

const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={simpleStyle.safeArea}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Categories"
            component={ProductsStackScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <IconTabBar name={'Categories'} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrdersStackScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <IconTabBar name={'Orders'} focused={focused} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
