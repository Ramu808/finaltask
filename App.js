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



// skip this line if using Create React Native App  
// AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);  



// skip this line if using Create React Native App  
//AppRegistry.registerComponent('MyReactNativeApp', () => ParentsClass);  

// import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './Redux/reducer';
// import Timer from './Redux/Timer';

// const store = createStore(reducer);

// export default class App extends React.Component {
// 	render() {
// 		return (
// 			<Provider store={store}>
// 				<Timer />
// 			</Provider>
// 		);
// 	}
// }



// import React, { Component } from 'react';
// import { Text, Alert, Button, View, StyleSheet } from 'react-native';
// import { TextInput } from 'react-native-paper';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   go = () => {
//            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             if (reg.test(this.state.email) === true){
//                alert('valid');
//            }
//            else{
//                alert();
//            }
 
//   }
  
//   onLogin() {
//     const { username, password } = this.state;

//     Alert.alert('Credentials', `${username} + ${password}`);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//       <Text style={styles.inputext}>Sample Login Form</Text>
//         <TextInput
//           value={this.state.username}
//           onChangeText={(username) => this.setState({ username })}
//            label='Email'
//           style={styles.input}
//         />
//         <TextInput
//           value={this.state.password}
//           onChangeText={(password) => this.setState({ password })}
//           label='Password'
//           secureTextEntry={true}
//           style={styles.input}
//         />
        
//         <Button
//           title={'Login'}
//           style={styles.input}
//           onPress={this.onLogin.bind(this)}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#00FFFF',
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 10,
//   },
//   inputext: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     textAlign:'center',
//     fontWeight:'bold',
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 10,
//   },
// });

