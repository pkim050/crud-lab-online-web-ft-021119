import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {
  filterReviews = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.filterReviews()} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', review: review}),
    deleteReview: review => dispatch({type: 'DELETE_REVIEW', review: review})
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
