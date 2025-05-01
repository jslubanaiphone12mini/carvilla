import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './pages/UserList/UserList'
import Places from './pages/Places/Places'
import AddPlace from './pages/AddPlace/AddPlace'
import Authenticate from './pages/Authenticate/Authenticate'
import NotFoundPage from './pages/NotFoundPage'
import PlaceList from './pages/Places/PlaceList'
import UpdatePlace from './pages/UpdatePlace/UpdatePlace'
import LoggedInRoute from './LoggedInRoute'
import LoggedOutRoute from './LoggedOutRoute'

import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/places' element={<Places />} />

        {/* Protected Route */}
        <Route
          path='/addplace'
          element={
            <LoggedInRoute>
              <AddPlace />
            </LoggedInRoute>
          }
        />

        <Route
          path='/authenticate'
          element={
            <LoggedOutRoute>
              <Authenticate />
            </LoggedOutRoute>
          }
        />

        <Route path='/:uid/places' element={<PlaceList />} />

        <Route
          path='/updateplace/:pid'
          element={
            <LoggedInRoute>
              <UpdatePlace />
            </LoggedInRoute>
          }
        />

        {/* Show 404 component for unknown routes */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
