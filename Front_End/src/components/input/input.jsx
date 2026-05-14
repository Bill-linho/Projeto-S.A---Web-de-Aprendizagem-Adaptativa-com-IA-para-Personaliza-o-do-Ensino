import '../style/input.css'

export default function Input({ type, value, onChange, placeholder }) {
  return (
    <div>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
};