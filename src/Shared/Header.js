import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
    return (
 <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">EVideoPrime</a>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-sm-inline-flex justify-content-end" id="collapsibleNavId">
      <ul className="navbar-nav flex-grow-1">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home<span className="visually-hidden">(current)</span></NavLink>
        </li>
      </ul>
      <ul className="navbar-nav">
      <li className="nav-item">
          <NavLink className="nav-link" to="/login">LogIn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>



        
    )
}
