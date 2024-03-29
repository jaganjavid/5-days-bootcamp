import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
 

  const register = async (event) => {
    event.preventDefault();

    if(userName === "" || password === ""){
      alert("Fill the form");
      return;
    }
    
   const reponse =  await fetch("http://localhost:8000/register",{
      method:"POST",
      body:JSON.stringify({userName, password}),
      headers: {"Content-Type" : "application/json"}
    })

    if(reponse.status === 200){
      alert("Registration Success");
      navigate("/login");
      setUserName("");
      setPassword("");
    } else {
      alert("Username already exist")
    }
  }
  
  return (
   <>
    <h1 className='mt-5'>Register</h1>
    
    <form onSubmit={register}>
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

export default Register