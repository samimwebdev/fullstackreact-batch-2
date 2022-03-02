function shuffle(quiz) {
  const results = [quiz.correct_answer, ...quiz.incorrect_answers]
  for (let i = results.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[results[i], results[j]] = [results[j], results[i]]
  }
  return results
}

export default shuffle
