import Screen from '../components/Screen.tsx'
import NavBar from '../components/NavBar.tsx'
import TextInput from '../components/TextInput.tsx'
import Button from '../components/Button.tsx'

export default function PasswordChangePage() {
  return (
    <Screen>
      <NavBar title="パスワードの変更" />

      <div className="form" style={{ paddingTop: 20 }}>
        <TextInput label="現在のパスワード" type="password" placeholder="••••••••" />
        <TextInput label="新しいパスワード" type="password" placeholder="••••••••" />
        <TextInput label="新しいパスワード（確認）" type="password" placeholder="••••••••" />
      </div>

      <div className="btn-group">
        <Button to="/home">保存する</Button>
      </div>
    </Screen>
  )
}
