import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Pokemon Finder</h3>

      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/find-items">Find Items</Link>
        <Link to="/find-moves">Find Moves</Link>
        <Link to="/find-pokemon">Find Pokemon</Link>

        <button className="nav-btn Nav-CLose" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn Nav-Open" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};
export default Navbar;
