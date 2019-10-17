import React, { Component } from 'react';
import Restaurant from './Restaurant'

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
