import { Link } from 'react-router-dom'
import Screen from '../components/Screen.tsx'
import Avatar from '../components/Avatar.tsx'
import TextInput from '../components/TextInput.tsx'
import Button from '../components/Button.tsx'

export default function SignupPage() {
  return (
    <Screen center>
      <div className="header">
        <Avatar size="sm" />
        <h1 className="header__title">アカウント作成</h1>
        <p className="header__subtitle">新しいアカウントを作成します</p>
      </div>

      <div className="form">
        <TextInput label="メールアドレス" type="email" placeholder="you@example.com" />
        <TextInput label="パスワード" type="password" placeholder="••••••••" />
        <TextInput label="パスワード（確認）" type="password" placeholder="••••••••" />
      </div>

      <div className="btn-group">
        <Button to="/home">サインアップ</Button>
      </div>

      <p className="footer-link">
        すでにアカウントをお持ちですか？ <Link to="/">ログイン</Link>
      </p>
    </Screen>
  )
}
