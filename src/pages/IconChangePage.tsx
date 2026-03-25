import Screen from '../components/Screen.tsx'
import NavBar from '../components/NavBar.tsx'
import Avatar from '../components/Avatar.tsx'
import Button from '../components/Button.tsx'
import './IconChangePage.css'

export default function IconChangePage() {
  return (
    <Screen>
      <NavBar title="アイコンの変更" />

      <div className="section-content">
        <Avatar size="lg" />
        <p className="section-content__label">現在のアイコン</p>
      </div>

      <div className="btn-group">
        <Button variant="secondary">写真を選択</Button>
        <Button to="/home">保存する</Button>
      </div>
    </Screen>
  )
}
