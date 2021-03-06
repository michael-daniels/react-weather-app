import React from 'react'

const TodaysWeather = (props) => {
  if (!props.props.state) {
    return (
      <div className="todays-weather-div">
        Enter a Zip Code
      </div>
    )
  } else {
    return (
      <div className="todays-weather-div">
        <div className="">
        <h2>Current Weather in {props.props.state[0].name}</h2>
        </div>
        <div className="row">
          <div className="col-md-6 current-weather-window">
            <h1>{((props.props.state[0].main.temp * (9/5)) - 459.67).toFixed(0)}° and {props.props.state[0].weather[0].main}</h1><br />
            High: {((props.props.state[0].main.temp_max * (9/5)) - 459.67).toFixed(0)} Degrees<br />
            Low: {((props.props.state[0].main.temp_min * (9/5)) - 459.67).toFixed(0)} Degrees<br />
            Humidity: {props.props.state[0].main.humidity}%<br />
          </div>

          <div className="col-md-6 current-weather-window">
            <div className="main-map">
              <img className="main-map" alt="" src="https://www.theepochtimes.com/assets/uploads/2013/08/Phoenix-shooting.jpg" />
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default TodaysWeather;
