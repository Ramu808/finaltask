import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert,Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from './action';


class Timer extends React.Component {

	render() {
	
		return (
			<View style={styles.container}>
				<StatusBar barStyle={'light-content'} />
				<View style={styles.upper}>
					<Text style={styles.time}>
				
					</Text>
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