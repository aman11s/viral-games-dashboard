import { createContext, useContext, useState } from "react";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );

  const isUserLoggedIn = (loginFlag) => {
    localStorage.setItem("isLoggedIn", loginFlag);
    setIsLoggedIn(loginFlag);
  };

  return (
    <authContext.Provider value={{ isLoggedIn, isUserLoggedIn }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
