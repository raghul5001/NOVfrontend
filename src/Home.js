import React, { useEffect, useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';


function Home() {


  const[oldUsername , setOldUsername] = useState(localStorage.getItem("Username"))

  useEffect(() =>{
     toast.success("Welcome  " + oldUsername)
  },[])

  
 
  return (
    <div>
      <ToastContainer/>
   
       <h1>This is Home page</h1>

       
     
    </div>
  )
}

export default Home
