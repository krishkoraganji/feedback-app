import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onclickCalling = () => this.setState({isFeedbackGiven: true})

  renderFeedbackPage = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1>How satisfied are you with our customer support performance</h1>
        <ul>
          {emojis.map(emoji => (
            <li>
              <button type="button">
                <img src={emoji.imageUrl} alt={emoji.name} />
              </button>
              <span>{emoji.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackGivenPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div>
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state

    return (
      <div>
        <div>
          {isFeedbackGiven
            ? this.renderFeedbackPage()
            : this.renderFeedbackGivenPage()}
        </div>
      </div>
    )
  }
}

export default Feedback
