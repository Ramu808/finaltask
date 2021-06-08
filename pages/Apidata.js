//using axios to fetch data from API 

import React, {Component} from 'react'
import { Text, Alert, Button, View, StyleSheet,ScrollView ,AsyncStorage,TouchableOpacity} from 'react-native';

import axios from 'axios';

function ChildComponent(props) {
  
  
    return(
      <View >


        <Text style={{fontSize:18,marginRight:12}}>{props.message}</Text>
        <Text style={{fontSize:18,marginRight:12}}>{props.value}</Text>
     
        
            </View>
    );
    }

class App extends React.Component{

    saveData(){  
        /*let user = "Michal";*/  
      

        let obj = {  
          name: 'Deva',  
          email: 'michal@gmail.com',  
          city: 'New York',  
          Api: 'https://jsonplaceholder.typicode.com/todos'
        }  
        /*AsyncStorage.setItem('user',user);*/  
        AsyncStorage.setItem('user',JSON.stringify(obj));  
    }  
    displayData = async ()=>{  
    
        let user = await AsyncStorage.getItem('user');  
        let parsed = JSON.parse(user);  
        alert(parsed.name);  
        alert(parsed.city);  
        alert(parsed.Api); 
      }  
      catch(e) {
        // clear error
        alert(error);
      }
    
      
  constructor(props){
    super(props)


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
    
    <View style={styles.textStyle}>

<ChildComponent message="" />


 <TouchableOpacity onPress ={this.saveData}>  
          <Text style={{fontSize:19,marginLeft:89,color:'green'}}>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={this.displayData}>  
          <Text    style={{fontSize:19,marginLeft:89}}>Click to display data</Text>  
        </TouchableOpacity> 


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
   
     <Text  style={{fontSize:19,marginLeft:9,color:'red'}}>UserId:{item.userId}::  Id:{item.id}:::Title:{item.title}</Text>
 
     
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

<Button   title="Data"  
 onPress={() => this.props.navigation.navigate('Data')}  
                />  

  </View>

  </ScrollView>
		);
	}
}

export default App;
//export default ChildComponent;

const styles = StyleSheet.create({  
    textStyle: {  
        fontSize: 33,  
        textAlign: 'center',  
        color: '#f00',  
    },  
    textStyle1: {  
        fontSize: 23,  marginTop:2,marginBottom:93,
        textAlign: 'center',  
        color: 'blue',  
    },  
  
    buttonStyle:{  
        width: "93%",  
        marginTop: 50,  
        //backgroundColor: "red",  
    }  
});  