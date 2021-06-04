import { Email, Password, } from './actiontypes';



// initial state
const initialState = {
	Email,Password
	
};

// Helper Functions


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