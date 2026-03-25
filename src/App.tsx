import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import PasswordResetPage from './pages/PasswordResetPage.tsx'
import HomePage from './pages/HomePage.tsx'
import IconChangePage from './pages/IconChangePage.tsx'
import NameChangePage from './pages/NameChangePage.tsx'
import PasswordChangePage from './pages/PasswordChangePage.tsx'
import EmailChangePage from './pages/EmailChangePage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/icon-change" element={<IconChangePage />} />
        <Route path="/name-change" element={<NameChangePage />} />
        <Route path="/password-change" element={<PasswordChangePage />} />
        <Route path="/email-change" element={<EmailChangePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
