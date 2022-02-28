import React from 'react'
import styles from './Card.module.css'
import logo from './logo512.png'

class CardNumClass extends React.Component {
  pickedCardNum = () => {
    this.props.pickedCardParent(this.props.cardNum)
  }
  render() {
    // const {
    //   card: { title, description, image },
    // } = this.props
    return (
      <>
        {/* <img src={logo} alt='logo' /> */}
        <p className={styles.card} onClick={this.pickedCardNum}>
          {this.props.cardNum}
        </p>
        {/* <img src={image} alt='our custom logo' />
        <h2>{title}</h2>
        <p>{description}</p> */}
      </>
    )
  }
}

export default CardNumClass
