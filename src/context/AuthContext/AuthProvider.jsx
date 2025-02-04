import { useEffect, useState } from "react"
import AuthContext from "./AuthContext"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"
import auth from "../../firebase/firebase.config"
export default function AuthProvider({ children }) {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const userInfo = {
    users,
    loading,
    createUser,
  }

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  )
}
