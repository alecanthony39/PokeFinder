import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Pokemon Finder</h3>

      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/find-items">Find Items</a>
        <a href="/find-moves">Find Moves</a>

        <a href="/find-pokemon">Find Pokemon</a>

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
