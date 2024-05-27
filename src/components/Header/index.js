import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <div className="logo-section">
      <img
        src="https://i.pinimg.com/564x/b9/97/09/b997095c5e7d3face2778a82aa0ef998.jpg"
        alt="figma icon"
        className="logo"
      />
      <p className="logo-text">Insu</p>
    </div>
    <ul className="nav-container">
      <li className="nav-link">
        <Link className="nav" to="/">
          Home
        </Link>
      </li>
      <li className="nav-link">
        <Link className="nav" to="/about">
          About
        </Link>
      </li>
      <li className="nav-link">
        <Link className="nav" to="/features">
          Features
        </Link>
      </li>
      <li className="nav-link">
        <Link className="nav" to="/contact">
          contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
