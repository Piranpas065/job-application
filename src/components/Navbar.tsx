import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
    
      <Link to="/">Job Board</Link>
      <div>
        <NavLink to="/">Jobs</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;