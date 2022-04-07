import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Welcome, Register} from '../screens';
import {UserContext} from '../context/UserContext';
const Stack = createStackNavigator();

const StackNavigator = () => {
  const {user} = useContext(UserContext);

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="login"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {user ? (
        <>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </>
      ) : (
        <Stack.Screen name="welcome" component={Welcome} />
      )}
    </Stack.Navigator>
  );
};
export default StackNavigator;
