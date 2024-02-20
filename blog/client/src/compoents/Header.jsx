import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-wrapper">
                    <a href="#" className="logo">
                        <h4>Our Blog</h4>
                    </a>
                    <nav>
                        <a href="#" className="btn btn-outline-dark">Login</a>
                        <a href="#" className="btn btn-outline-dark">Register</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;