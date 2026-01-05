import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartList from '../screens/Cart/CartList';

const Stack = createStackNavigator();

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="CartList"
      component={CartList}
      options={{ header: () => null }}
    />
  </Stack.Navigator>
);

export default CartStack;
