/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';
import {UserContextProvider} from './src/store/UserContext';
import React from 'react';

enableScreens();

const MainApp = () => {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
