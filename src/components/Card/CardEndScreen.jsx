function EndScreen({ correct, wrong, totalCards, onTryAgain }) {
  return (
    <div>
      <p> You reviewed {totalCards} cards</p>
      <p>Correct: {correct}</p>
      <p>Wrong: {wrong}</p>
      <button onClick={onTryAgain}>Try Again</button>
    </div> 
  )
}

export default EndScreen