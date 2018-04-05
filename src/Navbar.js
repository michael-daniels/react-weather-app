import React from 'react';
import SearchBar from './SearchBar'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="localhost:3000">WeatherBee</a>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="localhost:3000">Home<span className="sr-only">(current)</span></a>
              </li>

            </ul>
            <SearchBar props={props}/>
          </div>
        </nav>
    </div>
  )
}


export default Navbar
