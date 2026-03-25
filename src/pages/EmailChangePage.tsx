import Screen from '../components/Screen.tsx'
import NavBar from '../components/NavBar.tsx'
import TextInput from '../components/TextInput.tsx'
import Button from '../components/Button.tsx'

export default function EmailChangePage() {
  return (
    <Screen>
      <NavBar title="メールアドレスの変更" />

      <div className="form" style={{ paddingTop: 20 }}>
        <TextInput label="現在のメールアドレス" readOnly defaultValue="seekseep@gmail.com" />
        <TextInput label="新しいメールアドレス" type="email" placeholder="new@example.com" />
      </div>

      <div className="btn-group">
        <Button to="/home">保存する</Button>
      </div>
    </Screen>
  )
}
