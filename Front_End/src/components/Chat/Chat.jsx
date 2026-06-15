import { useEffect, useState } from 'react'
import Message from './Message'
import { getMessages, sendMessage } from '../../services/chatService'
import '../../components/style/Chat.css'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    let mounted = true
    getMessages().then((res) => {
      if (mounted) setMessages(res.data || [])
    }).catch(() => {})

    return () => { mounted = false }
  }, [])

  const handleSend = async () => {
    if (!text.trim()) return
    try {
      const res = await sendMessage({ text })
      setMessages((m) => [...m, res.data])
      setText('')
    } catch (err) {
      console.error(err)
      alert('Erro ao enviar mensagem')
    }
  }

  return (
    <div className="chat-root">
      <h2>Chat com Mentor IA</h2>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <Message key={idx} message={msg} />
        ))}
      </div>

      <div className="chat-input-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escreva sua mensagem..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  )
}
