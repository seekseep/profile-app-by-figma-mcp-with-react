import { useNavigate } from 'react-router-dom'
import './NavBar.css'

type NavBarProps = {
  title: string
}

export default function NavBar({ title }: NavBarProps) {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <button className="navbar__back" onClick={() => navigate(-1)}>←</button>
      <span className="navbar__title">{title}</span>
    </nav>
  )
}
