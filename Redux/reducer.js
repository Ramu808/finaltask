import { Email, Password, } from './actiontypes';

const TIMER_DURATION = 60;

// initial state
const initialState = {
	isPlaying: false,
	elapsedTime: 0,
	timerDuration: TIMER_DURATION
};

// Helper Functions

function Email1(state) {
	return {
		...state,
		isPlaying: true
	};
}

function Password1(state) {
	return {
		...state,
		isPlaying: false,
		elapsedTime: 0,
		timerDuration: TIMER_DURATION
	};
}



// Reducer Function

function reducer(state = initialState, action) {
	switch (action.type) {
		case Email:
			// handle the action here using helper functions
			return Email1(state);
		case Password:
			// handle the action here using helper functions
			return Password1(state);
	
		default:
			return state;
	}
}

export default reducer;