import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md"
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
           <div className="flexCenter innerWidth paddings h-container">
               {/* logo */}
               <img src="logo3.png" alt="logo" width={100} />

               {/* menu */}
               <OutsideClickHandler
               onOutsideClick={() => {
                setMenuOpened(false);
              }}
               >
             <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
            >
            <a href="#Accueil">Accueil</a>
            <a href="/lawyer">Devenir un avocat</a>
            <a href="#Rdv">Prendre un-rendez vous</a>
    
            <a href="/About-Us">A propos de nous</a>
            <a href="/logIn">
            <MdOutlineAccountCircle className="navbar-user-icon" />
            </a>
            <button className="buttn">
              <a href="mailto:zainkeepscode@gmail.com">Contact</a>
            </button>
          
         
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
