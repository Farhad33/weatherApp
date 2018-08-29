import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestForecast } from '../../actions/forecastAction';
import { changeUnit } from '../../actions/unitChangeAction';
import Days from './Days';
import CurrentDay from './CurrentDay';
import { unitDefault } from '../../utils/unit'
import '../../images/arrow.svg';
import './forecast.sass';


class Forecast extends Component {
	constructor(props) {
		super(props)
		this.props.requestForecast(this.props.location);
		this.unit = "Celsius"
		this.props.changeUnit(this.unit);
	}

	city = () => (
		this.props.city ? this.props.city.name : ''
	);

	unitChangeHandle = () => {
		this.unit = this.unit === "Fahrenheit" ? "Celsius" : "Fahrenheit"
		this.props.changeUnit(this.unit);
	}

	backBotton = () => {
		this.props.history.push(`/`);
	}

	render() {
		return (
			<div className="parent-weather">
				<div className="header">
					<div className="city-arrow">
						<svg onClick={this.backBotton}>
							<use xlinkHref={ `#arrow` }></use>
						</svg>
						<div className="city">{this.city()}</div>
					</div>
					<label className="switch">
						<input className="switch-input" type="checkbox"
							onChange={this.unitChangeHandle}/>
						<span className="switch-label" data-on="°F" data-off="°C"></span>
						<span className="switch-handle"></span>
					</label>
				</div>
				<div>
					<CurrentDay />
				</div>
				<div>
					<Days />
				</div>
			</div>
		);
	}
}


const mapStateToProps = state => ({
	city: state.forecast.city,
	unit: state.unit,
	location: state.location
});

const mapDispatchToProps = dispatch => ({
	requestForecast: city => dispatch(requestForecast(city)),
	changeUnit: unit => dispatch(changeUnit(unit))
});

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
