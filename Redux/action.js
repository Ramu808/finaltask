import { Email, Password, } from './actiontypes';

function email() {
	return {
		type: Email
	};
}

function password() {
	return {
		type: Password
	};
}



const actionCreators = {
	email,
	password,

};

export { actionCreators };