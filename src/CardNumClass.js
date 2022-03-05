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
    console.log('state', state)
    console.log('props', props)
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
