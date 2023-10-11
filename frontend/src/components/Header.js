import { useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctor",
    display: "Find a Doctor",
  },
  {
    path: "/service",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        // headerRef.current.classList.add("sticky__header");
      } else {
        // headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  return (
    <header className="container">
      {/* <div className="container"> */}
        {/* LOGO  */}
        {/* <div>
          <img src={logo} alt="logo" />{" "}
        </div> */}

        {/* MENU  */}
        {/* <div className="navigation">
          <ul className="menu">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path}>{link.display}</NavLink>
              </li>
            ))}
          </ul>
        </div> */}

        {/* nav right  */}
        
        <nav className="navbar navbar-expand-lg">
        <img src={logo} alt="logo" />{" "}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > */}
            {/* <span className="navbar-toggler-icon"></span> */}
          {/* </button> */}

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav mr-auto">
               {navLinks.map((link, index) => (
              <li className="nav-item"key={index +'navbar'}>
                 <NavLink to={link.path} className={({ isActive, isPending }) =>{
                  return `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`}} >{link.display}</NavLink>
                 </li>
                    ))}   
            </ul>
                <Link to="/login">
                  <button className="btn btn-outline-success my-2 my-sm-0">Login</button>
                </Link>
          </div>
        </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;
