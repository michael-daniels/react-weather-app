import React from 'react'

const TodaysWeather = (props) => {
  console.log(props.props.name)
  if (!props.props.name) {
    return (
      <div className="todays-weather-div">
        Enter a Zip Code
      </div>
    )
  } else {
    return (
      <div className="todays-weather-div">
        <div className="">
        <h2>Current Weather in {props.props.name}</h2>
        </div>
        <div className="row">
          <div className="col-md-6 current-weather-window">

            Weather: {props.props.weather[0].main}<br />
            Temp: {((props.props.main.temp * (9/5)) - 459.67).toFixed(0)} Degrees<br />
            High: {((props.props.main.temp_max * (9/5)) - 459.67).toFixed(0)} Degrees<br />
            Low: {((props.props.main.temp_min * (9/5)) - 459.67).toFixed(0)} Degrees<br />
            Humidity: {props.props.main.humidity}%<br />
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
