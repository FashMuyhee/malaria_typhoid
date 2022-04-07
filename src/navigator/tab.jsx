import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard, RunTest} from '../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {withTheme, Colors} from 'react-native-paper';

const Tab = createBottomTabNavigator();

const TabNavigator = ({theme}) => {
  const {colors} = theme;
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.white,
        inactiveTintColor: Colors.grey500,
        style: {
          backgroundColor: colors.primary,
          height: '7%',
          elevation: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Dashboard}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="run_test"
        component={RunTest}
        options={{
          tabBarIcon: ({color}) => (
            <FeatherIcon name="activity" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="history"
        component={RunTest}
        options={{
          tabBarIcon: ({color}) => (
            <FeatherIcon name="book-open" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default withTheme(TabNavigator);
