import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;

		return (
      <div>
				<p>{temps}</p>
				<p>{pressures}</p>
        <p>{humidities}</p>
      </div>
		);
	}

	render(){
		return (
			<div>
				{this.props.weather.map(this.renderWeather)}
			</div>
		);
	}
}

// Remember, we're specifically using state.weather because we defined the weather key
// in our index.js file of the reducer dir
	// function mapStateToProps(state) {
	// 	return {weather: state.weather};
	// }
// This is the same as above, but with ES6, a bit cleaner
function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);