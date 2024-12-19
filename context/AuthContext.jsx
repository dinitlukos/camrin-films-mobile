import { createContext, useContext, useState } from "react";

export let Role;
(function (Role) {
  Role["ADMIN"] = "admin";
  Role["USER"] = "user";
})(Role || (Role = {}));

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authenticated: null,
    uid: null,
    role: null,
    registered: null,
  });

  const authenticate = (uid) => {
    setAuthState({
      authenticated: true,
      uid: uid,
      role: null,
      registered: null,
    });
  };

  const register = (uid) => {
    setAuthState({
      authenticated: true,
      uid: uid,
      role: null,
      registered: true,
    });
  };

  const logout = async () => {
    setAuthState({
      authenticated: false,
      uid: null,
      registered: null,
    });
  };

  const value = {
    onAuthenticate: authenticate,
    onLogout: logout,
    onRegister: register,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
