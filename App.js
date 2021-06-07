//using axios to fetch data from API 


import React, {Component} from 'react'
import { Text, Alert, Button, View, StyleSheet,ScrollView } from 'react-native';

import axios from 'axios';
 class App extends React.Component {
 
  constructor(){
    super()


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
    // console.warn(resp.data)
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

{       
        if (item.userId==1) {
     
            console.log(item.id),

           console.log(item.userId),
           console.log(item.title),
          console.log(item.completed)
      
        }
        else {
      
          <Text>{item.id}:::{item.title}</Text>
        }
  
     <Text>{item.id}:::{item.title}</Text>
     
          
        //   if (item.userId==10) {
       
        //     console.log(item.id),

        //     console.log(item.userId),

        //     console.log(item.completed),
        //                 console.log(item.title),
        //       //this.setState(item.completed)
        //      //alert(item.userId=1),
        //   }
        //   else {
        // console.log(item.data)
        //   }
    
        
      })
      
    }  
       
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



