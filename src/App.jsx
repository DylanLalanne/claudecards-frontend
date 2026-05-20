import {useState} from 'react'

const cards = [
  {id: 1, question: "What is water made of?", answer:"H20"},
  {id: 2, question: "What is Air made of?", answer:"Nitrogen, oxygen, carbon dioxide"},
  {id: 3, question: "What is an apple?", answer:"A delicious fruit"}
]
function App() {
  const [currentIndex, setCurrentIndex] = useState(0)//increment
  const [showAnswer, setShowAnswer] = useState(false)//bool
  return <div><h1>
  {cards[currentIndex].question}
  {showAnswer && <p>{cards[currentIndex].answer}</p>}
  <button onClick={() => setShowAnswer(true)}>Show Answer</button>
  <button onClick={() => 
  {setCurrentIndex(currentIndex+1) 
  setShowAnswer(false)}}>Next Card</button>
  </h1></div>
  
}

export default App