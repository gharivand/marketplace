import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Categories, ProductsList, Map} from '../screens';

const ProductsStack = createNativeStackNavigator();

const ProductsStackScreen = () => {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen name="CategoriesList" component={Categories} />
      <ProductsStack.Screen name="ProductsList" component={ProductsList} />
      <ProductsStack.Screen name="Map" component={Map} />
    </ProductsStack.Navigator>
  );
};

export default ProductsStackScreen;
