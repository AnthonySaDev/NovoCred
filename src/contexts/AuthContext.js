import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }){
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const logOut = () => {
    setUsername('');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ username, setUsername, loggedIn, setLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};


