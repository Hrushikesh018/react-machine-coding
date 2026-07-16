import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      {/* <nav className="top-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav> */}

      <main className="route-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
