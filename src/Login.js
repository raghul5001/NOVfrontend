import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.scss"
 import { ToastContainer, toast } from 'react-toastify';

function Login() {


   const[username , setUsername] = useState('')
   const[password , setPassword] = useState('')

   const[oldUsername , setOldUsername] = useState(localStorage.getItem("Username"))
   const[oldPassword , setOldPassword] = useState(localStorage.getItem("Password"))

   const handleLogin = (e) =>{
     e.preventDefault()

     if(oldUsername === username && oldPassword === password){
           toast.success("Login Success")

           setTimeout(() =>{
               window.location.href ="/homepage"
           },3000)
         
     }else{
      toast.error("Login failed")

     }
   }


  return (
    <div>

      <ToastContainer/>
    
     <h1>This is Login page</h1>
      

      <form onSubmit={handleLogin}>
           <input type='text'
      placeholder='Enter the username'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />

      <input type='password'
      placeholder='Enter the password'
       value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <button type='submit'>Login</button>
      </form>
     
           
    </div>
  )
}

export default Login


