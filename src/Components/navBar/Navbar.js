import { Outlet, useNavigate } from "react-router-dom";
import './style.css';

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="navbar-layout">
      <button onClick={() => navigate("/memorygame")}>Memory Game</button>
      <button onClick={() => navigate("/tictactoe")}>Tic Tac Toe</button>
      <button onClick={() => navigate("/colorpicker")}>Color Picker</button>
      <button onClick={() => navigate("/liveclock")}>Live Clock</button>
      <button onClick={() => navigate("/imageslider")}>Image Slider</button>
      <button onClick={() => navigate("/todo")}>To Do</button>
      <button onClick={() => navigate('/githubaccount')}>Git Hub Account</button>
      <button onClick={() => navigate('/ghfollowers')}>Git Hub followers</button>
      <Outlet />
    </div>
  )
}
export default Navbar;