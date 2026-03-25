import { Link } from 'react-router-dom'
import Screen from '../components/Screen.tsx'
import Avatar from '../components/Avatar.tsx'
import Button from '../components/Button.tsx'
import './HomePage.css'

export default function HomePage() {
  return (
    <Screen>
      <div className="home-header">
        <h1 className="home-header__title">ホーム</h1>
      </div>

      <div className="profile-card">
        <Avatar size="md" />
        <p className="profile-card__name">たく</p>
        <div className="profile-card__qr">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://figma.com"
            alt="QR Code"
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className="menu">
        <Link to="/icon-change" className="menu__item">
          <span className="menu__label">アイコンを変更</span>
          <span className="menu__arrow">→</span>
        </Link>
        <Link to="/name-change" className="menu__item">
          <span className="menu__label">名前を変更</span>
          <span className="menu__arrow">→</span>
        </Link>
        <Link to="/password-change" className="menu__item">
          <span className="menu__label">パスワードを変更</span>
          <span className="menu__arrow">→</span>
        </Link>
        <Link to="/email-change" className="menu__item">
          <span className="menu__label">メールアドレスを変更</span>
          <span className="menu__arrow">→</span>
        </Link>
      </div>

      <div className="btn-group">
        <Button variant="secondary" to="/">ログアウト</Button>
      </div>
    </Screen>
  )
}
