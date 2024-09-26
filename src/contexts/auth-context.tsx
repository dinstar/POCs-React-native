import React from "react";

const AuthContext = React.createContext({ loggedInUser: '', setLoggedInUser: v => {} });

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = React.useState('');

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;