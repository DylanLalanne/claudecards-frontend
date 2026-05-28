import { useState } from 'react'
import FlashCard from '../components/FlashCard/FlashCard'
import DeckEndScreen from '../components/Deck/DeckEndScreen'

const cards = [
  {id: 1, question: "What is water made of?", answer:"H20"},
  {id: 2, question: "What is Air made of?", answer:"Nitrogen, oxygen, carbon dioxide"},
  {id: 3, question: "What is an apple?", answer:"A delicious fruit"}]

function Decks() {
  const [currentIndex, setCurrentIndex] = useState(0)//increment
  const [showAnswer, setAnswer] = useState(false)//variable
  const [correct, countCorrect] = useState(0)//variable
  const [wrong, countWrong] = useState(0)//variable
  return(
    <>
        <h1>Decks</h1>
        {currentIndex < cards.length && (
        <div>
            <FlashCard
            question={cards[currentIndex].question}
            answer={cards[currentIndex].answer}
            showAnswer={showAnswer}
            onToggleAnswer={() => setAnswer (!showAnswer)}
        />
        
        <button onClick={() => 
        {setCurrentIndex(Math.max(0,currentIndex-1)) 
        setAnswer(false)}}>Previous</button>
        <button onClick={() => 
        {setCurrentIndex(currentIndex+1) 
        setAnswer(false)}}>Skip</button>
      </div>
    )}
    {showAnswer && (
      <div>
        <button onClick={() => {{
          countCorrect(correct+1)
          setAnswer(false)
          setCurrentIndex(currentIndex + 1)
          }}}>Got it Right</button>
          <button onClick={() => {{ 
          countWrong(wrong+1)
          setAnswer(false)
          setCurrentIndex(currentIndex + 1)
          }}}>Got it Wrong
        </button>
      </div>
    )}
    {currentIndex>= cards.length && (
      <DeckEndScreen
        correct = {correct}
        wrong = {wrong}
        totalCards = {cards.length}
        onTryAgain={() => {
          setCurrentIndex(0)
          setAnswer(false)
          countCorrect(0)
          countWrong(0)
        }}
      />
    )}
  </>
  )
}

export default Decks