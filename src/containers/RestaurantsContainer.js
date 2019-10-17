import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {restaurants: state.restaurants}
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurantText => dispatch({type: 'ADD_RESTAURANT', text: restaurantText}),
    deleteRestaurant: restaurantId => dispatch({type: 'DELETE_RESTAURANT', id: restaurantId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
