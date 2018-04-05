import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Navbar'
import TodaysWeather from './TodaysWeather'
import FiveDayWeather from './FiveDayWeather'

class App extends Component {

  state = {zip:''}

  render() {
    console.log(process.env.REACT_APP_API_KEY)
    let getWeather = (zip) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            res.json()
            .then((data) => {
              this.setState(data)
              console.log('app state:', this.state)
            })
          }
        )
    }

    return (
      <div  className="container">
        <Navbar props={getWeather} />
        <TodaysWeather props={this.state}/>
        <FiveDayWeather props={this.state}/>
      </div>
    );
  }
}

export default App;
