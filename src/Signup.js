import React, { useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';

function Signup() {

    const[fname , setFname] = useState('')
    const[lname , setLname] = useState('')
      const[username , setUsername] = useState('')
    const[pass , setPass] = useState('')
  
    const handleSignup = (e) =>{
       e.preventDefault()
       if(fname === '' || lname === '' || pass === '' || username === ''){
          toast.error("pls fill all the details")
       }else{
         localStorage.setItem("Username" , username)
         localStorage.setItem("Password" , pass)
         toast.success("Signup Success")

         setTimeout(() =>{
            window.location.href = "/loginpage"
         }, 3000)
        
       }
    }

  return (
    <div>
         <ToastContainer />
      <h1>Signup Page</h1>

      <form onSubmit={handleSignup}>
      <input
       type='text'
       placeholder='Enter the FirstName'
       value={fname}
       onChange={(e) => setFname(e.target.value)}
       />
         <input
       type='text'
       placeholder='Enter the LastName'
        value={lname}
       onChange={(e) => setLname(e.target.value)}
       />

         <input
       type='text'
       placeholder='Enter the Username'
        value={username}
       onChange={(e) => setUsername(e.target.value)}
       />
         <input
       type='password'
       placeholder='Enter the password'
        value={pass}
       onChange={(e) => setPass(e.target.value)}
       />

       <button type='submit'>Sign Up</button>   
       </form>   
    </div>
  )
}

export default Signup
