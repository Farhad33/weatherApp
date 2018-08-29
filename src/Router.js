import React from 'react'
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GetCity from './components/locationPage/GetCity';
import Forecast from './components/weatherPage/Forecast';


const Router = ({store}) => (
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Route exact path="/" component={GetCity} />
				<Route exact path="/forecast" component={Forecast} />
			</Switch>
		</HashRouter>
	</Provider>
)


export default Router;
