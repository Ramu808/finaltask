

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
