import Screen from '../components/Screen.tsx'
import Avatar from '../components/Avatar.tsx'
import './ProfilePage.css'

export default function ProfilePage() {
  return (
    <Screen center>
      <div className="profile-view">
        <Avatar size="lg" />
        <p className="profile-view__name">たく</p>
      </div>
    </Screen>
  )
}
