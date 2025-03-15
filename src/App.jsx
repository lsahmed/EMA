import React, { useState,useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     setUser(loggedInUser.role)
  //   }
  
  // }, [authData])
  


  const handleLogin = (email, password) => {
    if(email == "admin@me.com" && password == '123'){
      setUser('admin');
      localStorage.setItem("loggedInUser",JSON.stringify({ role:"admin" }));
      
    }else if(authData){
      const employee = authData.employees.find((e)=> email == e.email && password == e.password);
      console.log(employee);
       
      if(employee){
        console.log("Found the eail ad");
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({ role:"employee" }));
      }

    }
    else{
      alert("Invalid Credentials");
    }
  }

  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}  
      { user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : null) }
    </>
  )
}

export default App