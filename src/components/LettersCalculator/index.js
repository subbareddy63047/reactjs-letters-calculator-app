// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  changeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="input">Enter the phrase</label>
              <input
                id="input"
                value={input}
                placeholder="Enter the phrase"
                onChange={this.changeInput}
              />
            </div>
            <div className="letters-container">
              <p className="letters">No.of letters: {input.length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
