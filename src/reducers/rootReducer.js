import { combineReducers } from 'redux';
import forecastReducer from './forecastReducer';
import changeUnitReducer from './changeUnitReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
	forecast: forecastReducer,
	unit: changeUnitReducer,
	location: locationReducer
});

export default rootReducer;
