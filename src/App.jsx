
import {useState} from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Decks from './pages/Decks'
import Login from './pages/Login'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import EndScreen from './components/Card/CardEndScreen'
import FlashCard from './components/Card/FlashCard'

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
      </Routes>
    </>
  )
}
export default App