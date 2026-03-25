import Screen from '../components/Screen.tsx'
import Button from '../components/Button.tsx'
import './ErrorPage.css'

export default function ErrorPage() {
  return (
    <Screen center>
      <div className="error-content">
        <div className="error-content__icon">!</div>
        <h1 className="error-content__title">エラーが発生しました</h1>
        <p className="error-content__message">
          問題が発生しました。<br />
          しばらくしてからもう一度お試しください。
        </p>
      </div>

      <div className="btn-group">
        <Button to="/home">戻る</Button>
      </div>
    </Screen>
  )
}
