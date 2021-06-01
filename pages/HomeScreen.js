import React, { useState } from "react";
import validator from 'validator'
import { StyleSheet, View, Button, TextInput,Text,Image,Keyboard,Alert} from 'react-native';  
  import Icon from 'react-native-vector-icons/Ionicons';

import MyTextInput from '../component/customInput';

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
   
    const {username,password,title,onPress} = this.state;
    // Alert.alert('Credentials', `${username} + ${password}`);
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
    else if(onPress==this.myFun){
        // this.setState({Error: 'password  must be more than 7'});
        this.props.navigation.navigate('Profile', {  
            userName: this.state.username,
            password: this.state.password,    
        })  
      }
    
    else{
      alert('thank you, your form is submitted successfully');
      this.props.navigation.navigate('Profile', {  
        userName: this.state.username,
        password: this.state.password,    
    })  
  
       this.setState({Error: 'thank you, your form is submitted successfully'});
    }
  
  }
  
    render() {  
        const { navigate } = this.props.navigation;  
        return (  
       
            <View style={styles.container}>  
      
<Image source={require('../images/secondconsult.jpg')}  

style={{width:'90%', height: '40%',  marginLeft:2, resizeMode: 'contain'}} />  

            <Text style={styles.Login}>Login</Text>

            <View style={styles.Email}>
    <MyTextInput 
        value={this.state.username}  
        onChangeText={username => this.setState({ username })}  
    placeholder="     EnterEmailId"  
   
    ></MyTextInput>

</View>
<View style={styles.Password}>
<MyTextInput 
   value={this.state.password}  
   onChangeText={password => this.setState({ password })}  
  placeholder="      Password    "
  secureTextEntry={true} 
/>

  </View>
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
<Text></Text>
<Text style={{color:'red', textAlign:'center'}}>
      {this.state.Error}
      </Text>

        <View style={styles.buttonStyle}>  
            <Button  
             onPress= {this.myFun}
         
        title="validate & PassValue"  
    //     onPress={(myFun)=>{
    //         if(myFun=""){
    //             {this.state.Error}
    //         }else{
    //         this.props.navigation.navigate('Profile', {  
    //             userName: this.state.username,
    //             password: this.state.password,    
    //         })  
    //     }  }
    // }
        // color="#00B0FF"  
        />        
        <Text></Text>  
            {/* <Button  
        title="Submit"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('Profile', {  
            userName: this.state.username,
            password: this.state.password,    
        })  
    }  
        />   */}
  
        </View>  
        </View>  
    );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#fff',  
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
       backgroundColor:'lightgray',
        paddingHorizontal:38,width:293,
        //borderColor:'red',
        marginLeft:2,
        
        color:'black'
        },
        Icon2:{
            marginBottom:-12,
            marginTop:-100,
            marginLeft:-242,
            color:'green'
        },
        Password:{
            marginTop:2,
        marginBottom:2,
        borderRadius:10,
        backgroundColor:'lightgray',width:293,
        paddingHorizontal:38,
        //borderColor:'red',
        color:'black'
        },
        Icon3:{
            marginTop:-35,
            marginBottom:53,
            marginLeft:209
        },
        Icon1:{
            marginBottom:22,
            marginTop:-82,
            marginLeft:-239
        },
        forgetpwd:{
            marginBottom:-33,
            marginTop:93,
            color:'orange',
            marginLeft:81
        },
        Login:{
            fontSize:22,
            marginLeft:-222
        },
});  