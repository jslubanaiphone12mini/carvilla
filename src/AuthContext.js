// AuthContext.js
import { createContext, useState, useContext } from 'react'
import useAxios from './hooks/useAxios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  // const { sendRequest, loading, axerror } = useAxios();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [userID, setUserID] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const signup = async (formData) => {
    // setUser(userData)
    // console.log("signup user...");
    // console.log(formData);

    setIsLoading(true)
    setError(null)
    const { username, email, password, image } = formData

    const data = new FormData();
    data.append('name', formData.username);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('image', formData.image);
    // data.append('places', []);
    // console.log(formData)
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        
        body: data
      })

      // console.log(respon)
      if (!response.ok) {
        const errorData = await response.json()
        // console.log(errorData);
        setError(errorData.message)
        return null
      }

      const respon = await response.json()
      console.log(respon.data.id)
      // setUser(data.data)
      setUser(respon.data)
      setIsLoggedIn(true)
      setUserID(respon.data.id)

      // setUser(data.user); // Adjust based on API response shape
      // localStorage.setItem("user", JSON.stringify(data.user));
    } catch (err) {
      console.error('Signup error:', err)
      setError(err)
      throw err
    } finally {
      setIsLoading(false)
    }

    // console.log(error)
  }

  const login = async (formData) => {
    const { email, password } = formData
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(errorData.message)
        return null
      }

      const respon = await response.json()
      setUser(respon.data)
      setIsLoggedIn(true)
      setUserID(respon.userId)
    } catch (err) {
      console.error('Login error:', err)
      setError(err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setError(null)
    setIsLoggedIn(false)
    setUserID(null)
    // console.log('logout user...')
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        signup,
        isLoading,
        error,
        userID,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
