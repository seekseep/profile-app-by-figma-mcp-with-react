import './Avatar.css'

type AvatarProps = {
  size?: 'sm' | 'md' | 'lg'
}

export default function Avatar({ size = 'md' }: AvatarProps) {
  return (
    <div className={`avatar avatar--${size}`}>
      <span className="avatar__icon" />
    </div>
  )
}
