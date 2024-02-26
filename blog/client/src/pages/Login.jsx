import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
  

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {setUserInfo} = useContext(UserContext);


  const login = async (event) => {
    event.preventDefault();

    if(userName === "" || password === ""){
      alert("fill the field");
      return;
    } else{
      const reponse =  await fetch("http://localhost:8000/login",{
        method:"POST",
        body:JSON.stringify({userName, password}),
        headers: {"Content-Type" : "application/json"},
        credentials: 'include',
      })
  
      if(reponse.ok){

        reponse.json().then(userInfo => {
          setUserInfo(userInfo);
        })
        navigate("/");
  
      } else {
        alert("worng");
      }
    }
    
    
 

  }
  
  return (
   <>
    <h1 className='mt-5'>Login</h1>
    
    <form onSubmit={login}>
      <div className="mb-3 mt-3">
        <label className="form-label">Username</label>
        <input type="text" className='form-control' placeholder='Enter your Username' 
        value={userName}
        onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="text" className='form-control' placeholder='Enter your Password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div>
        <input type="submit" className='btn btn-dark' />
      </div>
    </form>


   </>
  )
}

export default Login