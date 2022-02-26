import styles from './Card.module.css'
const CardNum = ({ cardValue, pickedValueAlt, setPickedNum }) => {
  const pickedCardValue = () => {
    setPickedNum(cardValue)
    //pickedValueAlt(cardValue)
  }

  //   const pickedCardValue = () => {
  //     // setPickedNum(cardValue)
  //     pickedValueAlt(cardValue)
  //   }
  return (
    <p className={styles.card} onClick={pickedCardValue}>
      {cardValue}
    </p>
  )
}

export default CardNum
