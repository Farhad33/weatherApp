import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux';
import { geoLocation } from '../../actions/locationAction';
import './getCity.sass';
import '../../images/search.svg';

class GetCity extends Component {
	constructor() {
		super()
		this.state = {
			city: window.localStorage.getItem('city') || '',
			geoSupport: ''
		}
	}

	componentDidMount() {
		this.nameInput.focus();
		document.addEventListener('keyup', (e) => {
			if (e.keyCode === 13) {
				this.submitLocation()
			}
		});
	}

	componentWillUnmount() {
		document.removeEventListener('keyup', ()=>{});
	}

	handleCity = (e) => {
		this.setState({ city: e.target.value})
	}

	submitLocation = () => {
		let location = {city: this.state.city}
		this.props.geoLocation(location);
		this.props.history.push(`/forecast`);
	}

	getGeoLocation = () => {
		this.setState({geoSupport: "Please wait..."})
		if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((pos => {
			let { latitude, longitude } = pos.coords;
			let location = {geo: { latitude, longitude }}
			this.props.geoLocation(location);
			this.props.history.push(`/forecast`);
		}));
		} else {
			this.setState({geoSupport: "Geolocation is not supported by this browser."})
		}
	}

	render() {
		return (
			<div className="parent-location">
				<div className="input-city">
					<input
						type="input"
						name="city"
						placeholder="City"
						value={this.state.city}
						onChange={this.handleCity}
						ref={(input) => { this.nameInput = input; }}
					/>
					<svg
						onClick={this.submitLocation}>
						<use xlinkHref={ `#search` }></use>
					</svg>
				</div>
				<span className="or">or</span>
				<div className="geoLocation">use my
					<span onClick={this.getGeoLocation}> current position</span>
				</div>
				{this.state.geoSupport}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	geoLocation: location => dispatch(geoLocation(location))
});

export default connect(null, mapDispatchToProps)(GetCity);
