import React ,{useState}from 'react'
import {auth} from "./firebase"
import './App.css'
const User = () => {
    const[data,setdata]=useState(
        {
            email:"",
            password:""
        }
    )
    const{email,password}=data;
    const changeHandler=e=>
    {
        setdata({...data,[e.target.name]:e.target.value});
    }
    const signup=e=>
    {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(
            user=>window.alert("success")
        ).catch(err=>console.log(err))
    }
    const signin=e=>
    {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(
            user=>console.log(user)
        ).catch(err=>console.log(err))
    }
  return (
    <div>
      <form autoComplete='on' className='form'>
        <input type="text" placeholder="username" name="email" value={email} onChange={changeHandler}className='vinay'></input><br/>
        <input type="password" placeholder="password" name="password"value={password} onChange={changeHandler}className='vinay'></input><br/><br/><br/>
        <button onClick={signin} className='button'>signin</button>&nbsp;&nbsp;
        <button onClick={signup} className='button'>Signup</button>
      </form>
    </div>
  )
}

export default User