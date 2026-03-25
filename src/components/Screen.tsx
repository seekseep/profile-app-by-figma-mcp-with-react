import type { ReactNode } from 'react'
import './Screen.css'

type ScreenProps = {
  children: ReactNode
  center?: boolean
}

export default function Screen({ children, center = false }: ScreenProps) {
  return (
    <div className={`screen ${center ? 'screen--center' : 'screen--top'}`}>
      {children}
    </div>
  )
}
