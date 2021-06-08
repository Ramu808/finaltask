import React, {Component} from "react";

import { StyleSheet, View, Button, TextInput,Text,Image,Keyboard,Alert,ScrollView} from 'react-native';  
import ChildComponent from '../pages/Apidata';

export default class HomeScreen extends React.Component {
    render(){
        return(
            <View>
                <Text style={{fontSize:19,marginLeft:89}}> This is Data Screen</Text>


                <ChildComponent message="" />
            </View>
        );
    }
}