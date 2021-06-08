
import React from 'react';  
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../pages/HomeScreen';  
import ProfileScreen from '../pages/ProfileScreen';  
import Apidata from '../pages/Apidata'  ;
import Data from '../pages/Data';

const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen  ,
        Apidata:Apidata,
        Data: Data
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
export default createAppContainer(AppNavigator);  
