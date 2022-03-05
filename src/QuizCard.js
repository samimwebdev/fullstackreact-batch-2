import AnswerCard from './AnswerCard'

const QuizCard = ({
  selectedQuestion,
  navigateNextQuiz,
  selectAnswer,
  pickedAnswer,
  correctAnswer,
  selectedQuestionIndex,
  quizzes,
}) => {
  console.log(selectedQuestion)
  const { question, answers } = selectedQuestion
  const navigateNext = () => {
    navigateNextQuiz()
  }
  return (
    <div className='question-card'>
      <p>
        Question:{selectedQuestionIndex + 1}/ {quizzes.length}
      </p>
      <h2>{question}</h2>
      {answers.map((answer, i) => (
        <AnswerCard
          key={i}
          answer={answer}
          selectAnswer={selectAnswer}
          pickedAnswer={pickedAnswer}
          correctAnswer={correctAnswer}
        />
      ))}
      <button onClick={navigateNext}>Next Question</button>
    </div>
  )
}

export default QuizCard
