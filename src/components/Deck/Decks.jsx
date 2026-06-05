import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/axios'

function Decks() {
  const [decks, setDecks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/decks').then(res => setDecks(res.data))
  }, [])

  return (
    <>
      <h1>Decks</h1>
      {decks.map(deck => (
        <div key={deck._id} onClick={() => navigate(`/decks/${deck._id}`)} style={{ cursor: 'pointer' }}>
          <h2>{deck.name}</h2>
          <p>{deck.description}</p>
        </div>
      ))}
    </>
  )
}

export default Decks