import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './views/Navbar'
import { Login } from './views/Login'
import { User } from './views/User'
import { UserContext, user } from './contexts/UserContext'
import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Home } from './views/Home'

function App() {
  const [currentUser, setCurrentUser] = useState<user>({} as user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({ Name: user.displayName as string, Avater: user.photoURL as string });
      } else {
        setCurrentUser({} as user);
      }

    });

  }, [])

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App
