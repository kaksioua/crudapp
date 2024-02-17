import { useEffect, useState } from 'react'
import Login from './components/Login/index'
import Dashbord from './components/Dashboard/index'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')))
  }, [])

  return (
    <>
      {isAuthenticated ? (
        <Dashbord setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  )
}

export default App
