import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading } from './Loading'
import { dateFormat } from '../../utils/date'
import icon from '../../utils/iconMatch';
import { conversion } from '../../utils/unit';
import './currentDay.sass';
const files = require.context('../../images/icons', false, /.*\.svg$/);
files.keys().forEach(files);


class CurrentDay extends Component {

	renderDate = () => {
		return (
			<div className="date-format">
				{dateFormat(this.props)}
			</div>
		)
	}

	currentDayStatus = () => {
		let status = this.props.current ? this.props.current.weather[0].description : '';
		return (
			<div className="current-status">{status}</div>
		);
	};

	currentDayTemp = () => (
		this.props.current ?
			<div className="current-day-temp">
				<div className="one-temp">
					{conversion(this.props.unit, this.props.current.temp.day)}
				</div>
				<svg className="current-icon"
					onClick={this.submitLocation}>
					<use xlinkHref={ `#${icon[this.props.current.weather[0].icon]}` }></use>
				</svg>
				<ul>
					<li>
						<span>Morning</span>
						<span>
							{conversion(this.props.unit, this.props.current.temp.morn)}
						</span>
					</li>
					<li>
						<span>Day</span>
						<span>
							{conversion(this.props.unit, this.props.current.temp.day)}
						</span>
					</li>
					<li>
						<span>Evening</span>
						<span>
							{conversion(this.props.unit, this.props.current.temp.eve)}
						</span>
					</li>
					<li>
						<span>Night</span>
						<span>
							{conversion(this.props.unit, this.props.current.temp.night)}
						</span>
					</li>
				</ul>
			</div>
		:
			<Loading lines={10} />
	)

	render() {
		return (
			<div className="current-day-parent">
				{this.renderDate()}
				{this.currentDayStatus()}
				{this.currentDayTemp()}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	current: state.forecast.currentDay,
	unit: state.unit
});

export default connect(mapStateToProps, null)(CurrentDay);
