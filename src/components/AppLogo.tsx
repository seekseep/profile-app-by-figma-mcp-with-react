import './AppLogo.css'

export default function AppLogo() {
  return (
    <div className="app-logo">
      <div className="app-logo__dot" />
      <div className="app-logo__dot" />
      <div className="app-logo__dot" />
      <div className="app-logo__dot app-logo__dot--accent" />
      <span className="app-logo__plus">+</span>
    </div>
  )
}
