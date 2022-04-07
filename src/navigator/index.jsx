import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stack';

const RootNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default RootNavigator;
