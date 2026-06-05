import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/axios'


function Deck() {
  const { id } = useParams()
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.get(`/decks/${id}/cards`).then(res => setCards(res.data))
  }, [id])

  return (
    <>
      <h1>Study Deck</h1>
      {cards.map(card => (
        <div key={card._id}>
          <p>{card.frontText}</p>
        </div>
      ))}
    </>
  )
}

export default Deck