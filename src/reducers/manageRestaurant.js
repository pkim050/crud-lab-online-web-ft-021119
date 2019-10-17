import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    let newState = {}
    let updatedRestaurants
    switch(action.type) {
       case "ADD_RESTAURANT":
          const newRestaurant = {text: action.text, id: cuid(), reviews: []}
          newState = {...state, restaurants: state.restaurants.concat(newRestaurant)}
          return newState

       case "DELETE_RESTAURANT":
          updatedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
          return {...state, restaurants: updatedRestaurants}

       case "ADD_REVIEW":
          let newReviews = state.reviews.concat(action.review)
          updatedRestaurants = state.restaurants.map(restaurant => {
             if (restaurant.id === action.review.restaurantId) {
                restaurant.reviews.push(action.review)
             }
             return restaurant
          })
          newState = {...state, restaurants: updatedRestaurants, reviews: newReviews}
          return newState

       case "DELETE_REVIEW":
          let updatedReviews = state.reviews.filter(review => review !== action.review)
          return {...state, reviews: updatedReviews}

       default:
          return state
    }
 }
