import React, { useState, useContext } from "react";
import Chat from '../components/Chat';
import './Forum.css';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext'; 
import { useAuth } from "../contexts/AuthContext";

function Forum() {
  const { userId , token } = useAuth();  
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [socket, setSocket] = useState(null);
  const [channelCode, setChannelCode] = useState(""); 
  const [selectedChannel, setSelectedChannel] = useState(null); 

  const joinRoom = (selectedRoom) => {
    setSelectedChannel(selectedRoom); 
    setShowChat(false);
  };

  const handleChannelCodeChange = (event) => {
    setChannelCode(event.target.value);
  };

  const handleJoinChannel = () => {
    if (username !== "" && channelCode !== "") {
      const newSocket = new WebSocket(`ws://52.91.153.146/ws/exoplanet/${channelCode}/?token= ${token}`);
      newSocket.onopen = () => {
        console.log("Connected to the server in room:", channelCode);
      };
      newSocket.onmessage = (message) => {
        console.log("Message from server:", message.data);
      };
      newSocket.onerror = (error) => {
        console.error("WebSocket Error:", error);
      };
      newSocket.onclose = () => {
        console.log("WebSocket closed");
      };

      setSocket(newSocket);
      setRoom(channelCode); 
      setShowChat(true); 
    }
  };

  const unlockExoplanet = async () => {
    if (!userId) {
      console.error("User ID is required to unlock the exoplanet");
      return;
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/unlock/${userId}/`, {
        code: channelCode, 
      }, {
        headers: {
          'Authorization': `Token ${token}`, 
        }
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error unlocking exoplanet:", error.response.data.error);
    }
  };

  return (
    <div className="forum-container">
      <div className="sidebar">
        <h3>Channels</h3>
        <ul>
          {["level1", "level2", "level3"].map((channel) => (
            <li
              key={channel}
              onClick={() => joinRoom(channel)}
              className={selectedChannel === channel ? "active" : ""}
            >
              {channel}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-section">
        {!showChat && selectedChannel ? (
          <div className="joinChatContainer">
            <h3>Join {selectedChannel}</h3>
            <input
              type="text"
              placeholder="Enter your name..."
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="text"
              placeholder="Enter channel code..."
              onChange={handleChannelCodeChange}
            />
            <button onClick={handleJoinChannel}>Join Channel</button>
            <button onClick={unlockExoplanet}>Unlock Exoplanet</button>
          </div>
        ) : (
          socket && <Chat socket={socket} username={username} room={room} /> 
        )}
      </div>
    </div>
  );
}

export default Forum;
