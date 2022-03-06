import React from 'react'
import CardNumClass from './CardNumClass'
import OddOrEvenClass from './OddOrEvenClass'

class Lifecycle extends React.Component {
  constructor(props) {
    // initiate state
    //function binding
    console.log('constructor')
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
    //when this component state depends on parent props
    //you can update the component state from parent props
    //you can return the updated state from here
    //otherwise you can must return null
    console.log('getDerivedStateFromProps')
    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    //either return true or false
    //If you return true component lifecyle flow (render-rerendering) will be maintained
    //otherwise if it is false, No re-render will be happened
    //use for performance optimization
    //you can manually control the re-render of the component based on some condition
    //pureComponent use is recommended instead  of this
    console.log(nextProps, nextState)
    console.log('shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //receiving snapshot before updating the DOM
    //calculate some values from expected future DOM updates
    //return snapshots which will be received as snapshot in componentDidUpdate
    //you won't update state directly in this lifecycle method
    console.log('getSnapshotBeforeUpdate')
    return 'Hi'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //calling on updated DOM
    //3rd party API call on update stage
    // update scroll position based on snapshot
    console.log(prevProps, prevState, snapshot)
    console.log('componentDidUpdate')
  }

  componentDidMount() {
    //3rd party API call
    console.log('componentDidMount')
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
