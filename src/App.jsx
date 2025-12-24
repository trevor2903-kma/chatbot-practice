import { useState, useEffect } from 'react';
import { Chatbot } from 'supersimpledev';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App() {
  // array destructuring
  // useState luon tra ve mang 2 phan tu, 1 la gia tri state hien tai, 2 la ham cap nhat state
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('message')) || []);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  useEffect(() => {
    Chatbot.addResponses({
      'sup dude': "what's up"
    })
  },[]);

  useEffect(() => {
    localStorage.setItem('message', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <p
        className="chatbot-intro"
      >
        {chatMessages.length === 0 ? 'Welcome to the chatbot project! Send a message using the textbox below.' : ''}
      </p>
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
    );
}

export default App
