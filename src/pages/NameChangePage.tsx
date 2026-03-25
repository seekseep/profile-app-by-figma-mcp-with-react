import Screen from '../components/Screen.tsx'
import NavBar from '../components/NavBar.tsx'
import TextInput from '../components/TextInput.tsx'
import Button from '../components/Button.tsx'
import './NameChangePage.css'

export default function NameChangePage() {
  return (
    <Screen>
      <NavBar title="名前の変更" />

      <div className="name-change-content">
        <p className="name-change-content__desc">新しい表示名を入力してください</p>
        <TextInput label="名前" placeholder="たく" defaultValue="たく" />
      </div>

      <div className="btn-group">
        <Button to="/home">保存する</Button>
      </div>
    </Screen>
  )
}
