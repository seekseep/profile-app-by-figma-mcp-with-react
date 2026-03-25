import Screen from '../components/Screen.tsx'
import NavBar from '../components/NavBar.tsx'
import TextInput from '../components/TextInput.tsx'
import Button from '../components/Button.tsx'
import './PasswordResetPage.css'

export default function PasswordResetPage() {
  return (
    <Screen>
      <NavBar title="パスワードの再設定" />

      <div className="pw-reset-content">
        <div className="lock-icon">🔒</div>
        <h2 className="pw-reset-content__title">パスワードをリセット</h2>
        <p className="pw-reset-content__desc">
          登録済みのメールアドレスを入力してください。<br />
          パスワード再設定用のリンクを送信します。
        </p>
      </div>

      <div className="form">
        <TextInput label="メールアドレス" type="email" placeholder="you@example.com" />
      </div>

      <div className="btn-group">
        <Button to="/">送信する</Button>
      </div>
    </Screen>
  )
}
