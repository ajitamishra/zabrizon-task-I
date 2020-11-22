import React from "react";
import "./App.css";
import classes from "./Header.module.css";
function Header () {
  
          return (
               <header>
                    <div className={classes.logo}>
                         <h3>Real Estate</h3>
                    </div>
                    <nav>
                         <a href="#createads">Create Ads</a>
                         <a href="#about">About</a>
                         <a href="#login">Login</a>
                         <a href="#register" className={classes.register}>
                              Register
                         </a>
                    </nav>
               </header>
          );
     }

export default Header;
