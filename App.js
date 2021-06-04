//using axios to fetch data from API 


import React, {Component} from 'react'
import { Text, Alert, Button, View, StyleSheet,ScrollView } from 'react-native';

import axios from 'axios';
 class App extends React.Component {
 
  constructor(){
    super()
//     if ({item.completed})=="true") {
//       //  console.warn(item.completed)
// alert(temp)
// {item.completed}

    
//   } else {
// //  console.log(item.getapiData)
// <Text>
// {item.data}

//        </Text>
//   }

    this.state={

data:[]
    }
  }

  componentDidMount(){
    this.getapiData()
  }
    async getapiData(){
    {
      let resp = await axios.get('https://jsonplaceholder.typicode.com/todos' );
      console.warn(resp.data)
      this.setState({data:resp.data})
    }
  }

	render() {
		return (
      <ScrollView>
	<View>
    {
      this.state.data.length>0?
    
    <View>
      {
        this.state.data.map((item)=>
     
        <Text>
          
          if ({item.completed}=="true") {
              //  console.warn(item.completed)
       
       
 (item.completed)

       
          } else {
        //  console.log(item.getapiData)
      
       (item.completed)
          
            
          }
      
          {item.userId}::{item.id}:::{item.title}::{item.completed}
          </Text>
  
        )}
        <Text>
     
      </Text>
     </View>:<Text>data is loading ....</Text>
  
}

  </View>
  </ScrollView>
		);
	}
}

export default App;




// import React from 'react';  
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack'
// import HomeScreen from './pages/HomeScreen';  
// import ProfileScreen from './pages/ProfileScreen';  
//   import AppNavigator from './Navigation/stacknavigator';

// export default (AppNavigator);  



