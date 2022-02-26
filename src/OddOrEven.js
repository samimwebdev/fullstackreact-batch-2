const OddOrEven = ({ count, pickedNum }) => {
  return (
    <div>
      <h2>counter</h2>
      <p>{count % 2 === 0 ? 'Even' : 'odd'}</p>
      <h2> Card Num</h2>
      <p>{pickedNum % 2 === 0 ? 'Even' : 'odd'}</p>
    </div>
  )
}

export default OddOrEven
