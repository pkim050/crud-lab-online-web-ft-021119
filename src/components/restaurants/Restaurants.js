import React, { Component } from 'react';

class Restaurants extends Component {
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => (
      <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
    ))
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
