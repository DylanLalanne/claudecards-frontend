
import {useState} from 'react'
import EndScreen from './components/CardEndScreen'
import FlashCard from './components/FlashCard'
import {Route, Routes} from "react-router-dom"

const cards = [
  {id: 1, question: "What is water made of?", answer:"H20"},
  {id: 2, question: "What is Air made of?", answer:"Nitrogen, oxygen, carbon dioxide"},
  {id: 3, question: "What is an apple?", answer:"A delicious fruit"}
]
function App() {
  const [currentIndex, setCurrentIndex] = useState(0)//increment
  const [showAnswer, setShowAnswer] = useState(false)//variable
  const [showScore, setShowScore] = useState(0)//score
  const [showDeck, setShowShowDeck] = useState(false)//variable
  const [Correct, setShowCorrect] = useState(0)//variable
  const [Wrong, setShowWrong] = useState(0)//variable
  return(
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
      </Routes>
      
      {currentIndex < cards.length && (
      <div>
        <FlashCard
          question={cards[currentIndex].question}
          answer={cards[currentIndex].answer}
          showAnswer={showAnswer}
          onToggleAnswer={() => setShowAnswer (!showAnswer)}
        />
        
        <button onClick={() => 
        {setCurrentIndex(Math.max(0,currentIndex-1)) 
        setShowAnswer(false)}}>Previous</button>
        <button onClick={() => 
        {setCurrentIndex(currentIndex+1) 
        setShowAnswer(false)}}>Skip</button>
      </div>
    )}
    {showAnswer && (
      <div>
        <button onClick={() => {{
          setShowCorrect(Correct+1)
          setShowAnswer(false)
          setCurrentIndex(currentIndex + 1)
          }}}>Got it Right</button>
          <button onClick={() => {{ 
          setShowWrong(Wrong+1)
          setShowAnswer(false)
          setCurrentIndex(currentIndex + 1)
          }}}>Got it Wrong
        </button>
      </div>
    )}
    {currentIndex>= cards.length && (
      <EndScreen
        correct = {Correct}
        wrong = {Wrong}
        totalCards = {cards.length}
        onTryAgain={() => {
          setCurrentIndex(0)
          setShowAnswer(false)
          setShowCorrect(0)
          setShowWrong(0)
        }}
      />
    )}
  </div>
  </>
  )
}
export default App