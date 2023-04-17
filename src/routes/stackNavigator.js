import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/login';
import { Home } from '../pages/home';
import {Register} from '../pages/register'

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register}options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home}options={{headerShown: false}} />
    </Stack.Navigator>
  );
}