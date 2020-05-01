import React, { useEffect, useRef, useState } from "react";

// Components
import Navigation from "./components/Navigation";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(null);
  const header = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? header.current.classList.add("sticky")
        : header.current.classList.remove("sticky");
    });
  });
  
  useEffect(() => {
    setHeaderHeight(header.current.clientHeight);
  }, [headerHeight]);

  //   const toggleMenuHandeler = (e, toggleButton = false) => {
  //     toggleButton
  //       ? toggleMenu
  //         ? setToggleMenu(false)
  //         : setToggleMenu(true)
  //       : setToggleMenu(false);
  //   };
  return (
    <>
      {headerHeight && <div style={{ height: headerHeight + 'px' }}></div>}
      <header ref={header} className="fixed-top main-menu">
        <div className="container">
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
