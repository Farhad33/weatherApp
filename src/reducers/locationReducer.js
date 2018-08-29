import { GEO_LOCATION } from '../actions/locationAction';


const locationReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case GEO_LOCATION:
			return action.location;
		default:
			return state;
	}
};

export default locationReducer;
