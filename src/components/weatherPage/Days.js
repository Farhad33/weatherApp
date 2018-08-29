import React, { Component } from 'react';
import { connect } from 'react-redux';
import './days.sass'
import { weeks } from '../../utils/date'
import icon from '../../utils/iconMatch';
import { conversion } from '../../utils/unit';
const files = require.context('../../images/icons', false, /.*\.svg$/);
files.keys().forEach(files);


class Days extends Component {

	renderDay = (day) => {
		let time = new Date(day.dt * 1000);
		let week = time.getDay();
		return (
			<div className="day-parent">
				<div className="day-of-week">{weeks[week]}</div>
				<svg className="day-icon">
					<use xlinkHref={ `#${icon[day.weather[0].icon]}` }></use>
				</svg>
				<div className="day-temp">
					{conversion(this.props.unit, day.temp.day)}
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="seven-day">
				{this.props.days.map(day => (
					<React.Fragment key={day.dt.toString()}>
						{this.renderDay(day)}
					</React.Fragment>
				))}
			</div>
		);
	}
}


const mapStateToProps = state => ({
	days: state.forecast.days || [],
	unit: state.unit
});

export default connect(mapStateToProps, null)(Days);
