import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert,Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from './action';


class Timer extends React.Component {
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
	
		return (
			<View style={styles.container}>
		
				<View style={styles.upper}>
			
                    <Text>Hiii</Text>
				</View>
			
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray'
	},
	upper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	lower: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	time: {
		color: '#ffffff',
		fontSize: 120,
		fontWeight: '100'
	}
});

function mapStateToProps(state) {
	const { isPlaying, elapsedTime, timerDuration } = state;
	return {
		isPlaying,
		elapsedTime,
		timerDuration
	};
}

function mapDispatchToProps(dispatch) {
	return {
		startTimer: bindActionCreators(actions.email, dispatch),
		restartTimer: bindActionCreators(actions.password, dispatch),
	
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Timer);