
import React, { useState } from 'react';
import ChatInput from './ChatInput'; // Assuming ChatInput is in the same directory

function ChatInterface() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="app">
      {/* ...header and sidebar components... */}
      <main className="main-content flex-grow ml-auto p-4 mt-16">
        <div className="chat-message space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-gray-200 rounded">
              {msg}
            </div>
          ))}
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </main>
    </div>
  );
}

export default ChatApp;