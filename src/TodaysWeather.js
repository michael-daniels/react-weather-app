import React from 'react'

const TodaysWeather = (props) => {
  console.log(props.props.name)
  if (!props.props.name) {
    return (
      <div className="todays-weather-div">
        <div className="">Current Weather</div>
        Location: <br />
        Weather:

      </div>
    )
  } else {
    return (
      <div className="todays-weather-div">
        <div className="">Current Weather</div>
        Location: {props.props.name}<br />
        Weather: {props.props.weather[0].main}

      </div>
    )
  }

}

export default TodaysWeather;
