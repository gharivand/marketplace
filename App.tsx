import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from './src/navigators/Application';
import {OrdersContextComponent} from './src/data/context/OrdersContext';

const App = () => (
  <OrdersContextComponent>
    <ApplicationNavigator />
  </OrdersContextComponent>
);
export default App;
