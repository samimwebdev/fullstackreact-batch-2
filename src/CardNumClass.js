import React from 'react'
import styles from './Card.module.css'

class CardNumClass extends React.Component {
  constructor(props) {
    super(props)
    this.timer = ''
    this.state = {
      message: '',
      cardNum: null,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    console.log('props', props)
    console.log('state', state)
    return {
      cardNum: props.number,
    }
    // return null
    //when component state depends on parent props
  }
  pickedCardNum = () => {
    this.props.pickedCardParent(this.props.cardNum)
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   this.setState({
    //     message: 'calling',
    //   })
    // }, 2000)
  }

  componentWillUnmount() {
    //clean up the component
    // removing event listeners you added in componentDidMount (or elsewhere)
    // cancelling active network requests
    // invalidating timers
    // cleaning up DOM elements that you created in componentDidMount
    // clearInterval(this.timer)
    console.log('componentWillUnmount')
  }
  render() {
    console.log(this.state)
    return (
      <>
        <p className={styles.card} onClick={this.pickedCardNum}>
          {this.props.cardNum}
        </p>
      </>
    )
  }
}

export default CardNumClass
