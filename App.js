// import React, {Component} from 'react';  
// import {Platform, StyleSheet, Text,  
//   View,TouchableOpacity, AsyncStorage,  
// } from 'react-native';  
  
// export default class App extends Component<Props> {  
//   saveData(){  
//     /*let user = "Michal";*/  
//     let obj = {  
//       name: 'Deva',  
//       email: 'michal@gmail.com',  
//       city: 'New York',  
//     }  
//     /*AsyncStorage.setItem('user',user);*/  
//     AsyncStorage.setItem('user',JSON.stringify(obj));  
//   }  
//   displayData = async ()=>{  
//     try{  
//       let user = await AsyncStorage.getItem('user');  
//       let parsed = JSON.parse(user);  
//       alert(parsed.name);  
//       alert(parsed.city);  
//     }  
//     catch(error){  
//       alert(error)  
//     }  
//     deleteData = async ()=>{  
//       try{  
//         let user = await AsyncStorage.getItem('user');  
//         let parsed = JSON.parse(user);  
//         alert(parsed.name);  
//       }  
//       catch(error){  
//         alert(error)  
//       } 
//       clearAll = async () => {
//         try {
//           await AsyncStorage.clear()
//         } catch(e) {
//           // clear error
//           alert(error)
//         }
      
//         console.log('Done.')
//       }
//     }

//   } 
//   render() {  
//     return (  
//       <View style={styles.container}>  
//         <TouchableOpacity onPress ={this.saveData}>  
//           <Text>Click to save data</Text>  
//         </TouchableOpacity>    
//         <TouchableOpacity onPress ={this.displayData}>  
//           <Text>Click to display data</Text>  
//         </TouchableOpacity> 
//         <TouchableOpacity onPress ={this.deleteData}>  
//           <Text>Click to delete data</Text>  
//         </TouchableOpacity>   
//         <TouchableOpacity onPress ={this.clearAll}>  
//           <Text>Click to clear data</Text>  
//         </TouchableOpacity> 
//         <TouchableOpacity onPress ={this.clearAll}>  
//           <Text>Click to merge data</Text>  
//         </TouchableOpacity> 
         
//       </View>  
//     );  
//   }  
// }  
  
// const styles = StyleSheet.create({  
//   container: {  
//     flex: 1,  
//     justifyContent: 'center',  
//     alignItems: 'center',  
//     backgroundColor: '#F5FCFF',  
//   },  
// });  




// //using axios to fetch data from API 

// import React, {Component} from 'react'
// import { Text, Alert, Button, View, StyleSheet,ScrollView } from 'react-native';

// import axios from 'axios';
//  class App extends React.Component {
 
//   constructor(){
//     super()


//     this.state={

// data:[]
//     }
//   }

//   componentDidMount(){
//     this.getapiData()
//   }
//     async getapiData(){
//     {
//       let resp = await axios.get('https://jsonplaceholder.typicode.com/todos' );
//      console.warn(resp.data)
//       this.setState({data:resp.data})
//     }
//   }

// 	render() {
// 		return (
//       <ScrollView>
// 	<View>
//     {
//       this.state.data.length>0?
    
//     <View>
//       {
//         this.state.data.map((item)=>

    
//         // if (item.userId==1) {
     
//         //     console.log(item.id),

//         //    console.log(item.userId),
//         //    console.log(item.title),
//         //   console.log(item.completed)
      
//         // }
//         // else {
      
//         //   <Text>{item.id}:::{item.title}</Text>
//         // }
  
//      <Text>{item.id}:::{item.title}</Text>
     
          
//         //   if (item.userId==10) {
       
//         //     console.log(item.id),

//         //     console.log(item.userId),

//         //     console.log(item.completed),
//         //                 console.log(item.title),
//         //       //this.setState(item.completed)
//         //      //alert(item.userId=1),
//         //   }
//         //   else {
//         // console.log(item.data)
//         //   }
    
        
//         )}
  
     
       
//      </View>:<Text>data is loading ....</Text>
  
// }

//   </View>
//   </ScrollView>
// 		);
// 	}
// }

// export default App;




import React from 'react';  
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './pages/HomeScreen';  
import ProfileScreen from './pages/ProfileScreen';  
  import AppNavigator from './Navigation/stacknavigator';

export default (AppNavigator);  



