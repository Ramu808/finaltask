//using axios to fetch data from API 

import React, {Component} from 'react'
import { Text, Alert, Button, View, StyleSheet,ScrollView ,AsyncStorage,TouchableOpacity} from 'react-native';

import axios from 'axios';
 class App extends React.Component {
    constructor(){
        super()
    
    
        this.state={
    
    data:[]
        }
      }


    // saveData(){  
    //     /*let user = "Michal";*/  
    //     componentDidMount(){
    //         this.getapiData()
    //       }
    //         async getapiData(){
            

    //     let resp = await axios.get('https://jsonplaceholder.typicode.com/todos' );
    //     console.warn(resp.data)
    //      this.setState({data:resp.data})
    //         }

    //     let obj = {  
    //       name: 'Deva',  
    //       email: 'michal@gmail.com',  
    //       city: 'New York',  
    //       Api: 'https://jsonplaceholder.typicode.com/todos'
    //     }  
    //     /*AsyncStorage.setItem('user',user);*/  
    //     AsyncStorage.setItem('user',JSON.stringify(obj));  
    // }  
    // displayData = async ()=>{  
    
    //     let user = await AsyncStorage.getItem('user');  
    //     let parsed = JSON.parse(user);  
    //     alert(parsed.name);  
    //     alert(parsed.city);  
    //     alert(parsed.Api); 
    //   }  
    //   catch(e) {
    //     // clear error
    //     alert(error);
    //   }
    
      
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

	render() {
		return (
      <ScrollView>
	<View>
    {
      this.state.data.length>0?
    
    <View>
      {
        this.state.data.map((item)=>

    
        // if (item.userId==1) {
     
        //     console.log(item.id),

        //    console.log(item.userId),
        //    console.log(item.title),
        //   console.log(item.completed)
      
        // }
        // else {
      
        //   <Text>{item.id}:::{item.title}</Text>
        // }
  
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
    
        
        )}
  
     
       
     </View>:<Text>data is loading ....</Text>
  
}

  </View>

  <TouchableOpacity onPress ={this.saveData}>  
          <Text>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity> 

  </ScrollView>
		);
	}
}

export default App;