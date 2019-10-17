import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = event => {
    event.preventDefault()
    this.props.deleteReview(this.props.review)
  }

  render() {
    const { review } = this.props
    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onSubmit={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
