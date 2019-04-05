import React from 'react';

const Title = () => {
    return (
        <div className="Title-container">
            <h1 className="Title-heading">My Friends App</h1>
            <ul className="Title-navbar">
                <a 
                    className="Title-navbar-link" 
                    href="http://localhost:3000">
                    Home
                </a>
                <a 
                    className="Title-navbar-link" 
                    href="http://localhost:3000"
                >
                    Friends
                </a>
            </ul>
        </div>
    )        
};

export default Title;