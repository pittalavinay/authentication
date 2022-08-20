import React from 'react'
import { auth } from './firebase'
import './App.css'
const Home = () => {
  return (
    <div>
    vinay
    <button onClick={()=>auth.signOut()} className='button'>sign out</button>
    </div>
  )
}

export default Home