import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="" className="navbar__a">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="navbar__icon">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/>
                </svg>
            </a>
            <a href="" className="navbar__a navbar__a--big">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="navbar__icon">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="3.2"/>
                    <path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                </svg>
            </a>
            <a href="" className="navbar__a">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="navbar__icon">
                    <path fill="none" d="M0 0h24v24H0V0z"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
            </a>
        </nav>
    );
};

export default NavBar;