const GameOver = ({ resetQuiz, gameScore }) => {
  return (
    <div>
      <p> Total Score {gameScore} </p>
      <button onClick={resetQuiz}>Reset Quiz</button>
    </div>
  )
}

export default GameOver
