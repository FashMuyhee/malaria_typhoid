import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Welcome, Register, RunTest} from '../screens';
import {UserContext} from '../context/UserContext';
import {useTheme} from 'react-native-paper';
const Stack = createStackNavigator();

const StackNavigator = () => {
  const {user} = useContext(UserContext);
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="login"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: 'Raleway-Regular',
          fontSize: 15,
        },
      }}>
      {!user ? (
        <>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </>
      ) : (
        <>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen
            name="run_test"
            component={RunTest}
            options={{
              headerTitle: 'Run Analysis',
              headerShown: true,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
export default StackNavigator;
