import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Navbar'
import TodaysWeather from './TodaysWeather'
import FiveDayWeather from './FiveDayWeather'

class App extends Component {

  state = {zip:''}

  render() {
    let getWeather = (zip) => {

      let tempState = [];

      fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            res.json()
            .then((data) => {
              tempState.push(data)
            })
            .then(() => {
              this.setState({zip:zip, state:tempState})
            })
          }
        )
      fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
          res.json()
          .then((data) => {
            tempState.push(data)
          })
          .then(() => {
            this.setState({zip:zip, state:tempState})
          })
        })


        console.log('tempState after fetches:', tempState)

    }

    return (
      <div  className="container">
        <Navbar props={getWeather} />
        <TodaysWeather props={this.state}/>
        <FiveDayWeather props={this.state}/>
        {console.log(this.state.state)}
      </div>
    );
  }
}

export default App;
