// import React, {Component} from 'react'
// import { NavigationContainer } from "@react-navigation/native";
// import {MainStackNavigator} from './Navigation/stacknavigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainStackNavigator />
//     </NavigationContainer>
//   );
// }
// export default App

import React from 'react';  
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './pages/HomeScreen';  
import ProfileScreen from './pages/ProfileScreen';  
  import AppNavigator from './Navigation/stacknavigator';

export default (AppNavigator);  


