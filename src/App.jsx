import { useState } from 'react'
import { FaUser, FaPaperPlane, FaUserMd } from 'react-icons/fa'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello Dr. Smith, I've been experiencing headaches lately.", sender: 'patient' },
    { id: 2, text: "Hello! I'm sorry to hear that. How long have you been having these headaches?", sender: 'doctor' },
    { id: 3, text: "For about a week now. They're particularly bad in the morning.", sender: 'patient' },
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'patient' }])
      setNewMessage('')
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="doctor-info">
          <FaUserMd className="doctor-avatar" />
          <div className="doctor-details">
            <h2>Dr. Sarah Smith</h2>
            <span>Neurologist • Online</span>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="message-avatar">
              {message.sender === 'doctor' ? <FaUserMd /> : <FaUser />}
            </div>
            <div className="message-content">
              <div className="message-bubble">{message.text}</div>
            </div>
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  )
}

export default App