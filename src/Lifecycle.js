import React from 'react'
import CardNumClass from './CardNumClass'
import OddOrEvenClass from './OddOrEvenClass'

class Lifecycle extends React.Component {
  constructor(props) {
    console.log('constructor')
    // initiate state
    //function binding
    super(props)
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
    this.resetCount = this.resetCount.bind(this)
    this.state = {
      count: 0,
      randomCards: [30, 33, 37, 42],
      pickedValue: null,
      show: true,
    }
  }

  static getDerivedStateFromProps(state, props) {
    console.log('getDerivedStateFromProps')
    return null
    //when component state depends on parent props
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log('shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return 'Hi'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //3rd party API call on update stage
    console.log(prevProps, prevState, snapshot)
    console.log('componentDidUpdate')
  }

  componentDidMount() {
    console.log('componentDidMount')
    //3rd party API call
  }

  incrementCount() {
    // this.state.count = this.state.count + 1
    // this.forceUpdate()
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  decrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  resetCount = () => {
    this.setState({
      count: 0,
    })
  }

  pickedCardParent = (cardNum) => {
    this.setState({
      pickedValue: cardNum,
    })
  }

  render() {
    console.log('render')
    const { count, randomCards, pickedValue } = this.state
    return (
      <div className='app'>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.resetCount}>Reset</button>
        <OddOrEvenClass count={count} pickedValue={pickedValue} />
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Show hide component
        </button>
        {this.state.show
          ? randomCards.map((cardNum) => (
              <CardNumClass
                cardNum={cardNum}
                key={cardNum}
                number={10}
                pickedCardParent={this.pickedCardParent}
              />
            ))
          : 'Component is hidden'}
      </div>
    )
  }
}

export default Lifecycle
