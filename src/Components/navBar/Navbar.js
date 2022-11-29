import { Outlet, Link } from "react-router-dom";
import './style.css';

const Navbar = () => {
  return (
    <>
    
      <nav className="navbar-options">
        <ul className="navbar-select">
          <li className="navbar-list">
            <Link className='navbar-link' to="/memorygame">Memory game</Link>
          </li>
          <li className="navbar-list">
            <Link className='navbar-link' to="/tictactoe">Tic tac toe</Link>
          </li>
          <li className="navbar-list">
            <Link className='navbar-link' to="/colorpicker">Color picker</Link>
          </li>
          <li className="navbar-list">
            <Link className='navbar-link' to='/liveclock'>Live clock</Link>
          </li>
          <li className="navbar-list">
            <Link className='navbar-link' to='/imageslider'>Image slider</Link>
          </li>
          <li className="navbar-list">
            <Link className='navbar-link' to='/todo'>To do</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;