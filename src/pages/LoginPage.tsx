import { Link } from 'react-router-dom'
import Screen from '../components/Screen.tsx'
import AppLogo from '../components/AppLogo.tsx'
import TextInput from '../components/TextInput.tsx'
import Button from '../components/Button.tsx'
import './LoginPage.css'

export default function LoginPage() {
  return (
    <Screen center>
      <div className="header">
        <AppLogo />
        <h1 className="header__title">おかえりなさい</h1>
        <p className="header__subtitle">アカウントにログイン</p>
      </div>

      <div className="form">
        <TextInput label="メールアドレス" type="email" placeholder="you@example.com" />
        <TextInput label="パスワード" type="password" placeholder="••••••••" />
        <Link to="/password-reset" className="forgot-link">パスワードをお忘れですか？</Link>
      </div>

      <div className="btn-group">
        <Button to="/home">ログイン</Button>
      </div>

      <p className="footer-link">
        アカウントをお持ちでないですか？ <Link to="/signup">新規登録</Link>
      </p>
    </Screen>
  )
}
