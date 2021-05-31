import React, { useState } from "react";
import validator from 'validator'
import { StyleSheet, View, Button, TextInput,Text,Image,Keyboard,Alert} from 'react-native';  
  import Icon from 'react-native-vector-icons/Ionicons';




  
export default class HomeScreen extends React.Component {  
  
    constructor(props) {  
      
        super(props);  
        this.state = {  
            username: '',  
            password: '',
       
           
        };  
    }  
    static navigationOptions = {
        headerLeft: () => 'null',    headerShown: false,
title : ""
}

myFun=() =>{
    const {username,password,} = this.state;
    var temp=username.search('@');
    //alert(temp);
    if(username==""){
      //alert('please fill the first name');
      this.setState({Error: 'please fill the user name'});
    }
    else if(temp==-1){
        //alert('please fill the first name');
        this.setState({Error: 'please fill the @ symbol'});
      }
    else if(password==""){
    //  alert('please fill the last name');
        this.setState({Error: 'please fill the Password name'});
    }
  
    else if(password.length <7){
      this.setState({Error: 'password  must be more than 7'});
    }
  
    else{
      //alert('thank you, your form is submitted successfully');
  
      this.setState({Error: 'thank you, your form is submitted successfully'});
    }
  
  
  }
  
    render() {  
        const { navigate } = this.props.navigation;  
        return (  
       
            <View style={styles.container}>  
              <Text style={{color:'red', textAlign:'center'}}>
      {this.state.Error}
      </Text>
<Image source={require('../images/logo.png')}  

style={{width:'50%', height: '40%',  marginLeft:2, resizeMode: 'contain'}} />  




            <Text style={styles.Login}>Login</Text>
            
    <TextInput 
        value={this.state.username}  
        onChangeText={username => this.setState({ username })}  
    placeholder="Enter Email Id"  style={styles.Email}
   
    ></TextInput>
    
    <TextInput 
     value={this.state.password}  
     onChangeText={password => this.setState({ password })}  
    placeholder="Password"
    secureTextEntry={true} 
    style={styles.Password}
  
    ></TextInput>
  
    <View style={styles.Icon3}>
                                    <Icon name="eye-outline" size={18} />
                                </View>
                                <View style={styles.Icon1}>
                                    <Icon name="lock-closed-outline" size={25} />
                                </View>
                                <View style={styles.Icon2}>
                                    <Icon name="mail-outline" size={25} />
                                </View>
<Text></Text>




<Text></Text>
<Text></Text>
<Text></Text>






      
     
        <View style={styles.buttonStyle}>  
            <Button  
               onPress={this.myFun}
        title="validate"  
        // color="#00B0FF"  
    
    
        />        
        <Text></Text>  
            <Button  
        title="Submit"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('Profile', {  
            userName: this.state.username,
            password: this.state.password, 

          
        })  
    }  
        />  
  
        </View>  
        </View>  
    );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
       // backgroundColor: '#fff',  
        alignItems: 'center',  
        padding: 16,  
    },  
    textInput: {  
        height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  
    },  
    buttonStyle:{  
        width: "73%",  
        marginTop: 50,  
       // backgroundColor: "red",  
    }  ,
    Email:{
        marginTop:2,
        marginBottom:2,
        borderRadius:10,
       backgroundColor:'white',
        paddingHorizontal:78,
        //borderColor:'red',
        marginLeft:2,
        
        color:'black'
        },
        Icon2:{
            marginBottom:-12,
            marginTop:-100,
            marginLeft:-162,
            color:'green'
        },
        Password:{
            marginTop:2,
        marginBottom:2,
        borderRadius:10,
        backgroundColor:'white',
        paddingHorizontal:92,
        //borderColor:'red',
        color:'black'
        },
        Icon3:{
            marginTop:-35,
            marginBottom:53,
            marginLeft:179
        },
        Icon1:{
            marginBottom:22,
            marginTop:-82,
            marginLeft:-159
        },
        forgetpwd:{
            marginBottom:-33,
            marginTop:93,
            color:'orange',
            marginLeft:81
        },
        Login:{
            fontSize:22,
            marginLeft:-162
        },
});  