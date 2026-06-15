export default function Message({ message }) {
  const isUser = message?.from === 'user'

  return (
    <div className={`chat-message ${isUser ? 'user' : 'bot'}`}>
      <div className="msg-content">{message?.text}</div>
    </div>
  )
}
