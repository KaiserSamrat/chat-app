import React from 'react';

const Navbar = () => {
    return (
        <div>
          <div className="navbar">
            <span className="logo">Lama chat</span>
            <div className="user">
                <img/>
                <span></span>
                <button>Log out</button>
            </div>
          </div>
        </div>
    );
}

export default Navbar;