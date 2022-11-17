import { Link, NavLink } from "react-router-dom";

function Navbar() {
   return (
      <nav className="Navbar">
         {/* <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/projects">Projects</Link> */}

         <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/projects">Projects</NavLink>
      </nav>
   );
}

export default Navbar;
