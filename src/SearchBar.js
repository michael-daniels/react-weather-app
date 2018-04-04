import React, { Component } from 'react';

class SearchBar extends Component {

  state = { zip:''}

  render() {

    let handleChange = (event) => {
      event.preventDefault()
      this.setState({zip:event.target.value})
    }

    let handleSubmit = (event) => {
      event.preventDefault()
      this.props.props.props(this.state.zip)
    }

    return (
          <div>
            <form className="form-group form-inline" onSubmit={handleSubmit} >
              <input className="form-control" type="text" placeholder="Enter Zip Code" onChange={handleChange}/>
              <button className="zipButton form-control btn btn-primary" type="submit">Get Weather</button>
            </form>
          </div>
    )
  }
}

export default SearchBar;
