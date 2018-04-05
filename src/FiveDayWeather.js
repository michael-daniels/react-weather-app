import React from 'react'
import SingleFiveDay from './SingleFiveDay'

const FiveDayWeather = (props) => {

  let filteredProps = [];

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
        <h2>5 Day Forecast for {props.props.state[0].name}</h2>
        </div>
        <div className="row">
          <div className="col-md-2 current-weather-window">
            <SingleFiveDay props={props}/>
          </div>
          <div className="col-md-2 current-weather-window">
            <SingleFiveDay props={props}/>
          </div>
          <div className="col-md-2 current-weather-window">
            <SingleFiveDay props={props}/>
          </div>
          <div className="col-md-2 current-weather-window">
            <SingleFiveDay props={props}/>
          </div>
          <div className="col-md-2 current-weather-window">
            <SingleFiveDay props={props}/>
          </div>
        </div>

      </div>
    )
  }
}

export default FiveDayWeather;
