import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import './Chat.css'
function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.send(JSON.stringify(messageData));
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessageList((list) => [...list, data]);
    };
    return () => {
      socket.onmessage = null;
    };
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p className="nava" style={{fontFamily:"Orbitron"}}>NovaChat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => {
            return (
              <div
                key={index}
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                    <div className="message-meta" style={{display:"flex" , columnGap :"7px", color : "black"}}>
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                  </div>

                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onClick={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
