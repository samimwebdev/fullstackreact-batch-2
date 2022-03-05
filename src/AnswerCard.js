const AnswerCard = ({ answer, selectAnswer, pickedAnswer, correctAnswer }) => {
  const isRightAnswer = pickedAnswer && answer === correctAnswer
  const isWrongAnswer = pickedAnswer && answer !== correctAnswer
  const correctClass = isRightAnswer ? 'correct-answer' : ''
  const wrongClass = isWrongAnswer ? 'incorrect-answer' : ''
  const disableClass = pickedAnswer ? 'disabled-answer' : ''
  return (
    <p
      className={`${correctClass} ${wrongClass} ${disableClass}`}
      onClick={() => selectAnswer(answer)}
    >
      {answer}
    </p>
  )
}

export default AnswerCard
