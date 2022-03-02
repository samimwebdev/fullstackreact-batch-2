import AnswerCard from './AnswerCard'

const QuizCard = ({ selectedQuestion, navigateNextQuiz }) => {
  console.log(selectedQuestion)
  const { question, answers } = selectedQuestion
  const navigateNext = () => {
    navigateNextQuiz()
  }
  return (
    <div>
      <h2>{question}</h2>
      {answers.map((answer, i) => (
        <AnswerCard key={i} answer={answer} />
      ))}
      <button onClick={navigateNext}>Next Question</button>
    </div>
  )
}

export default QuizCard
