// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  textChanges = () => {
    const {text} = this.state
    if (text === 'Subscribed') {
      return this.setState({text: 'Subscribe'})
    }
    return this.setState({text: 'Subscribed'})
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button onClick={this.textChanges} className="button" type="button">
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
