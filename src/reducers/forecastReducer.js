import { RECEIVE_FORECAST } from '../actions/forecastAction';


const forecastReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_FORECAST:
			let obj = {
				city: action.forecast.city,
				days: action.forecast.list,
				currentDay: action.forecast.list[0]
			}
			return obj;
		default:
			return state;
	}
};

export default forecastReducer;
