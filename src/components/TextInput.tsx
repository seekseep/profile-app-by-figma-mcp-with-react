import './TextInput.css'

type TextInputProps = {
  label: string
  type?: string
  placeholder?: string
  defaultValue?: string
  readOnly?: boolean
}

export default function TextInput({ label, type = 'text', placeholder, defaultValue, readOnly = false }: TextInputProps) {
  if (readOnly) {
    return (
      <div className="readonly-field">
        <span className="readonly-field__label">{label}</span>
        <span className="readonly-field__value">{defaultValue}</span>
      </div>
    )
  }

  return (
    <div className="text-input">
      <label className="text-input__label">{label}</label>
      <input
        className="text-input__field"
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  )
}
