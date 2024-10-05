import React, { createContext, useContext, useState } from 'react';
 export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userImage, setUserImage] = useState('');
  const [Email, SetEmail] = useState('');
  const [UserName, SetUserName] = useState('');
  const [token, setToken] = useState('');  
  const[userId , setUserID] = useState('');

  const Rejester = (First, last) => {
    const userName = First + last;
    SetUserName(userName);
  };

  const Token = (receivedToken) => {
    setToken(receivedToken); 
  };

  const login = (email , id) => {
    setIsLoggedIn(true);
    SetEmail(email);
    setUserID(id);
  };

  const logout = () => {
    setIsLoggedIn(false);
    
    setToken('');  
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, Email, SetEmail, UserName, SetUserName, Rejester, token, Token , userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
