import { createContext, useContext, useState } from "react"

export let Role

;(function(Role) {
  Role["ADMIN"] = "admin"
  Role["USER"] = "user"
})(Role || (Role = {}))

const AuthContext = createContext({})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authenticated: null,
    username: null,
    role: null
  })

  const authenticate = () => {
      setAuthState({
        authenticated: true,
        username: null,
        role: null
      })
  }

  const logout = async () => {
    setAuthState({
      authenticated: false,
      username: null,
      role: null
    })
  }

  const value = {
    onAuthenticate: authenticate,
    onLogout: logout,
    authState
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
