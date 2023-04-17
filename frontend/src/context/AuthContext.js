import { createContext } from "react"

const INITIAL_STATE = {
  user: null
}

export const AuthContext = createContext(INITIAL_STATE);

export function AuthContextProvider ({children}) {
  return (
    <AuthContext.Provider value={}>
    {children}
    </AuthContext.Provider>
  )
}
