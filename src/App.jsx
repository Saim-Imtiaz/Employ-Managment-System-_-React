import { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
// import AdminDashboard from './components/dashBoard/adminDashboard'
import AdminDashboard from "./components/dashBoard/AdminDashboard"
import EmployeDashboard from './components/dashBoard/EmployeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [userData, setUserData  ] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const handelLogin = (email, password) => {
    if(email == "admin@me.com" && password == "123"){
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({role : 'admin'}))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if(employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role : 'employee', data : employee}))
      }
    } else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handelLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser = {setUser}/> : (user == 'employee' ? <EmployeDashboard changeUser = {setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App
