// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeListIndex: 0}

  onRightClick = () => {
    const {activeListIndex} = this.state
    const {reviewsList} = this.props
    if (activeListIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeListIndex: prevState.activeListIndex + 1,
      }))
    }
  }

  onLeftClick = () => {
    const {activeListIndex} = this.state

    if (activeListIndex > 0) {
      this.setState(prevState => ({
        activeListIndex: prevState.activeListIndex - 1,
      }))
    }
  }

  render() {
    const {activeListIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} =
      reviewsList[activeListIndex]

    return (
      <div className="bg-container">
        <div className="reviews-container">
          <button
            type="button"
            className="button"
            onClick={this.onLeftClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
          <div className="list-container">
            <h1 className="heading">Reviews</h1>
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onRightClick}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
