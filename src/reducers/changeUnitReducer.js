import { CHANGE_UNIT } from '../actions/unitChangeAction';


const changeUnitReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case CHANGE_UNIT:
			return action.unit;
		default:
			return state;
	}
};

export default changeUnitReducer;
