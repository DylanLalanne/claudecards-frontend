import { Link } from 'react-router-dom'
import './nav.css'
function Nav() {
  return (
    <nav>
      <div className="nav-links">
        <ul>
          <li><Link to="/" className = "brand">Claude Cards</Link></li>
          <li><Link to="/decks">My decks</Link></li>
          <li><Link to="/login">Sign in</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav