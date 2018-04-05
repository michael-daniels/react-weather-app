import React from 'react'

const SingleFiveDay = (props) => {

  console.log('SingleFiveDay:', props.props.props.state[0])

  let filteredProps = [];

  if (props.props.state) {
    return (
      <div className="todays-weather-div">
        Enter a Zip Code
      </div>
    )
  } else {
    return (
      <div className="todays-weather-div">
        <div className="row">
          <div className="col-md-2 current-weather-window">
            <h1>{((props.props.props.state[0].main.temp * (9/5)) - 459.67).toFixed(0)}°</h1><br />
            High: {((props.props.props.state[0].main.temp_max * (9/5)) - 459.67).toFixed(0)} Degrees<br />
            Low: {((props.props.props.state[0].main.temp_min * (9/5)) - 459.67).toFixed(0)} Degrees<br />
            Humidity: {props.props.props.state[0].main.humidity}%<br />
          </div>
        </div>

      </div>
    )
  }
}

export default SingleFiveDay;
