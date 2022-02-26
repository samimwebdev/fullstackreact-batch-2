import { useState } from 'react'
import CardNum from './CardNum'

import OddOrEven from './OddOrEven'
import './style.css'

//render cycle
//every state up date re-render the UI
//props update-  re-render the UI
//manually forced update- re-render the UI

const App = () => {
  const [count, setCount] = useState(0)
  const randomCards = [30, 33, 37, 42]
  // const [randomCards, setRandomCards] = useState()
  const [pickedNum, setPickedNum] = useState(null)
  // count -{value: 0}

  // setCount(10)
  //state - hooks
  //count++  count = count + 1

  const incrementCount = () => {
    // setCount(count + 1)
    setCount((prevCount) => prevCount + 1)
  }

  const decrementCount = () => {
    // setCount(count - 1)
    // setCount(() => {
    //   return count - 1
    // })
    setCount(() => count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const pickedValueAlt = (cardNum) => {
    setPickedNum(cardNum)
  }

  return (
    <div className='app'>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      {/* <OddOrEven count={count} /> */}
      <OddOrEven count={count} pickedNum={pickedNum} />
      {randomCards.map((cardValue, index) => {
        return (
          <CardNum
            key={cardValue}
            cardValue={cardValue}
            setPickedNum={setPickedNum}
            pickedValueAlt={pickedValueAlt}
          />
        )
      })}
    </div>
  )
}

export default App
