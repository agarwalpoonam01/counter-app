import React, { Component } from 'react';
const NavBar = ({totalCounters}) => {
return ( 
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Number of different item selected <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
</nav> );
}

export default NavBar;