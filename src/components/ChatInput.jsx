import dayjs from 'dayjs';
import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './ChatMessages';
import LoadingGif from '../assets/loading-spinner.gif'
import './ChatInput.css'

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    event.key === 'Enter' && sendMessage();
    event.key === 'Escape' && setInputText('');
  }

  function clearMessage() {
    setChatMessages([]);
  }

  async function sendMessage() {
    const time = dayjs().valueOf();
    const timeString = dayjs(time).format('h:mma');
    console.log(timeString);
    if(isLoading || inputText === '') {
      return;
    }

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time : timeString
      }
    ];
    
    setInputText('');
    setChatMessages([
      ...newChatMessages, 
      {
        message: <img
          className="loading-img"
          src={LoadingGif}/>,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    setIsLoading(true);
    
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: timeString
      }
    ]);
    setIsLoading(false);         
  }
  
  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" type="text" 
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-box"
      />
      <button
        onClick={sendMessage}  
        className="send-button"         
      >Send</button>
      <button
        onClick={clearMessage}
        className='clear-message-btn'
      >Clear</button>
    </div>
  );
}

export default ChatInput