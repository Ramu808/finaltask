import React from 'react';  
import { StyleSheet, View, Text, Button } from 'react-native';  
  
export default class ProfileScreen extends React.Component {  
    static navigationOptions = {  
        title: 'Profile',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
    render() {  

        const { navigation } = this.props;  
        const user_name = navigation.getParam('userName', 'NO-User');  
        const password = navigation.getParam('password', 'NO-User');  
    
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text style={{ marginTop: 16,fontSize: 20,}}>  
                  
                </Text>  
                <Text style={styles.textStyle}>Welcome to Profile Screen {JSON.stringify(user_name)}</Text>  
                <Text style={styles.textStyle}>Password: {JSON.stringify(password)}</Text>  
              
                <View style={styles.buttonStyle}>  
                <Button  
                    title="Go back"  
                    onPress={() => this.props.navigation.goBack()}  
                />  
                </View>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    textStyle: {  
        fontSize: 23,  
        textAlign: 'center',  
        color: '#f00',  
    },  
  
    buttonStyle:{  
        width: "93%",  
        marginTop: 50,  
        backgroundColor: "red",  
    }  
});  