import React from 'react'

class OddOrEvenClass extends React.Component {
  render() {
    const { count, pickedValue } = this.props
    return (
      <div>
        <h2>counter</h2>
        <p>{count % 2 === 0 ? 'Even' : 'odd'}</p>
        <h2> Card Num</h2>
        {pickedValue ? (
          <p>{pickedValue % 2 === 0 ? 'Even' : 'odd'}</p>
        ) : (
          <p>You haven't picked a number yet</p>
        )}
      </div>
    )
  }
}

export default OddOrEvenClass
