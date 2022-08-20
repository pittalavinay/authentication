import React,{useEffect,useState} from 'react'
import Home from './Home'
import { auth } from './firebase'
import User from './User'
const App = () => {
  const[presentuser,setpresentuser]=useState(null);
  useEffect(()=>{
auth.onAuthStateChanged(user=>{
  if(user)setpresentuser({
  uid:user.uid,
  email:user.email
})
else{
setpresentuser(null);
}})
  },[])
  return (
    <div>
     <center>{presentuser?<Home/>:<User/>} </center> 
    </div>
  )
}

export default App
