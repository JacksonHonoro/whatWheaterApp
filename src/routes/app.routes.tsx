import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';

const RootStack = createStackNavigator();

const RootStackRoutes: React.FC = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="home" component={Home} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootStackRoutes;
