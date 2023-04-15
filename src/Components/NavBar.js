import { useState } from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
    const [nav, setNav] = useState(true);

    const navSlide = () => {
        setNav(prev => !prev)
    }

    return  <div>
    <nav className={`${classes.main_nav} ${!nav ? classes.main__nav : null}`}>
        <div className={classes.nav_logo}>
            <img src="../logo.svg" alt="Official Logo" />
        </div>
        <ul className={classes.nav_links}>
            <li><a href="#" id="goat" className={classes.navbar_link}>Chrome Extension</a></li>
            <li><a href="#" className={classes.navbar_link}>Price Comparison</a></li>
            <li><a href="#" className={`${classes.navbar_link} ${classes.navbar__blog}`}>Blog</a></li>
        </ul>
        <div className={classes.nav_burger}>
            <img src={`${nav ? "./menu.svg" : "./close.svg"}`} onClick={navSlide} />
        </div>
    </nav>
        {
            !nav ?      
            <ul className={`${classes.mobile_nav} ${nav ? null :  classes.active}`}>
                <li><a href="#" id="goat" className="navbar--link">Chrome Extension</a></li>
                <li><a href="#" className="navbar--link">Price Comparison</a></li>
                <li><a href="#" className="navbar--link">Blog</a></li>
            </ul> : 
            null
        }
   
</div>
}

export default NavBar;