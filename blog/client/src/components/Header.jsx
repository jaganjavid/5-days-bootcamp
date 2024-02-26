
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {

    const {userInfo,setUserInfo} = useContext(UserContext);
   

    useEffect(() => {
      fetch("http://localhost:8000/profile", {
        credentials: "include"
      }).then(response => {
       response.json().then(userInfo => {
        setUserInfo(userInfo);
       });
      })
    }, [])
    
    const logout = () => {
        fetch("http://localhost:8000/logout", {
            method:"POST",
            credentials:"include",
        })

        setUserInfo(null);
    }

    const userName = userInfo?.userName;

    return (
        <header>
            <div className="container">
                <div className="header-wrapper">
                    <Link to="/" className="logo">
                        <h4>Our Blog</h4>
                    </Link>

                    {userName && (
                         <nav>
                         <Link to="/create" className="btn btn-outline-dark">Create Post</Link>
                         <Link onClick={logout} to="#" className="btn btn-outline-dark">Logout</Link>
                    </nav>
                    )}
                    
                    {!userName && (
                        <nav>
                            <Link to="/login" className="btn btn-outline-dark">Login</Link>
                            <Link to="/register" className="btn btn-outline-dark">Regiter</Link>
                       </nav>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;