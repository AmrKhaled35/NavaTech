import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Profile.css';
import Photo from '../Imgs/star pattern (1).svg'

const Profile = () => {
  const { UserName, Email, SetEmail, SetUserName, logout } = useAuth(); 
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(UserName);
  const [newEmail, setNewEmail] = useState(Email);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    SetUserName(newUserName);
    SetEmail(newEmail);
    setIsEditing(false);
  };

  return (
    <div className="profile-container" style={{background : `url(${Photo})`}}>
      <div className="profile-header">
        <h1>Welcome to Your Profile</h1>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <div className="avatar">{Email.charAt(0).toUpperCase()}</div>
            <>
              <p>UserName: {UserName}</p>
              <p>Email: {Email}</p>
                <button className="action-button" onClick={logout}>Log Out</button>
            </>
            <>
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                className="profile-input"
                placeholder="Edit your name"
              />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="profile-input"
                placeholder="Edit your email"
              />
              <button className="action-buttonS" onClick={handleSave}>Save</button>
            </>

        </div>
        
      </div>
      <div className="space-background"></div>
    </div>
  );
};

export default Profile;
