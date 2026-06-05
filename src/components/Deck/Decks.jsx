import { useState, useEffect } from 'react'
import api from '../api/axios'

function Decks() {
  const [decks, setDecks] = useState([])

  useEffect(() => {
    api.get('/decks').then(res => setDecks(res.data))
  }, [])

  return (
    <>
      <h1>Decks</h1>
      {decks.map(deck => (
        <div key={deck._id}>
          <h2>{deck.name}</h2>
        </div>
      ))}
    </>
  )
}

export default Decks