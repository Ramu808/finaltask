import React from 'react';  

import { StyleSheet, View, Button, TextInput,Text,Image} from 'react-native';  
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
  
    render() {  
        const { navigate } = this.props.navigation;  
        return (  
       
            <View style={styles.container}>  
<Image source={require('../images/logo.png')}  

style={{width:'50%', height: '40%',  marginLeft:2, resizeMode: 'contain'}} />  




            <Text style={styles.Login}>Login</Text>
    <TextInput 
        value={this.state.username}  
        onChangeText={username => this.setState({ username })}  
    placeholder="Enter Email Id"  style={styles.Email}></TextInput>
    <TextInput 
     value={this.state.password}  
     onChangeText={password => this.setState({ password })}  
    placeholder="Password"  style={styles.Password}></TextInput>
  
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
        backgroundColor: "red",  
    }  ,
    Email:{
        marginTop:2,
        marginBottom:2,
        borderRadius:10,
       backgroundColor:'gray',
        paddingHorizontal:78,
        borderColor:'red',
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
        backgroundColor:'gray',
        paddingHorizontal:92,
        borderColor:'red',
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