// Write your code here.
import './index.css'
import {Component} from 'react'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItems extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqData} = this.props
    const {answerText} = faqData
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleAnswer}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqData} = this.props
    const {id, questionText, answerText} = faqData
    return (
      <li className="faq-container">
        <div className="ques-img">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItems
