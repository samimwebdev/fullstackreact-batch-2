import { useState } from 'react'
import GameOver from './GameOver'
import QuizCard from './QuizCard'
import './style.css'
import shuffle from './utils'
//button - question and answer- selecting answer- write or wrong answer - total number
// single select answer
//reset quiz

const App = () => {
  const [quizzes, setQuizzes] = useState(null)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0)
  const [startGame, setStartGame] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [gameScore, setGameScore] = useState(0)

  const startQuiz = async () => {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple'
    )
    const { results } = await res.json()
    setQuizzes(results)
    setStartGame(true)

    setSelectedQuestion({
      question: results[0].question,
      answers: shuffle(results[0]),
    })
    setCorrectAnswer(results[0].correct_answer)
    setLoaded(true)
  }
  const navigateNextQuiz = () => {
    //make sure you are in last question
    const isLastQuestion = quizzes.length - 1 === selectedQuestionIndex
    if (isLastQuestion) {
      setEndGame(true)
    } else {
      const currenIndex = selectedQuestionIndex + 1
      setSelectedQuestionIndex(currenIndex)
      setSelectedQuestion({
        question: quizzes[currenIndex].question,
        answers: shuffle(quizzes[currenIndex]),
      })
      setCorrectAnswer(quizzes[currenIndex].correct_answer)
      setSelectedAnswer(null)
    }
  }

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer)
    //comparing user selected Answer with correctAnswer
    if (answer === correctAnswer) {
      setGameScore((prevScore) => prevScore + 1)
    }
  }

  const resetQuiz = () => {
    setQuizzes(null)
    setSelectedQuestion(null)
    setSelectedQuestionIndex(0)
    setEndGame(false)
    setLoaded(false)
    setStartGame(false)
    setGameScore(0)
  }

  return (
    <div className='container'>
      {endGame && <GameOver resetQuiz={resetQuiz} gameScore={gameScore} />}
      {startGame && loaded && !endGame && (
        <QuizCard
          selectedQuestion={selectedQuestion}
          selectAnswer={selectAnswer}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          quizzes={quizzes}
          selectedQuestionIndex={selectedQuestionIndex}
          navigateNextQuiz={navigateNextQuiz}
        />
      )}
      {!startGame && <button onClick={startQuiz}>Start Quiz</button>}
    </div>
  )
}

export default App
