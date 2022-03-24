import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import { MyContext } from "./Context";

function Nav() {
  const{logged,setlogged,setcurrent}=useContext(MyContext)
  const [flag, setflag] = useState(false);

  const click=()=>{
    setlogged(false);
    setcurrent([])
  }

  const scroll = () => {
    if (window.scrollY > 100) {
      setflag(true);
      console.log("I am inside 500");
    } else if (window.scrollY < 100) {
      setflag(false);
      console.log("I am inside 1000");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <>
      <motion.nav className={flag ? "nav2" : "nav"} initial={{opacity:0,translateY:-200}} animate={{opacity:1,translateY:0}} transition={{duration:2, delay:0.1, staggerChildren: 0.1,
                delayChildren: 0.3,}}>
        <img
          src="https://www.schooglink.com/_next/static/images/logo-95ce09074fb484aceabb18e66b50190c.png"
          alt=""
        />
        <ul>
          
         <motion.li> <Link to="/">Home</Link> </motion.li>
         <motion.li> <Link to="/register">Register</Link> </motion.li>
       <li>{logged?<Link to="/login" onClick={click}>Log out</Link>:<Link to="/login" >Log in</Link>}</li>  
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </motion.nav>
    </>
  );
}

export default Nav;
