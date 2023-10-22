import { Link, Outlet } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import React from "react";
import './NavBar.css';

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="links">
          <Link to=''>Shop</Link>
          <Link to='cart'>
            <ShoppingCart size={32}/>
          </Link>
        </div>
      </div>
      <Outlet />
    </React.Fragment>

  );
}

export default NavBar;