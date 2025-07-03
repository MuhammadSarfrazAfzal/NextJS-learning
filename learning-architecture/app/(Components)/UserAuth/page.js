import react from 'react'
import { auth } from "../Auth/Auth" 
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
const page = () => {
  const[email,setEmail] = useState()
  const[password,setPassword] = useState()
  const signIn = async() => { 
          await createUserWithEmailAndPassword(auth,email,password)
  };
  return (
    <>
      <input type="text" placeholder="Type your email" onChange={(e)=> setEmail(e.target.value)}/>
      <input type="text" placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)} />
      <button onClick={signIn}>Sign In</button>
    </>

  )
}

export default page
