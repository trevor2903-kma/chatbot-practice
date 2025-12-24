import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if(containerElem){  
      containerElem.scrollTop = containerElem.scrollHeight;
    }
    // console.log(chatMessages.map(m => m.message)); // log dữ liệu state
    // console.log(chatMessagesRef.current?.innerText); // log text chụp lại DOM
  }, [chatMessages]);

  return (
    <div 
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
    {chatMessages.map((chatMessage) => {
        return (
          chatMessage.message !== '' ?
          <ChatMessage 
            key={chatMessage.id} 
            message={chatMessage.message} 
            sender={chatMessage.sender}
            time={chatMessage.time}
          /> : ''
        );
      })}
    </div>
  )
}

export default ChatMessages;