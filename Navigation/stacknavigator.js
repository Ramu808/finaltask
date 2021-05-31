// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../pages/Home'
// import Welcome from '../pages/Welcome';
// const Stack = createStackNavigator();

// const MainStackNavigator = () => {
//   return (
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home}   options={{ title: '',headerShown:false }}  />
//         <Stack.Screen name="welcome" component={Welcome} />

//       </Stack.Navigator>  
   
  
//   );
// }

// export { MainStackNavigator };

import React from 'react';  
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../pages/HomeScreen';  
import ProfileScreen from '../pages/ProfileScreen';  
  
const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen  
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
export default createAppContainer(AppNavigator);  
