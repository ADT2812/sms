import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const { userData, setUserData } = useContext(AuthContext)

  console.log("All User Data:", userData)


  useEffect(() => {

    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {

      const data = JSON.parse(loggedInUser)

      setUser(data.role)
      setLoggedInUserData(data.data)

    }

  }, [])



  const handleLogin = (email, password) => {

    console.log("Email:", email)
    console.log("Password:", password)


    // Admin Login
    const admin = userData?.admin?.find(
      (e) =>
        e.email === email &&
        e.password.toString() === password
    )


    if (admin) {

      setUser('admin')

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'admin',
          data: admin
        })
      )

      return

    }



    // Employee Login
    const employee = userData?.employees?.find(
      (e) =>
        e.email.toLowerCase() === email.toLowerCase() &&
        e.password.toString() === password
    )


    console.log("Logged Employee:", employee)


    if (employee) {

      setUser('employee')
      setLoggedInUserData(employee)


      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'employee',
          data: employee
        })
      )

    } 
    else {

      alert("Invalid credentials.")

    }

  }



  return (
    <>
      {!user ? (

        <Login handleLogin={handleLogin} />

      ) : user === "admin" ? (

        <AdminDashboard 
          data={loggedInUserData}
          changeUser={setUser}
        />

      ) : user === "employee" ? (

        <EmployeeDashboard 
          data={loggedInUserData}
          changeUser={setUser}
        />

      ) : null}
    </>
  )
}


export default App