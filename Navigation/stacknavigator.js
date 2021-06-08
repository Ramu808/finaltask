
import React from 'react';  
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../pages/HomeScreen';  
import ProfileScreen from '../pages/ProfileScreen';  
import Apidata from '../pages/Apidata'  ;


const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen  ,
        Apidata:Apidata
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
export default createAppContainer(AppNavigator);  
