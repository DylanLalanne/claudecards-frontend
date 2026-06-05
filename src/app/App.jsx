
import {useState} from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../pages/Home.jsx'
import Decks from '../components/Deck/Decks.jsx'
import Deck from '../components/Deck/Deck.jsx'
import Login from '../pages/Login.jsx'
import Nav from '../components/Nav/Nav.jsx'
import Footer from '../components/Footer/Footer.jsx'
import DeckEndScreen from '../components/Deck/DeckEndScreen'
import FlashCard from '../components/FlashCard/FlashCard.jsx'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)//increment
  const [showAnswer, setShowAnswer] = useState(false)//variable
  const [showScore, setShowScore] = useState(0)//score
  const [showDeck, setShowShowDeck] = useState(false)//variable
  const [Correct, setShowCorrect] = useState(0)//variable
  const [Wrong, setShowWrong] = useState(0)//variable
  return(
    <>
      <Nav />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/decks" element = {<Decks />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/decks/:id" element={<Deck />} />
      </Routes>
    </>
  )
}
export default App