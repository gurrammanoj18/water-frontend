import React, { useState } from "react";
import axios from "axios";
import "./chatBot.css";

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = input;
    setMessages([...messages, { sender: "You", text: userMessage }]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:8080/api/chatbot/message", {
        message: userMessage,
      });

      const botReply = response.data.reply;
      setMessages((prev) => [...prev, { sender: "Bot", text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { sender: "Bot", text: "Sorry, server error." }]);
    }
  };

  const clearMessages = () => setMessages([]);

  return (
    <div>
      <button className="chatbot-button" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span className="cht-head">ChatBot</span>
            <button className="chatbot-clear-btn" onClick={clearMessages}>x</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chatbot-message ${msg.sender === "Bot" ? "bot" : "user"}`}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
